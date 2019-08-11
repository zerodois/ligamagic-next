import { useState } from 'react';
import 'isomorphic-fetch'
import dynamic from 'next/dynamic';
import { Animated } from 'react-animated-css';
import Form from '../components/Form/Form';
import Header from '../components/header';
import Panel from '../components/Panel/Panel';
import { search, format } from '../services/search';
import { calculate } from '../services/best';
// import mock from '../mock/data.json';

const Loading = dynamic(() => import('../components/Loading'), { ssr: false });

const formatInt = (number, zeros) => `${'0'.repeat(zeros)}${number}`.substr(-2);

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [cards, setCards] = useState(0);
  const [best, setBest] = useState(null);

  const process = async (cards, options) => {
    const res = await calculate({ cards, options });
    setBest(res);
    setLoading(false);
  };

  const searchItems = async (form) => {
    const request = format(form);
    setTotal(request.cards.length);
    setLoading(true);
    const cards = [];
    for (const card of request.cards) {
      const found = await search({ card, filters: request.filters });
      cards.push(found);
      setCards(cards.length);
    }
    await process(cards, request.options);
    setLoading(false);
  };

  const perc = parseFloat((cards / total) * 100).toFixed(2);
  const loadingText = perc !== '100.00'
    ? `Buscando cartas em estoque ${formatInt(cards, 2)}/${formatInt(total, 2)}`
    : 'Calculando melhor compra';

  return (
    <main className="board flex flex-1 flex-center">
      <Header />
      <div className="fixed">
        <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={loading}>
          <Loading
            progress={perc}
            show={loading}
            text={loadingText}
          />
        </Animated>
      </div>
      <div className="fixed" style={{ zIndex: 0 }}>
        <Animated animationIn="bounceInUp" animationOut="bounceOutUp" isVisible={!!best}>
          <div className="board__res flex">
            <Panel
              result={best}
            />
          </div>
        </Animated>
      </div>
      <Animated animationIn="bounceInRight" animationOut="bounceOutRight" isVisible={!loading && !best}>
        <Form
          onSubmit={searchItems}
        />
      </Animated>
    </main>
  );
}

export default Index;

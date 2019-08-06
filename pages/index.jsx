import { useState } from 'react';
import 'isomorphic-fetch'
import dynamic from 'next/dynamic';
import { Animated } from 'react-animated-css';
import Form from '../components/Form/Form';
import Header from '../components/header';
import { search, format } from '../services/search';

const Loading = dynamic(() => import('../components/Loading'), { ssr: false });

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [cards, setCards] = useState([]);

  const searchItems = async (form) => {
    const request = format(form);
    setLoading(true);
    setTotal(request.cards.length);
    const cards = [];
    for (const card of request.cards) {
      const found = await search({ card, filters: request.filters });
      cards.push(found);
      setCards([...cards]);
    }
  };

  const perc = parseFloat((cards.length / total) * 100).toFixed(2);

  return (
    <main className="board flex flex-1 flex-center">
      <Header />
      <div className="fixed">
        <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={loading}>
          <Loading
            progress={perc}
            show={loading}
            text={`Buscando cartas em estoque ${cards.length}/${total}`}
          />
        </Animated>
      </div>
      <Animated animationIn="bounceInRight" animationOut="bounceOutRight" isVisible={!loading}>
        <Form
          onSubmit={searchItems}
        />
      </Animated>
    </main>
  );
}

export default Index;

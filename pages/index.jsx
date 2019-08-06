import { useState } from 'react';
import 'isomorphic-fetch'
import { Animated } from 'react-animated-css';
import Form from '../components/Form/Form';
import Header from '../components/header';
import dynamic from 'next/dynamic';

const Loading = dynamic(() => import('../components/Loading'), { ssr: false });

let fn
setTimeout(() => fn(true), 3000);
setTimeout(() => fn(false), 7000);

const Index = () => {
  const [loading, setLoading] = useState(false);
  fn = setLoading;
  return (
    <main className="board flex flex-1 flex-center">
      <Header />
      <div className="fixed">
        <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={loading}>
          <Loading
            progress={32}
            show={loading}
            text={`Buscando cartas em estoque`}
          />
        </Animated>
      </div>
      <Animated animationIn="bounceInRight" animationOut="bounceOutRight" isVisible={!loading}>
        <Form
          onSubmit={config => null}
        />
      </Animated>
    </main>
  );
}

export default Index;

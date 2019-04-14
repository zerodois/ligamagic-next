import 'isomorphic-fetch'
import { useState } from 'react';
import Head from 'next/head';

import { best } from '../services/search';
import { to } from '../utils';

import Header from '../components/header';
import Form from '../components/Form/Form';
import Panel from '../components/Panel/Panel';
import CardView from '../components/CardView/CardView';
import mock from '../mock';

import '../sass/main.scss';

const search = async (form, setter) => {
  const [err, response] = await to(best(form));
  if (err) {
    alert('Erro ao buscar na api');
    console.error(err)
    return;
  }
  setter(response);
};

const Index = () => {
  const [result, setResult] = useState(mock);
  const [info, setInfo] = useState({ store: mock.stores[0], card: mock.stores[0].cards[0] });
  return (
    <main className="board">
      <Head>
        <title>Ligamagic Next</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <section className="flex flex-1">
        <Form
          onSubmit={config => search(config, setResult)}
        />
        <Panel
          onCardClick={setInfo}
          result={result}
        />
        <CardView
          info={info}
        />
      </section>
    </main>
  );
}

export default Index;

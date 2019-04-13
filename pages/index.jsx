import 'isomorphic-fetch'
import { useState } from 'react';

import { best } from '../services/search';
import { to } from '../utils';

import Header from '../components/header';
import Form from '../components/Form/Form';
import Panel from '../components/Panel/Panel';
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
  return (
    <main className="board">
      <section className="flex">
        <Form
          onSubmit={config => search(config, setResult)}
        />
        <Panel
          result={result}
        />
      </section>
    </main>
  );
}

export default Index;

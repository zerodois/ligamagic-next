import 'isomorphic-fetch'
import { useState } from 'react';

import { best } from '../services/search';
import { to } from '../utils';

import Header from '../components/header';
import Form from '../components/Form/Form';
import Panel from '../components/panel';
import mock from '../mock';

import '../sass/main.scss';

const search = async (form, setter) => {
  const [err, response] = await to(best(form));
  if (err) {
    alert('Erro ao buscar na api');
    console.error(err)
    return;
  }
  console.log(JSON.stringify(response, null, 2));
  setter(response);
};

const Index = () => {
  const [result, setResult] = useState(mock);
  return (
    <main className="board">
      <Header />
      <section className="flex">
        <div className="flex flex-1 flex-column">
          <Form
            onSubmit={config => search(config, setResult)}
          />
        </div>
        <div className="flex-1">
          <Panel
            result={result}
          />
        </div>
      </section>
    </main>
  );
}

export default Index;

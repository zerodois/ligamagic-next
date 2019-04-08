import 'isomorphic-fetch'
import { useState } from 'react';

import { best } from '../services/search';
import { to } from '../utils';

import Header from '../components/header';
import Form from '../components/Form/Form';
import Panel from '../components/panel';

import '../sass/main.scss';

const search = async (textList, setter) => {
  const [err, response] = await to(best(textList));
  if (err) {
    alert('Erro ao buscar na api');
    console.error(err)
    return;
  }
  setter(response);
};

const Index = () => {
  const [result, setResult] = useState(null);
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

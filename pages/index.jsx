import Header from '../components/header';
import Input from '../components/Input/Input';
import Panel from '../components/panel';
import 'isomorphic-fetch'
import '../sass/main.scss';

const Index = ({ render }) => {
  return (
    <main className="board">
      <Header />
      <section className="flex">
        <div className="flex flex-1 flex-column">
          <div>
            <button>Calcular menor preço</button>
            {render}
          </div>
          <Input />
        </div>
        <div className="flex-1">
          <Panel />
        </div>
      </section>
    </main>
  );
}

export default Index;

import Header from '../components/header';
import Panel from '../components/Panel/Panel';
import mock from '../mock'

const Buy = () => {
  return (
    <main>
      <Header />
      <section className="flex flex-center">
        <Panel result={mock} />
      </section>
    </main>
  );
}

export default Buy;
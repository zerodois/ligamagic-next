import 'isomorphic-fetch'
import Form from '../components/Form/Form';
import Header from '../components/header';

const Index = () => {
  return (
    <main className="board flex flex-1 flex-center">
      <Header />
      <Form
        onSubmit={config => null}
      />
    </main>
  );
}

export default Index;

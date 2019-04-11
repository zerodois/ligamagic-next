import './Panel.scss';
import Card from '../Card/Card';

const Store = ({ item }) => (
  <section className="store">
    <header className="store__header flex">
      <img className="store__header__logo" src={`https:${item.store.image}`} alt={`logo ${item.store.name}`}/>
      <h1 className="store__header__title">{item.store.name}</h1>
    </header>
    <div className="grid grid-7">
      {item.cards.map((card, index) => (
        <Card
          key={index}
          {...card}
        />
      ))}
    </div>
  </section>
);

const Panel = ({ result }) => !result ? null : (
  <div className="panel">
    <h3>Custo estimado: {result.estimatedCost}</h3>
    <div>
      {result.stores.map((item, index) => (
        <Store
          key={index}
          item={item}
        />
      ))}
    </div>
    {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
  </div>
);

export default Panel;

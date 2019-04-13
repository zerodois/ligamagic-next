import { useState, useEffect } from 'react';
import { formatPrice } from '../../utils';
import './Store.scss';
import Card from '../Card/Card';

const calculate = arr => 10 + arr.reduce((prev, curr) => prev + curr.price, 0);

const Store = ({ item }) => {
  const [sum, setSum] = useState(calculate(item.cards));
  const protocol = item.store.image.charAt(0) === '/'
    ? 'https:'
    : '';
  const image = `${protocol}${item.store.image}`;
  useEffect(
    () => setSum(calculate(item.cards)),
    [item.cards]
  );
  return (
    <section className="store flex-1 pointer">
      <main className="store__item flex flex-1">
        <div className="store__item__left">
          <img src={image} alt={`logo ${item.store.name}`}/>
        </div>
        <div className="store__item__main flex flex-column flex-1">
          <strong className="store__item__main__title">{item.store.name}</strong>
          <span className="store__item__main__text">Frete estimado R$ 10,00</span>
          <small className="store__item__main__text">{item.cards.length} cartas</small>
        </div>
        <div className="store__item__right flex-center flex">
          <span className="text--primary">R$ {formatPrice(sum)}</span>
        </div>
      </main>
      {/*<header className="store__header flex">
        <img className="store__header__logo" src={`https:${item.store.image}`} alt={`logo ${item.store.name}`}/>
        <h1 className="store__header__title">{item.store.name}</h1>
      </header>
      <div className="grid grid-5">
        {item.cards.map((card, index) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>*/}
    </section>
  );
};

export default Store;

import { useState, useEffect } from 'react';
import { formatPrice } from '../../utils';
import Collapse from '../Collapse/Collapse';
import './Store.scss';
import Card from '../Card/Card';

const calculate = arr => 10 + arr.reduce((prev, curr) => prev + curr.price, 0);

const Store = ({ item, onCardClick }) => {
  const [sum, setSum] = useState(calculate(item.cards));
  const [expanded, setExpanded] = useState(true);
  const icon = !expanded ? 'icon--minimized' : '';
  useEffect(
    () => setSum(calculate(item.cards)),
    [item.cards]
  );
  return (
    <section className="store flex-1">
      <main className="store__item flex flex-1">
        <div className="store__item__main flex flex-1">
          <span
            onClick={() => setExpanded(!expanded)}
            className={`material-icons store__item__main__title pointer ${icon}`}
          >
            keyboard_arrow_down
          </span>
          <strong className="store__item__main__title store__item__main__title--main">{item.store.name}</strong>
          <strong className="store__item__main__title">({item.cards.length})</strong>
        </div>
      </main>
      <Collapse expanded={expanded}>
        <ul className="store-list">
          {item.cards.map((card, index) => (
            <Card
              onClick={card => onCardClick({ store: item, card })}
              key={index}
              card={card}
            />
          ))}
        </ul>
      </Collapse>
    </section>
  );
};

export default Store;

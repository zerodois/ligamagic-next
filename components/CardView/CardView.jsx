import './CardView.scss';
import { formatUrl, formatPrice } from '../../utils';

const Empty = () => (
  <section className="cardview flex flex-1"></section>
);

const CardView = ({ info }) => {
  if (!info) {
    return (<Empty/>);
  }
  const { store, card } = info;
  return (
    <section className="cardview flex-1">
      <img
        className="cardview__card"
        src={formatUrl(card.image)}
        alt={`carta ${card.name}`}
      />
      <div className="cardview__info">
        <div>
          <small>{card.name}</small>
        </div>
        <div className="text--primary text--bold cardview__info__price">R$ {formatPrice(card.price)}</div>
        <div style={{ padding: '0 1rem' }}>
          <button
          className="button button--full button--primary button--rounded"
          >
          Comprar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardView;

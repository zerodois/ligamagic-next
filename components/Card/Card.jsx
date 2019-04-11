import './Card.scss'
import { buyUrl, formatPrice } from '../../utils';

const Card = (props) => {
  const {
    image,
    name,
    price,
    offer,
  } = props;
  const url = image.charAt(0) === '/'
    ? 'https:'
    : '';
  return (
    <div className="card">
      <img className="card__image" src={`${url}${image}`} />
      <a target="__blank" href={buyUrl(offer)}>R$ {formatPrice(price)}</a>
      <small className="card__name">{name}</small>
    </div>
  );
};

export default Card;

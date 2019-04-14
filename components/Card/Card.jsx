import './Card.scss'
import { buyUrl, formatPrice } from '../../utils';

const Card = (props) => {
  const { card, onClick = null } = props;
  const {
    price,
    name,
    offer,
    image,
  } = card;
  const url = image.charAt(0) === '/'
    ? 'https:'
    : '';
  return (
    <div className="card pointer" onClick={_ => onClick(card)}>
      <img className="card__image" src={`${url}${image}`} />
    </div>
  );
};

export default Card;

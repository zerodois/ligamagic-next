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
  return (
    <li className="card flex pointer" onClick={_ => onClick(card)}>
      <span className="flex-1">{name}</span>
      <span className="text--bold">R$ {parseFloat(price).toFixed(2).replace('.', ',')}</span>
      <span className="card__status">{card.status.id}</span>
    </li>
  );
};

export default Card;

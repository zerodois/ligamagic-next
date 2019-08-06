import './Card.scss'
import { formatPrice } from '../../utils';

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
      <span className="text--bold">R$ {formatPrice(price)}</span>
      <span className="card__status">{card.status.id}</span>
    </li>
  );
};

export default Card;

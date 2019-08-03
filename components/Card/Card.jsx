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
    <li className="card pointer" onClick={_ => onClick(card)}>
      <span>{name}</span>
    </li>
  );
};

export default Card;

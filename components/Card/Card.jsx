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
    <a
      href={`https://www.ligamagic.com.br/b/?p=e${offer}`}
      className="card flex pointer"
      target="__blank"
    >
      <span className="flex-1">{name}</span>
      <span className="text--bold">R$ {formatPrice(price)}</span>
      <span className="card__status">{card.status.id}</span>
    </a>
  );
};

export default Card;

import './Card.scss'

const Card = (props) => {
  const {
    image,
  } = props;
  const url = image.charAt(0) === '/'
    ? 'https:'
    : '';
  return (
    <div className="card">
      <img className="card__image" src={`${url}${image}`} />
    </div>
  );
};

export default Card;

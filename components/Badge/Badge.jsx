import './Badge.scss';

const Badge = ({ text, active, onClick, id }) => {
  return (
    <div
      onClick={_ => onClick ? onClick(id) : null}
      className={[
        "badge text--uppercase flex flex-center pointer",
        active ? 'badge--active' : '',
      ].join(' ')}
    >
      {text}
    </div>
  );
};

export default Badge;

import './Badge.scss';

const Badge = ({ text, state = 'primary' }) => (
  <span className={`badge badge--${state}`}>{text}</span>
);

export default Badge;

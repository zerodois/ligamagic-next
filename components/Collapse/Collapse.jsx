import './Collapse.scss';

const Collapse = ({ expanded, children, className = '' }) => {
  const coll = expanded ? '' : 'collapse--hidden';
  return (
    <div className={`collapse ${coll} ${className}`}>{children}</div>
  );
};

export default Collapse;

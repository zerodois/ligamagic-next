import './Collapse.scss';

const Collapse = ({ expanded, children }) => {
  const coll = expanded ? '' : 'collapse--hidden';
  return (
    <div className={`collapse ${coll}`}>{children}</div>
  );
};

export default Collapse;

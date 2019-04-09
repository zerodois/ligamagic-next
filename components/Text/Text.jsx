import './Text.scss';

const Text = ({ onChange }) => {
  return (
    <div className="text flex flex-1">
      <textarea
        className="text__textarea"
        placeholder="Lista de cartas"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default Text;

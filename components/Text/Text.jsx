import './Text.scss';

const Text = ({ onChange }) => {
  return (
    <div className="input flex flex-1">
      <textarea
        className="input__textarea"
        placeholder="Lista de cartas"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default Text;

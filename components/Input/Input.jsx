import './Input.scss';

const Input = ({ onChange }) => {
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

export default Input;

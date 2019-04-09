import { useState } from 'react';
import './Input.scss';

const Input = (props) => {
  const {
    bottom,
    type = 'text',
    placeholder = '',
    state = 'primary',
    ...rest
  } = props;
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');
  const modifiers = [
    'box flex flex-1',
    focus ? 'box--active' : null,
  ];
  return (
    <div className={`flex flex-column flex-1 input-box input-box--${state}`}>
      <div className={modifiers.join(' ')}>
        <label className="box__container__placeholder" htmlFor="input">{placeholder}</label>
        <div className="box__container flex flex-1">
          <input
            onFocus={_ => setFocus(true)}
            onBlur={_ => setFocus(!!text)}
            onChange={setText}
            className="box__container__input flex-1"
            name="input"
            type={type}
            {...rest}
          />
        </div>
      </div>
      {!bottom ? null : (
        <small>{bottom}</small>
      )}
    </div>
  );
};

export default Input;


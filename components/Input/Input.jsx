import { useState } from 'react';
import './Input.scss';

const Input = (props) => {
  const {
    type = 'text',
    placeholder = '',
    state = 'primary',
    ...rest
  } = props;
  const [focus, setFocus] = useState(false);
  const modifiers = [
    'box flex flex-1',
    focus ? 'box--active' : null,
    `box--${state}`
  ];
  return (
    <div className={modifiers.join(' ')}>
      <label className="box__container__placeholder" htmlFor="input">{placeholder}</label>
      <div className="box__container flex flex-1">
        <input
          onFocus={_ => setFocus(true)}
          onBlur={_ => setFocus(false)}
          className="box__container__input flex-1"
          name="input"
          type={type}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;


import { useState } from 'react';
import './Input.scss';

const Factory = ({ type = 'text', ...props }) => (
  type === 'textarea' ? (
    <textarea {...props}></textarea>
  ) : (
    <input type={type} {...props} />
  )
);

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
  const active = focus || !!text;
  const modifiers = [
    'box flex flex-1',
    active ? 'box--active' : null,
  ];
  return (
    <div className={`flex flex-column flex-1 input-box input-box--${state}`}>
      <div className={modifiers.join(' ')}>
        <label className="box__container__placeholder" htmlFor="input">{placeholder}</label>
        <div className="box__container flex flex-1">
          <Factory
            onFocus={_ => setFocus(true)}
            onBlur={_ => setFocus(false)}
            onChange={setText}
            className="box__container__input flex-1"
            name="input"
            type={type}
            {...rest}
          />
        </div>
      </div>
      {!bottom ? null : (
        <small className={focus ? 'active' : null}>{bottom}</small>
      )}
    </div>
  );
};

export default Input;


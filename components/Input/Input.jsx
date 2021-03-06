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
    onChange,
    type = 'text',
    className = '',
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
    focus ? 'box--focus' : null,
  ];
  const onUpdate = (e) => {
    const text = e.target.value;
    setText(text);
    if (!onChange) {
      return;
    }
    onChange(text);
  }
  return (
    <div className={`flex flex-column flex-1 input-box input-box--${state}`}>
      <div className={modifiers.join(' ')}>
        <label className="box__container__placeholder" htmlFor="input">{placeholder}</label>
        <div className="box__container flex flex-1">
          <Factory
            onFocus={_ => setFocus(true)}
            onBlur={_ => setFocus(false)}
            onChange={onUpdate}
            className={`box__container__input flex-1 ${className}`}
            name="input"
            type={type}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;


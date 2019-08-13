import { useState } from 'react';
import './Form.scss';
import Badge from '../Badge/Badge';
import { status } from '../../utils';

const initialState = {
  list: '',
  free: '',
  ban: '',
};

const states = status
  .reduce((p, c, index) => ({ ...p, [c.id]: index < 4 }), {});

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });
  const [filter, setFilter] = useState({ ...states });

  const submitForm = () => {
    const formated = { ...form };
    formated.status = Object.entries(filter)
      .filter(([, value]) => value)
      .map(([key]) => key);
    onSubmit(formated);
  };

  return (
    <div className="form flex">
      <div className="form__container">
        <header className="header flex">
          <img src="/static/logo.svg" alt="logo Magic Next"/>
          <h1 className="header__title">Magic Next</h1>
        </header>
        <div className="form__row">
          <textarea
            onChange={e => setForm({ ...form, list: e.target.value })}
            placeholder="Lista de cartas"
            className="form__input input no-resize"
          />
        </div>
        <div className="form__row">
          <input
            className="input"
            bottom='separadas por ;'
            onChange={e => setForm({ ...form, free: e.target.value })}
            placeholder="Lojas com frete gratuito"
          />
        </div>
        <div className="form__row flex status" style={{ flexWrap: 'wrap' }}>
          {status.map(item => (
            <Badge
              onClick={id => setFilter({ ...filter, [id]: !filter[id] })}
              active={filter[item.id]}
              text={item.id}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        <div className="submit">
          <button
            className="button button--primary text--bold"
            onClick={submitForm}
          >
            Estimar preço
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

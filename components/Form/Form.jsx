import { useState } from 'react';
import Input from '../Input/Input';
import './Form.scss';
import Badge from '../Badge/Badge';
import { status } from '../../utils';

const initialState = {
  list: '',
  free: '',
  ban: '',
};

const states = status
  .reduce((p, c) => ({ ...p, [c.id]: true }), {});

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });
  const [filter, setFilter] = useState({ ...states });
  return (
    <div className="form flex">
      <div>
        <header className="header flex">
          <img src="/static/liga.svg" alt="logo Ligamagic"/>
          <h1 className="header__title">Ligamagic Next</h1>
        </header>
        <Input
          className="text-area"
          type="textarea"
          placeholder="Lista de cartas"
          onChange={list => setForm({ ...form, list })}
        />
        <div style={{ marginTop: '.5rem' }}>
          <Input bottom='separadas por ;' onChange={free => setForm({ ...form, free})} placeholder="Lojas com frete gratuito"/>
        </div>
        <div className="flex status" style={{ flexWrap: 'wrap' }}>
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
            className="button button--primary text--bold text--uppercase pointer"
            onClick={_ => onSubmit(form)}
          >
            Estimar preço
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

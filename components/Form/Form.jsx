import { useState } from 'react';
import Input from '../Input/Input';
import './Form.scss';

const initialState = {
  list: '',
  free: '',
  ban: '',
};

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });
  return (
    <div className="form flex">
      <div>
        <header className="header">
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
        <button
          className="button button--primary text--bold text--uppercase pointer"
          onClick={_ => onSubmit(form)}
        >
          Estimar preço
        </button>
      </div>
    </div>
  );
};

export default Form;

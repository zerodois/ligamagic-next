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
    <div className="form">
      <button
        className="button button--primary pointer"
        onClick={_ => onSubmit(form)}
      >
        Estimar preço
      </button>
      <div className="flex row" style={{ marginTop: '.5rem' }}>
        <Input bottom='separadas por ;' onChange={ban => setForm({ ...form, ban})} placeholder="Lojas Banidas"/>
        <Input bottom='separadas por ;' onChange={free => setForm({ ...form, free})} placeholder="Lojas com frete gratuito"/>
      </div>
      <Input
        className="text-area"
        type="textarea"
        placeholder="Lista de cartas"
        onChange={list => setForm({ ...form, list })}
      />
    </div>
  );
};

export default Form;


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
        <button
          className="button button--primary pointer button--full"
          onClick={_ => onSubmit(form)}
        >
          Estimar preço
        </button>
        <Input
          className="text-area"
          type="textarea"
          placeholder="Lista de cartas"
          onChange={list => setForm({ ...form, list })}
        />
        <div style={{ marginTop: '.5rem' }}>
          <Input bottom='separadas por ;' onChange={ban => setForm({ ...form, ban})} placeholder="Lojas Banidas"/>
          <Input bottom='separadas por ;' onChange={free => setForm({ ...form, free})} placeholder="Lojas com frete gratuito"/>
        </div>
      </div>
    </div>
  );
};

export default Form;


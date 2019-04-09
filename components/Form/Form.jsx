import { useState } from 'react';
import Text from '../Text/Text';
import Input from '../Input/Input';
import './Form.scss';

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  return (
    <div className="form">
      <button onClick={_ => onSubmit(text)}>Estimar preço</button>
      <div className="flex row">
        <Input placeholder="Lojas Banidas"/>
        <Input placeholder="Lojas com frete gratuito"/>
      </div>
      <Text
        onChange={setText}
      />
    </div>
  );
};

export default Form;


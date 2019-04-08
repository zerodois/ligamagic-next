import { useState } from 'react';
import Text from '../Text/Text';
import Input from '../Input/Input';

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  return (
    <div>
      <button onClick={_ => onSubmit(text)}>Estimar preço</button>
      <Input placeholder="Lojas Banidas"/><br/>
      <Input placeholder="Lojas com frete gratuito"/>
      <Text
        onChange={setText}
      />
    </div>
  );
};

export default Form;


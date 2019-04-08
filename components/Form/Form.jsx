import { useState } from 'react';
import Text from '../Text/Text';

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  return (
    <div>
      <button onClick={_ => onSubmit(text)}>Estimar preço</button>
      <Text
        onChange={setText}
      />
    </div>
  );
};

export default Form;


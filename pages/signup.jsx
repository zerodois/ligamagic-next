import { useState } from 'react';
import { Animated } from 'react-animated-css';
import '../sass/sign.scss';
import Form from '../components/SignForm/SignForm';
import Header from '../components/Header/Header';
import Feedback from '../components/SignForm/Feedback';

import { createUser } from '../services/auth';

const states = {
  INITIAL: 0,
  SUCCESS: 1,
  LOADING: 2,
  ERROR: 3,
};

const Error = ({ isVisible, error }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isVisible}
    >
      <div className="flash-message flash-message--error text--center">
        <span>{error}</span>
      </div>
    </Animated>
  );
};

const SignUp = () => {
  const [state, setState] = useState(states.INITIAL);
  const [error, setError] = useState('');
  const visibles = [states.INITIAL, states.LOADING, states.ERROR];
  const formVisible = visibles.includes(state);

  const onSubmit = async (data) => {
    try {
      setState(states.LOADING);
      const response = await createUser(data);
      console.log('api response', response);
      setState(states.SUCCESS);
    } catch (error) {
      console.error(error);
      setState(states.ERROR);
      if (error.status === 409) {
        setError('Este usuário já existe!');
        return;
      }
      setError('Erro ao criar usuário.');
    }
  }

  return (
    <div className="container flex flex-center flex-column">
      <Header />
      {formVisible ? (
        <div>
          <Error isVisible={state === states.ERROR} error={error} />
          <Form onSubmit={onSubmit} />
        </div>
      ) : (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={state === states.SUCCESS}
        >
          <Feedback />
        </Animated>
      )}
    </div>
  );
};

export default SignUp;

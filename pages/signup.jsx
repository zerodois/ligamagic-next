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
};

const SignUp = () => {
  const [state, setState] = useState(states.INITIAL);
  const visibles = [states.INITIAL, states.LOADING];
  const formVisible = visibles.includes(state);

  const onSubmit = async (data) => {
    try {
      setState(states.LOADING);
      const response = await createUser(data);
      console.log('api response', data);
      setState(states.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container flex flex-center flex-column">
      <Header />
      {formVisible ? (
        <Form onSubmit={onSubmit} />
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

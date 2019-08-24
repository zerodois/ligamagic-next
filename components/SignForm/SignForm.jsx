import { useState } from 'react';
import Link from 'next/link';

import './SignForm.scss';

const Form = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submitEvent = async () => {
    const data = { email, password: pass };
    setLoading(true);
    await onSubmit(data);
    setLoading(false);
  };

  return (
    <main className="flex flex-center flex-column">
      <div>
        <section className="sign flex flex-column">
          <div className="row">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input"
              type="text"
              placeholder="Email"/>
          </div>
          <div className="row">
            <input
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="input"
              type="password"
              placeholder="Senha"/>
          </div>
          <div className="row flex spacer pointer">
          </div>
          <div className="row">
            <button
              disabled={loading}
              onClick={submitEvent}
              className="button button--primary button--full"
            >
              {loading ? (
                <i className="icon-circle-o-notch spin"></i>
              ) : (
                'Criar conta'
              )}
            </button>
          </div>
          <div className="row text--center text--small spacer">
            Já tem uma conta?
            <Link href="/signin">
              <a className="link pointer text--bold signin text--small">
                Entrar
              </a>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Form;

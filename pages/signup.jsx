import Link from 'next/link';
import '../sass/sign.scss';

const SignUp = () => {
  return (
    <main className="flex flex-center page flex-column">
      <div>
        <header className="header flex">
          <img src="/static/logo.svg" alt="logo Magic Next"/>
          <h1 className="header__title">Magic Next</h1>
        </header>
        <section className="sign flex flex-column">
          <div className="row">
            <input className="input" type="text" placeholder="Email"/>
          </div>
          <div className="row">
            <input className="input" type="text" placeholder="Senha"/>
          </div>
          <div className="row flex spacer pointer">
          </div>
          <div className="row">
            <button className="button button--primary button--full">Criar conta</button>
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

export default SignUp;

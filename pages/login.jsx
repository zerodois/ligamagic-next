import '../sass/login.scss';

const Login = () => {
  return (
    <main className="flex flex-center page flex-column">
      <div>
        <header className="header flex">
          <img src="/static/logo.svg" alt="logo Magic Next"/>
          <h1 className="header__title">Magic Next</h1>
        </header>
        <section className="login flex flex-column">
          <div className="row">
            <input className="input" type="text" placeholder="Email"/>
          </div>
          <div className="row">
            <input className="input" type="text" placeholder="Senha"/>
          </div>
          <div className="row flex spacer pointer">
            <a className="link text--small">Esqueceu sua senha?</a>
          </div>
          <div className="row">
            <button className="button button--primary button--full">Entrar</button>
          </div>
          <div className="row text--center text--small spacer">
            Não possui conta?
            <a className="link pointer text--bold sigup text--small">
              Criar uma conta
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;

import Link from 'next/link';

const Feedback = () => {
  return (
    <div>
      <p className="feedback-text text--center">
        Cadastro realizado com sucesso.
      </p>
      <p className="feedback-text feedback-text--small text--justify">
        Enviamos um email de confirmação para o email cadastrado.
        Para realizar seu login, confirme seu endereço através do link disponível no email.
      </p>
      <div className="row text--center text--small">
        Já confirmou o email?
        <Link href="/signin">
          <a style={{ marginLeft: 5 }} className="link pointer text--bold signin text--small">
            Entrar
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;

import Link from 'next/link';
import { Formik } from 'formik';

import './SignForm.scss';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Campo obrigatório.';
  }
  else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Email inválido';
  }
  if (values.password.length < 6) {
    errors.password = 'Mínimo de 6 caracteres'
  }
  return errors;
};

const Input = ({
  handleBlur,
  handleChange,
  values,
  type,
  placeholder,
  name,
  errors,
  touched,
}) => (
  <div className="row">
    <input
      value={values[name]}
      onBlur={handleBlur}
      onChange={handleChange}
      className={[
        'input',
        touched[name] && errors[name] ? 'input--error' : '',
        touched[name] && !errors[name] ? 'input--success' : '',
      ].join(' ')}
      type={type}
      name={name}
      placeholder={placeholder}
    />
    {touched[name] && errors[name] && (
      <div>
        <span className="input-text-error">{errors[name]}</span>
      </div>
    )}
  </div>
);

const Form = ({ onSubmit }) => {
  const submitEvent = async (values, { setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
  };


  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={submitEvent}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        isSubmitting
      }) => {
        return (
          <form onSubmit={handleSubmit} className="flex flex-center flex-column">
            <section className="sign flex flex-column">
              <Input
                handleBlur={handleBlur}
                handleChange={handleChange}
                placeholder="Email"
                name="email"
                type="email"
                touched={touched}
                errors={errors}
                values={values}
              />
              <Input
                handleBlur={handleBlur}
                handleChange={handleChange}
                placeholder="Senha"
                name="password"
                type="password"
                touched={touched}
                errors={errors}
                values={values}
              />
              <div className="row flex spacer pointer" />
              <div className="row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button button--primary button--full"
                >
                  {isSubmitting ? (
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
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;

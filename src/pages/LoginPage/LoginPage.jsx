import css from './LoginPage.module.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/authOps.js';
import { selectAuthError } from '../../redux/auth/authSelectors.js';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect email addres.')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'Too Short! Minimum 8 symbols.')
    .max(50, 'Too Long! 50 symbols max')
    .required('Password is required.'),
});

const LoginPage = () => {
  const { form, label, title, input, btn, errorText } = css;
  const dispatch = useDispatch();

  const error = useSelector(selectAuthError);

  // for Formik
  const INITIAL_VALUES = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    // const newUser = {
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // };
    // console.log('newUser:', newUser);

    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ errors }) => {
        return (
          <Form className={form}>
            <label className={label}>
              <span className={title}>Email</span>
              <Field
                className={input}
                type="text"
                name="email"
                placeholder="example@mail.com"
                required
              />
              <ErrorMessage
                name="email"
                component="span"
                className={errorText}
              />
            </label>
            <label className={label}>
              <span className={title}>Password</span>
              <Field
                className={input}
                type="password"
                name="password"
                autoComplete="off"
                required
              />
              <ErrorMessage
                name="password"
                component="span"
                className={errorText}
              />
            </label>

            <button
              disabled={Object.keys(errors).length > 0}
              type="submit"
              className={btn}
            >
              Log In
            </button>

            {error && (
              <p className={css.errorText}>
                Check that your email and password is correct.
              </p>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginPage;

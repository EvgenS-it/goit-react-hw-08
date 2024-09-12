import css from './RegistrationPage.module.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations.js';
import { selectAuthError } from '../../redux/auth/selectors.js';

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required.'),
  email: Yup.string()
    .email('Incorrect email addres.')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'Too Short! Minimum 8 symbols.')
    .max(50, 'Too Long! 50 symbols max')
    .required('Password is required.'),
});

const RegistrationPage = () => {
  const { form, label, title, input, btn, errorText } = css;
  const dispatch = useDispatch();

  const error = useSelector(selectAuthError);
  // for Formik
  const INITIAL_VALUES = {
    name: '',
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

    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      {({ errors }) => {
        return (
          <Form className={form}>
            <label className={label}>
              <span className={title}>Name</span>
              <Field className={input} type="text" name="name" required />
              <ErrorMessage
                name="name"
                component="span"
                className={errorText}
              />
            </label>
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
              Register
            </button>

            {error && (
              <p className={errorText}>Oops, something went wrong.. {error}</p>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationPage;

import css from './RegistrationPage.module.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
// import { registerUser } from '../../redux/auth/authOps.js';

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

// for Formik
const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationPage = () => {
  const { form, label, title, input, btn, errorText } = css;

  // const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // const newUser = {
    //   name: values.userName,
    //   number: values.userEmail,
    //   password: values.userPassword,
    // };
    console.log('newUser:', values);

    // dispatch(registerUser(newUser));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      {() => {
        return (
          <Form className={form}>
            <label className={label}>
              <span className={title}>Name</span>
              <Field className={input} type="text" name="userName" required />
              <ErrorMessage
                name="userName"
                component="span"
                className={errorText}
              />
            </label>
            <label className={label}>
              <span className={title}>Email</span>
              <Field
                className={input}
                type="text"
                name="userEmail"
                placeholder="example@mail.com"
                required
              />
              <ErrorMessage
                name="userEmail"
                component="span"
                className={errorText}
              />
            </label>
            <label className={label}>
              <span className={title}>Password</span>
              <Field
                className={input}
                type="password"
                name="userPassword"
                required
              />
              <ErrorMessage
                name="userPassword"
                component="span"
                className={errorText}
              />
            </label>

            <button type="submit" className={btn}>
              Sign Up
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationPage;

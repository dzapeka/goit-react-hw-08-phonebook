import LoginForm from 'components/LoginForm/LoginForm';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/auth.selectors';

const LoginPage = () => {
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (error) {
      Notify.failure(error);
    }
  }, [error]);

  return (
    <>
      <Helmet>
        <title>Login | Phonebook </title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;

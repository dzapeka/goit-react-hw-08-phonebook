import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/auth.selectors';

const RegisterPage = () => {
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (error) {
      Notify.failure(error);
    }
  }, [error]);

  return (
    <>
      <Helmet>
        <title>Registration | Phonebook </title>
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;

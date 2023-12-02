import FormLayoutWrapper from 'components/FormLayoutWrapper';
import RegisterForm from 'components/RegisterForm';
import { FETCH_USER_ERROR } from 'constants/errors';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError } from 'redux/auth/auth.reducer';
import { selectAuthError } from 'redux/auth/auth.selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const registrationError = useSelector(selectAuthError);

  useEffect(() => {
    if (registrationError && registrationError !== FETCH_USER_ERROR) {
      Notify.failure(registrationError);
    }
    // to prevent showing the error message when the user switches between pages
    return () => {
      dispatch(clearAuthError());
    };
  }, [dispatch, registrationError]);

  return (
    <>
      <Helmet>
        <title>Registration | Phonebook </title>
      </Helmet>
      <FormLayoutWrapper>
        <RegisterForm />
      </FormLayoutWrapper>
    </>
  );
};

export default RegisterPage;

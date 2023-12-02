import FormLayoutWrapper from 'components/FormLayoutWrapper';
import LoginForm from 'components/LoginForm';
import { FETCH_USER_ERROR } from 'constants/errors';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError } from 'redux/auth/auth.reducer';
import { selectAuthError } from 'redux/auth/auth.selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(selectAuthError);

  useEffect(() => {
    if (loginError && loginError !== FETCH_USER_ERROR) {
      Notify.failure(loginError);
      // dispatch(clearAuthError());
    }
    // to prevent showing the error message when the user switches between pages
    return () => {
      dispatch(clearAuthError());
    };
  }, [dispatch, loginError]);

  return (
    <>
      <Helmet>
        <title>Login | Phonebook </title>
      </Helmet>
      <FormLayoutWrapper>
        <LoginForm />
      </FormLayoutWrapper>
    </>
  );
};

export default LoginPage;

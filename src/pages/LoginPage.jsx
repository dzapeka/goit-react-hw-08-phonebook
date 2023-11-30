import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
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

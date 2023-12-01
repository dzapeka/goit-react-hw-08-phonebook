import FormLayoutWrapper from 'components/FormLayoutWrapper';
import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
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

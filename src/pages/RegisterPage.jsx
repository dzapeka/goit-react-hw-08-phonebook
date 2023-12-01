import FormLayoutWrapper from 'components/FormLayoutWrapper';
import RegisterForm from 'components/RegisterForm';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
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

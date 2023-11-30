import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
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

import Loader from 'components/Loader/Loader';
import { LOGIN_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthIsLoading,
  selectIsLoggedIn,
} from 'redux/auth/auth.selectors';

const PrivateRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuthLoading = useSelector(selectAuthIsLoading);

  if (isAuthLoading) {
    return <Loader />;
  }

  return isLoggedIn ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;

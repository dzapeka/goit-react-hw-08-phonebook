import { CONTACTS_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth.selectors';

const RestrictedRoute = ({ children, navigateTo = CONTACTS_ROUTE }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={navigateTo} replace /> : children;
};

export default RestrictedRoute;

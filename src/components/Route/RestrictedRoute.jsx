import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors.js';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

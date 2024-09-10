import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const classNames = ({ isActive }) => {
  return `${css.link} ${isActive ? css.active : ''}`;
};

const AuthNav = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/register" className={classNames}>
        Register
      </NavLink>
      <NavLink to="/login" className={classNames}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;

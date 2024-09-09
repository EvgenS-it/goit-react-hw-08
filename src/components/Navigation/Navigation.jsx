import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const classNames = ({ isActive }) => {
  return `${css.link} ${isActive ? css.active : ''}`;
};

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={classNames}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={classNames}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;

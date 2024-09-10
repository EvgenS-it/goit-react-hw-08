import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';

const classNames = ({ isActive }) => {
  return `${css.link} ${isActive ? css.active : ''}`;
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={classNames}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={classNames}>
          Contacts
        </NavLink>
      )}
      {/* <NavLink to="/contacts" className={classNames}>
        Contacts
      </NavLink> */}
    </nav>
  );
};

export default Navigation;

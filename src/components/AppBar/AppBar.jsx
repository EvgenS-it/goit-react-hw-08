import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors.js';
import UserMenu from '../UserMenu/UserMenu.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className={css.container}>
      <div className={css.menu}>
        <Navigation />
      </div>
      <div className={css.menu}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </div>
  );
};

export default AppBar;

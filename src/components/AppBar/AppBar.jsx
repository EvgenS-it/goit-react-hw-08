import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';

const AppBar = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default AppBar;

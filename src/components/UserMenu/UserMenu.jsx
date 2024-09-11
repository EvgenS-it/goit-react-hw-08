import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors.js';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/authOps.js';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <div className={css['username']}>
        Welcome, <strong>{user.name}</strong>
      </div>
      <button type="button" className={css['btn']} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}

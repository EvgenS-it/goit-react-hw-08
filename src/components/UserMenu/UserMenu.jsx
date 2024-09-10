import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors.js';
import css from './UserMenu.module.css';
// import { logOut } from '../../redux/auth/authOps.js';

export default function UserMenu() {
  // const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={css.container}>
      <div className={css['username']}>
        Welcome, <strong>{user.name}</strong>
      </div>
      <button
        type="button"
        className={css['btn']}
        // onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}

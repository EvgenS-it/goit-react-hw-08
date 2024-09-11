import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './AppBar/AppBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/authOps.js';
import { selectAuthIsRefreshing } from '../redux/auth/authSelectors.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage.jsx')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('../pages/ContactsPage/ContactsPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p>User is refreshing, please wait..</p>;

  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;

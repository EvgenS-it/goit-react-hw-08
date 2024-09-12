import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations.js';
import { selectAuthIsRefreshing } from '../redux/auth/selectors.js';
import { PrivateRoute } from './Route/PrivateRoute.jsx';
import { RestrictedRoute } from './Route/RestrictedRoute.jsx';
import Layout from './Layout/Layout.jsx';

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
      <Layout>
        <Suspense fallback={<p>LOADING...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;

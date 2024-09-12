import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

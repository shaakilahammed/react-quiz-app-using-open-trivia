import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;

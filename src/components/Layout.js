import classes from './Layout.module.css';
import NavBar from './NavBar';
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;

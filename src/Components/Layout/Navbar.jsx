import classes from './Navbar.module.css';
import Navigation from './Navigation';

const Navbar = () => {
  return (
    <header className={classes['main-header']}>
      <h1>Westcoast Education</h1>
      <Navigation />
    </header>
  );
};

export default Navbar;
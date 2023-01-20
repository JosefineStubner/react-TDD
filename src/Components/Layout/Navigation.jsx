import { useContext } from 'react';
import AuthContext from '../Store/auth_context';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href='/'>Startsida</a>
        </li>
        <li>
          <a href='/teachers'>Lärare</a>
        </li>
        <li>
          <a href='/registerteacher'>Registrera Lärare</a>
        </li>
        <li>
          <a href='/courses'>Kurser</a>
        </li>
        {!context.isLoggedIn && (
          <li>
            <Link to='/login'>Logga In</Link>
          </li>
        )}
        <li>{context.isLoggedIn && <span>{context.userName}</span>}</li>
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logga ut</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
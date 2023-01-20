import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userloggedIn = localStorage.getItem('isLoggedIn');

    if (userloggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  };

  const onLoginHandler = (user) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 1);
    localStorage.setItem('userName', user.userName);
    navigate('/courses');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: onLogoutHandler,
        onLogin: onLoginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
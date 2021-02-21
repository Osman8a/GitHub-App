import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Home from '../Home';

const Auth = () => {
  const { loggedIn, signIn } = useContext(AuthContext);

  return loggedIn ? <Home /> : <button onClick={() => signIn()}>Login</button>;
};

export default Auth;

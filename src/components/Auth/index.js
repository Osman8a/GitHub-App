import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Main from '../Home';

const Auth = () => {
  const { loggedIn, signIn } = useContext(AuthContext);

  return loggedIn ? <Main /> : <button onClick={() => signIn()}>Login</button>;
};

export default Auth;

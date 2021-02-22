import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import Home from '../Home';

const Auth = () => {
  const { loggedIn, signIn } = useContext(AuthContext);

  return loggedIn ? <Home /> : <Button onClick={() => null}>Show Toast</Button>;
};

export default Auth;

import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import logo from '../../logo.png';
import './style.css';
import Home from '../Home';

const Auth = () => {
  const { loggedIn, signIn } = useContext(AuthContext);

  return ( 
      loggedIn 
      ? <Home /> 
      
      :  
      (<main  className="container">
      <section className="wrapper">
        <section className="wrapper-logo">
            <img src={logo} alt="logo principal"/>
        </section>
        <section className="signin">
              <fieldset>
              <h1>GitHub</h1>
              <button type="submit" onClick={() => signIn()}>Sign in</button>
              </fieldset>
        </section>
      </section>
      </main>)


  );
  
};

export default Auth;

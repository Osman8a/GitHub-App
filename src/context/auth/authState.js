import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { SIGNIN_SUCCESS } from '../../types';
import firebase from 'firebase/app';
import 'firebase/auth';

const AuthState = (props) => {
  const initialState = {
    loggedIn: false,
    user: {},
  };

  const signIn = async () => {
    try {
      const provider = new firebase.auth.GithubAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      if (result.user.email) {
        dispath({
          type: SIGNIN_SUCCESS,
          payload: {
            name: result.user.displayName,
            email: result.user.emails,
          },
        });
      }
    } catch (error) {
      console.error(error.code);
    }
  };

  const [state, dispath] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        loggedIn: state.loggedIn,
        signIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

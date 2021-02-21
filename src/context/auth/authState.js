import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { SIGNIN_SUCCESS, SIGNUP } from '../../types';
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
            accessToken: result.credential.accessToken,
          },
        });
      }
    } catch (error) {
      console.error(error.code);
    }
  };

  const signUp = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispath({
          type: SIGNUP,
          payload: {},
        });
      });
  };

  const [state, dispath] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        loggedIn: state.loggedIn,
        signIn,
        signUp,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

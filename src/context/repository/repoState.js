import React, { useReducer } from 'react';
import { github } from '../../api/github';
import HeaderContext from './repoContext';
import HeaderReducer from './repoReducer';
import { INPUT_TEXT } from '../../types';

const RepoState = (props) => {
  const initialState = {
    text: 'pepe',
  };

  const [state, dispath] = useReducer(HeaderReducer, initialState);

  const onSendText = async (search, user) => {
    try {
      const { accessToken = 0 } = user;
      const result = await github(accessToken).get(`/users/${search}`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeaderContext.Provider
      value={{
        textt: state.text,
        onSendText,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};

export default RepoState;

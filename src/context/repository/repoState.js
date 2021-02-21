import React, { useReducer } from 'react';
import { github } from '../../api/github';
import HeaderContext from './repoContext';
import HeaderReducer from './repoReducer';
import { GET_REPO } from '../../types';

const RepoState = (props) => {
  const initialState = {
    dataRepo: [],
  };

  const [state, dispath] = useReducer(HeaderReducer, initialState);

  const onSearchRepo = async (search, user) => {
    try {
      const { accessToken = 0 } = user;
      const result = await github(accessToken).get(`/orgs/${search}/repos`);
      if (result.status === 200) {
        dispath({
          type: GET_REPO,
          payload: {
            dataRepo: result.data,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeaderContext.Provider
      value={{
        dataUser: state.dataUser,
        dataRepo: state.dataRepo,
        onSearchRepo,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};

export default RepoState;

import React, { useReducer } from 'react';
import { github } from '../../api/github';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { GET_USER } from '../../types';

const UserState = (props) => {
  const initialState = {
    dataUser: [],
  };

  const [state, dispath] = useReducer(UserReducer, initialState);

  const onSearchUser = async (search, user) => {
    try {
      const { accessToken = 0 } = user;
      const result = await github(accessToken).get(`/orgs/${search}/repos`);
      if (result.status === 200) {
        dispath({
          type: GET_USER,
          payload: {
            dataUser: result.data,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        dataUser: state.dataUser,
        onSearchUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

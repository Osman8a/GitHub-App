import { SIGNIN_SUCCESS } from '../../types';

const add = (state, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    }
    default:
      return state;
  }
};

export default add;

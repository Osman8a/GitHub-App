import { SIGNIN_SUCCESS, SIGNUP } from '../../types';

const add = (state, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    }
    case SIGNUP: {
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default add;

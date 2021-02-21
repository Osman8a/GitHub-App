import { SIGNIN_SUCCESS, SIGNUP } from '../../types';

const authReducer = (state, action) => {
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

export default authReducer;

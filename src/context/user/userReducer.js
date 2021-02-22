import { GET_USER } from '../../types';

const RepoReducer = (state, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        dataUser: action.payload,
      };
    }
    default:
      return state;
  }
};

export default RepoReducer;

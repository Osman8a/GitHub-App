import { GET_REPO, GET_USER } from '../../types';

const RepoReducer = (state, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        dataUser: action.payload,
      };
    }
    case GET_REPO: {
      return {
        ...state,
        dataRepo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default RepoReducer;

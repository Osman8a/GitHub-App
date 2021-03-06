import { GET_REPO } from '../../types';

const RepoReducer = (state, action) => {
  switch (action.type) {
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

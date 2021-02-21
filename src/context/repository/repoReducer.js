import { INPUT_TEXT } from '../../types';

const RepoReducer = (state, action) => {
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        text: action.payload,
      };
    }
    default:
      return state;
  }
};

export default RepoReducer;

// candidates Reducer

const candidatesReducerDefaultState = [];

export default (state = candidatesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CANDIDATE':
      return [
        ...state,
        action.candidate
      ];
    case 'REMOVE_CANDIDATE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_CANDIDATE':
      return state.map((candidate) => {
        if (candidate.id === action.id) {
          return {
            ...candidate,
            ...action.updates
          };
        } else {
          return candidate;
        };
      });
    default:
      return state;
  }
};

const candidatesReducerDefaultState = [];

function SaveDataToLocalStorage(newData) {
  var data = localStorage.getItem("candidates");
  data = data ? JSON.parse(data) : [];
  data.push(newData);
  localStorage.setItem("candidates", JSON.stringify(data));
}
function RemoveFromLocalStorage(idToRemove) {
  var data = localStorage.getItem("candidates");
  data = data ? JSON.parse(data) : [];
  const remainingLS = data.filter(({ id }) => id !== idToRemove);
  localStorage.setItem("candidates", JSON.stringify(remainingLS));
}
function EditCandidate(data, aId, updates) {
  return data.map((candidate) => {
    if (candidate.id === aId) {
      return {
        ...candidate,
        ...updates,
      };
    } else {
      return candidate;
    }
  });
}

export default (state = candidatesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_CANDIDATE":
      SaveDataToLocalStorage(action.candidate); //LocalStorage serves as the 'backend' for this demo application
      return [...state, action.candidate]; // save to state for demo purposes (LocalStorage is used for data management for the poc)

    case "REMOVE_CANDIDATE":
      const newState = state.filter(({ id }) => id !== action.id);
      RemoveFromLocalStorage(action.id);
      return newState; //data is saved in localstorage and rendered to listcomponent from LS

    case "EDIT_CANDIDATE":
      var data = localStorage.getItem("candidates");
      data = data ? JSON.parse(data) : [];
      const editedData = EditCandidate(data, action.id, action.updates);
      localStorage.setItem("candidates", JSON.stringify(editedData));
      return editedData;
    default:
      return state;
  }
};

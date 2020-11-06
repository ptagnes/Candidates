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
function UpdateLocalStorage(newData) {
  console.log("updating local storage");
  console.log(newData);
  // console.log(data);
}

export default (state = candidatesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_CANDIDATE":
      SaveDataToLocalStorage(action.candidate); //serves as the 'backend' for this demo application
      return [...state, action.candidate]; // save to state for demo purposes

    case "REMOVE_CANDIDATE":
      const newState = state.filter(({ id }) => id !== action.id);
      RemoveFromLocalStorage(action.id);
      return newState; //data is saved in localstorage and rendered to listcomponent from LS

    case "EDIT_CANDIDATE":
      console.log("EDIT_CANDIDATE from reducer");
      console.log(action.updates);
      
      return state.map((candidate) => {
        if (candidate.id === action.id) {
          UpdateLocalStorage(action.updates);
          
          return {
            ...candidate,
            ...action.updates,
          };
        } else {
          return candidate;
        }
      });
    default:
      return state;
  }
};

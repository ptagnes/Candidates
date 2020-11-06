import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { addCandidate } from './actions/candidates';
import { setTextFilter } from './actions/filters';
import getVisibleCandidates from './selectors/candidates';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addCandidate({
//   description: 'Jonas Brymer',
//   note: 'Lite mer text om Jonas',
//   createdAt: 108202020,
//   age: '33',
//   email: 'jonas@gmail.se',
//   address: 'Torsgatan 22 Stockholm',
//   status: '1: Introduktion'
// }));
// store.dispatch(addCandidate({ 
//   description: 'Maria Lindström',
//   note: 'Lite mer text om Maria',
//   createdAt: 1000,
//   age: '28',
//   email: 'maria_L@gmail.se',
//   address: 'Dalagatan 12 Stockholm',
//   status: '2: Kodprov'
//  }));
// store.dispatch(addCandidate({ 
//   description: 'Sylvia Pettersson',
//   note: 'Lite mer text om Sylvia',
//   createdAt: 19500,
//   age: '39',
//   email: 'SP@gmail.se',
//   address: 'Sveavägen 122 Stockholm',
//   status: '2: Kodprov'
//  }));
    
const state = store.getState();
const visibleCandidates = getVisibleCandidates(state.candidates, state.filters);
console.log('Candidates from state:');
console.log(visibleCandidates);

function App() {
  return (
    <Provider store={store}>
    <AppRouter />
  </Provider>
  );
}

export default App;



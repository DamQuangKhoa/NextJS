import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  coms: []
};

export const actionTypes = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  GET_COMS: "GET_COMS"
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      });
    case actionTypes.GET_COMS:
      return Object.assign({}, state, {
        coms: action.data
      });
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};
export const getCompetitions = isServer => dispatch => {
  const data = [];
  data = [
    {
       key: 1,
      name: ``,
      age: 32,
      address: `London Park no. ${i}`,
      email: `London Park no. ${i}`},

  ]
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i.toString(),
      name: `Champion league  ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
      email: `London Park no. ${i}`
    });
  }
  return dispatch({
    type: actionTypes.GET_COMS,
    data: data
  });
};
export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
  }, 1000);
};

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT });
};

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT });
};

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET });
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

//action
function incrementCounter() {
  return { type: "INCREMENT_COUNTER" };
}

//action
function decrementCounter() {
  return { type: "DECREMENT_COUNTER" };
}

//action
function incrementCounterByAmount(amount) {
  return { type: "INCREMENT_COUNTER_BY_AMOUNT", payload: amount };
}

//action
function incrementNumber() {
  return { type: "INCREMENT_NUMBER" };
}

//initialState
const initialCounterState = {
  counter: 0,
};

//initialState
const initialNumberState = {
  number: 5,
};

//reducer
const numberReducer = (state = initialNumberState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER":
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
};

//reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "INCREMENT_COUNTER_BY_AMOUNT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

const rootStore = combineReducers({
  counter: counterReducer,
  number: numberReducer,
});

//store
const store = createStore(rootStore, applyMiddleware(logger));
console.log(store.getState());
store.dispatch(incrementCounter());
store.dispatch(incrementCounterByAmount(10));
store.dispatch(decrementCounter());
store.dispatch(incrementNumber());

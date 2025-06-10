//action
function incrementCounter() {
  return { type: "INCREMENT_COUNTER" };
}

const initialState = {
  counter: 0,
  number: 5,
};

//reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

//store
const store = Redux.createStore(counterReducer);
console.log(store.getState());
// {counter: 0, number: 5}
store.dispatch(incrementCounter());
console.log(store.getState());
// {counter: 1, number: 5}

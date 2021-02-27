import React, { useReducer } from 'react';

const initialCount: counterState = { count: 0 };

const increaseAction = { type: 'increment' };
const decreaseAction = { type: 'decrement' };

type counterAction = typeof increaseAction | typeof decreaseAction;
interface counterState {
  count: number;
};

const counterReducer = (state: counterState, action: counterAction) => {
  const prevState = { ...state }
  switch (action.type) {
    case 'increment':
      return {
        ...state, count: state.count + 1
      }
    case 'decrement':
      return {
        ...state, count: state.count - 1
      }
    default: return state
  };
}

const counterContext = React.createContext<null | [state: counterState, dispatch: React.Dispatch<counterAction>]>(null);


const App: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCount)

  return (
    <div>
      <counterContext.Provider value={[state, dispatch]}>
        <p>The count is {state.count}</p>
        <button onClick={() => dispatch(increaseAction)}> + </button>
        <button onClick={() => dispatch(decreaseAction)}> - </button>
      </counterContext.Provider>
    </div>
  );
};

export default App;

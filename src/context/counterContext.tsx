import React from 'react'
import { useImmerReducer } from 'use-immer';

//Create counter reducer action interface and actions to be dispatched
export interface counterAction {
    type: 'increment' | 'decrement' | 'decrement 5' | 'increment 5'
};

export const increaseAction: counterAction = { type: 'increment' };
export const decreaseAction: counterAction = { type: 'decrement' };
export const decreaseFiveAction: counterAction = { type: 'decrement 5' }
export const increaseFiveAction: counterAction = { type: 'increment 5' };

//Create counter reducer state interface and initial counter state
export interface counterState {
    count: number;
};

export const initialCount: counterState = { count: 0 };


//Create counter reducer which will take in the previous state and dispatched action
const counterReducer = (draft: counterState, action: counterAction) => {
    switch (action.type) {
        case 'increment': {
            draft.count += 1
            return;
        }
        case 'decrement': {
            draft.count -= 1
            return;
        }
        case 'increment 5': {
            draft.count += 5
            return;
        }
        case 'decrement 5': {
            draft.count -= 5
            return;
        }
        default:
            return;
    };
}

//Create seperate contexts to be be provided the counter state and dispatch function from usereducer
export const counterStateContext = React.createContext<Partial<counterState>>({});
export const counterDispatchContext = React.createContext<React.Dispatch<counterAction>>(() => null);

//Create props type for accepting children in the context provider component
type Props = {
    title?: string;
    children?: React.ReactNode;
};

// Create the CounterProvider component which will make the state and dispatch functions from context
// available throughout the child components via usecontext
const CounterProvider = (props: Props) => {
    //Get the state and dispatch function for the counter reducer initialized with the intitial count
    const [state, dispatch] = useImmerReducer(counterReducer, initialCount)

    return (
        <counterDispatchContext.Provider value={dispatch}>
            <counterStateContext.Provider value={state}>
                {props.children}
            </counterStateContext.Provider>
        </counterDispatchContext.Provider>
    )
}

//Export the counter provider component to wrap the children you wish to have access to state and dispatch
export default CounterProvider

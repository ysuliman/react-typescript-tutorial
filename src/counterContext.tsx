import React, { useReducer } from 'react'


export const increaseAction: counterAction = { type: 'increment' };
export const decreaseAction: counterAction = { type: 'decrement' };

export interface counterAction {
    type: 'increment' | 'decrement'
};

export interface counterState {
    count: number;
};

export const initialCount: counterState = { count: 0 };


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

export const counterContext = React.createContext
    <[state: Partial<counterState>, dispatch: React.Dispatch<counterAction>]>
    ([{}, () => null]);

type Props = {
    title?: string;
    children?: React.ReactNode;
};

const CounterProvider = (props: Props) => {
    const [state, dispatch] = useReducer(counterReducer, initialCount)

    return (
        <counterContext.Provider value={[state, dispatch]}>
            {props.children}
        </counterContext.Provider>
    )
}

export default CounterProvider

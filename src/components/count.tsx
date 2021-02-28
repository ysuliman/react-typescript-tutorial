import React, { useContext } from 'react'
import { decreaseAction, decreaseFiveAction, increaseAction, increaseFiveAction } from '../context/counterContext'
import { counterStateContext, counterDispatchContext } from '../context/counterContext'

const Count = () => {
    const state = useContext(counterStateContext)
    const dispatch = useContext(counterDispatchContext)

    return (
        <div>
            <p>The count is {state.count}</p>
            <button onClick={() => dispatch(increaseFiveAction)}> + 5</button>
            <button onClick={() => dispatch(increaseAction)}> + 1</button>
            <button onClick={() => dispatch(decreaseAction)}> - 1</button>
            <button onClick={() => dispatch(decreaseFiveAction)}> - 5</button>
        </div>
    )
}

export default Count

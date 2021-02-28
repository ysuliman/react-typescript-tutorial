import React, { useContext } from 'react'
import { decreaseAction, increaseAction } from './counterContext'
import { counterStateContext, counterDispatchContext } from './counterContext'

const Count = () => {
    const state = useContext(counterStateContext)
    const dispatch = useContext(counterDispatchContext)

    return (
        <div>
            <p>The count is {state.count}</p>
            <button onClick={() => dispatch(increaseAction)}> + </button>
            <button onClick={() => dispatch(decreaseAction)}> - </button>
        </div>
    )
}

export default Count

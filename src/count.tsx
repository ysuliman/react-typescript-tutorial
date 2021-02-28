import React, { useContext } from 'react'
import { decreaseAction, increaseAction } from './counterContext'
import { counterContext } from './counterContext'

const Count = () => {
    const [state, dispatch] = useContext(counterContext)
    return (
        <div>
            <p>The count is {state.count}</p>
            <button onClick={() => dispatch(increaseAction)}> + </button>
            <button onClick={() => dispatch(decreaseAction)}> - </button>
        </div>
    )
}

export default Count

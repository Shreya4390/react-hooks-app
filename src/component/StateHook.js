import React, { useState } from 'react'
import "../App.css";

const StateHooks = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="st-container">
            StateHook
            <span className="counter-text">{counter}</span>
            <button className='comp_btn'
                onClick={increment}
            >
                Increment
            </button>
        </div >
    )
}
export default StateHooks;
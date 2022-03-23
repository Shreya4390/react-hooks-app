import React, { useState } from 'react'
import "../App.css";
export default function StateHook() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
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

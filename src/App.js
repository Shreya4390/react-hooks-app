/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';
import StateHook from './component/StateHook';
import EffectHook from './component/EffectHook';
import CustomHook from './component/customHook/CutomHook';
import './App.css';

function App() {
  const [flag, setFlage] = useState(0);

  return (
    <div className="App">
      <div className="App-container">
        <span>Learning Hooks</span>
        <span role="img" aria-label="ice cream"> 🍦</span>
      </div>

      <button className='button-d tc'
        onClick={() => {
          setFlage(1);
        }}
      >
        StateHook
      </button>
      <button className='button-d tc'
        onClick={() => {
          setFlage(2);
        }}
      >
        EffectHook
      </button>
      <button className='button-d tc'
        onClick={() => {
          setFlage(3);
        }}
      >
        CustomHook
      </button>

      {flag === 1 && <StateHook /> || flag === 2 && <EffectHook /> || flag === 3 && <CustomHook />}
    </div>
  );
}

export default App;
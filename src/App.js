import React, { useState } from 'react';
import StateHook from './Component/StateHook';
import EffectHook from './Component/ EffectHook ';
import './App.css';

function App() {
  const [flag, setFlage] = useState(false);

  return (
    <div className="App">
      <div className="App-container">
        <span>Learning Hooks</span>
        <span role="img" aria-label="ice cream"> 🍦</span>
      </div>

      <button className='button-d'
        onClick={() => {
          setFlage(true);
        }}
      >
        StateHook
      </button>
      <button className='button-d'
        onClick={() => {
          setFlage(false);
        }}
      >
        EffectHook
      </button>
      {flag ? <StateHook /> : <EffectHook />}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <h2>Counter App</h2>
      <div className="counter">
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
        <span>{count}</span>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;

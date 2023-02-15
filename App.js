import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let counterColor = '';
  if (count >= 0 && count <= 4) {
    counterColor = 'green';
  } else if (count >= 5 && count <= 9) {
    counterColor = 'blue';
  } else {
    counterColor = 'red';
  }

  return (
    <div className="App">
      <h1 style={{ color: counterColor }}>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default App;

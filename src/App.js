import { useState } from 'react';
import './App.css';

function App() {
  // Counter State
  const [count, setCount] = useState(0);
  
  // Random Number State - null means no number generated yet
  const [randomNumber, setRandomNumber] = useState(null);

  // Counter Functions
  const increment = () => setCount(count + 1);
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  // Random Number Function
  const generateRandom = () => {
    const num = Math.floor(Math.random() * 100) + 1; // 1 to 100
    setRandomNumber(num);
  };

  return (
    <div className="dashboard">
      <h1>React Utility Dashboard</h1>

      <div className="container">
        {/* Counter Section */}
        <div className="card">
          <h2>Counter</h2>
          <h3 className="value">{count}</h3>
          
          {/* Conditional Rendering for Minimum Limit */}
          {count === 0 && <p className="warning">Minimum limit reached</p>}

          <div className="btn-group">
            <button onClick={increment} className="btn inc">Increment</button>
            <button onClick={decrement} className="btn dec" disabled={count === 0}>Decrement</button>
            <button onClick={reset} className="btn reset">Reset</button>
          </div>
        </div>

        {/* Random Number Generator Section */}
        <div className="card">
          <h2>Random Number Generator</h2>
          
          {/* Conditional Rendering */}
          {randomNumber === null ? (
            <p className="placeholder">No number generated yet</p>
          ) : (
            <h3 className="value random">{randomNumber}</h3>
          )}

          <button onClick={generateRandom} className="btn generate">
            Generate Random Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function CounterApp() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count-1)}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//     </div>
//   );
// }
// export default CounterApp; 


import React, { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-container">
        <div className="counter-card">
          <h2 className="counter-display">Count: <span className="count-number">{count}</span></h2>
          <div className="button-group">
            <button className="btn btn-decrement" onClick={() => setCount(count - 1)}>
              <span>-</span> Decrement
            </button>
            <button className="btn btn-reset" onClick={() => setCount(0)}>
              Reset
            </button>
            <button className="btn btn-increment" onClick={() => setCount(count + 1)}>
              Increment <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterApp;


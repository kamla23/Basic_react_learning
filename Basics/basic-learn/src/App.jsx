import { useState } from "react";

function App() {
  console.log("this is my first rendring");
  const [count, setCount] = useState(0);

  function increment (){
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Hello , I am kittu</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increasing</button>
      <button onClick={decrement}>dcreasing</button>
    </>
  );
}

export default App;

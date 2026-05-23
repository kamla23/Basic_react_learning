import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  let btnRef = useRef();

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("value of val:", val.current);
    setCount(count + 1);
  }

  //it runs on every render//
  useEffect(() => {
    console.log("main fir se render ho gayi hun");
  });

  function changeColor() {
    btnRef.current.style.background = "red";
  }

  return (
    <div>
      <button ref={btnRef} onClick={handleIncrement}>
        {" "}
        Increment
      </button>
      <br />
      <br />
      <button onClick={changeColor}>Color Change of 1 st one</button>
      <div>Count:{count}</div>
    </div>
  );
}
export default App;
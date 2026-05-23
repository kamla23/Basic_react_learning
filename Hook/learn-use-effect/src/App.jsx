import "./App.css";
// import {useEffect, useState} from "react";
import LoggerComponent from "./components/LoggerComponent";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponent from "./components/ResizeComponent";
import MultiEffectComponent from "./components/MultiEffectComponent";
function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  //first -> side Effect function
  //second -> clean - up function
  //third -> comma seprated dep list

  //variation:1
  //runs on every render
  // useEffect(()=>{
  //   alert("I will run on each render");
  // })

  //variation:2
  //that runs on only first render
  // useEffect(() => {
  //   alert("I will run only first render");
  // }, []);

  //variation :3
  //  useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count])

  //variation :4
  //multiple dependencies
  //   useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, total]);

  //variation:5
  // is bar lets add clean up function
  // useEffect(() => {
  //   alert("count is updated");
  //   return() => {
  //   alert("count is unmounted from IU");
  //   }
  // }, [count]);

  // function handelClick(){
  //   setCount(count+1);
  // }

  // function handelClicktotal(){
  //   setTotal(total+1);
  // }

  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
       {/* <DataFetcher/> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent/> */}

      {/* <button onClick={handelClick}>
        update count
      </button>
      <br />
      Count is :{count}
      <br />
      <button onClick={handelClicktotal}>
        click me
      </button>
      <br />
      total is :{total} */}
    </div>
  );
}

export default App;

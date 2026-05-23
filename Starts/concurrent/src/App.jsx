import {useState,   startTransition  } from "react";

function App(){
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  

  const handleChange = (e)=>{
    const value = e.target.value;
      console.log("Input value:", value);

    setInput(value);

  startTransition(() => {
    const items = [];
    for(let i  = 0; i < 10000; i++){
      items.push(value)
    }

      console.log("Items created:", items.length);

    setList(items);
  });
  };

  return(
    <div style={{display:"flex", gap:"20px"}}>
      <div>
        <h2>Input</h2>
        <input value={input} onChange={handleChange}/>
      </div>

      <div>
        <h2>List</h2>
        {list.map((item,i) => {
          <p key={i}>{item}</p>
        })}
      </div>

    </div>
  );
}

export default App;
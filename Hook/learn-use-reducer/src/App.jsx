import React, { useReducer, useState } from "react";

// ✅ Initial State
const initialState = {
  count: 8,
  user: {
    userName: "",
    city: ""
  }
};

// ✅ Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + action.payload };

    case "SUBTRACT":
      return { ...state, count: state.count - action.payload };

    case "RESET":
      return { ...state, count: 0 };

    case "SET_USER":
      console.log("Final Data:", action.payload); // 👈 console output
      return {
        ...state,
        user: {
          userName: action.payload.userName,
          city: action.payload.city
        }
      };

    default:
      return state;
  }
}

// ✅ Main Component
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(5);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter: {state.count}</h1>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <button onClick={() => dispatch({ type: "ADD", payload: input })}>
        Add
      </button>

      <button onClick={() => dispatch({ type: "SUBTRACT", payload: input })}>
        Subtract
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      <hr />

      <button
        onClick={() =>
          dispatch({
            type: "SET_USER",
            payload: { userName: "Aditya", city: "Delhi" }
          })
        }
      >
        Set User
      </button>

      <h3>User: {state.user.userName}</h3>
      <h3>City: {state.user.city}</h3>
    </div>
  );
}

export default App;
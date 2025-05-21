import { useReducer, useState } from "react";

import "./App.css";

const reducerfunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
      case "initcount": return {
        ...state,
        count: action.payload,
      }
    default:
      return state;
  }
};

const initialstate = {
  count: 0,
};
function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerfunction, initialstate);

  return (
    <div className="App">
      <h1>Reducer Example</h1>
      <div>
        <label>Start Count:</label>
        <input
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
        />
        <br />
        <button onClick={() => dispatch({type: "initcount", payload: input})}>Initialization Counter</button>
      </div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    </div>
  );
}

export default App;

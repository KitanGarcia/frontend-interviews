import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [boardState, setBoardState] = useState(new Array(9).fill("X"));
  return (
    <div className="App">
      <Board boardState={boardState} />
    </div>
  );
}

export default App;

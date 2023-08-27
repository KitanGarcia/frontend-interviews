import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [boardState, setBoardState] = useState(new Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  return (
    <div className="App">
      <Board
        boardState={boardState}
        setBoardState={setBoardState}
        isXTurn={isXTurn}
        setIsXTurn={setIsXTurn}
      />
    </div>
  );
}

export default App;

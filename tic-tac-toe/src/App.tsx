import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [boardState, setBoardState] = useState(new Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState("");

  const checkWinner = (board: string[]) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningCombos) {
      if (board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === "X") {
          setWinner("X");
        } else if (board[a] === "O") {
          setWinner("O");
        }
      }
    }
  };

  return (
    <div className="App">
      {winner && <h1>{winner} wins!</h1>}
      <Board
        boardState={boardState}
        setBoardState={setBoardState}
        isXTurn={isXTurn}
        setIsXTurn={setIsXTurn}
        winner={winner}
        checkWinner={checkWinner}
      />
    </div>
  );
}

export default App;

import { Dispatch, SetStateAction } from "react";
import "../App.css";
import Cell from "./Cell";

interface BoardProps {
  boardState: string[];
  setBoardState: Dispatch<SetStateAction<Array<string>>>;
  isXTurn: boolean;
  setIsXTurn: Dispatch<SetStateAction<boolean>>;
  winner: string;
  checkWinner: (board: string[]) => void;
}

function Board({
  boardState,
  setBoardState,
  isXTurn,
  setIsXTurn,
  winner,
  checkWinner,
}: BoardProps) {
  const handleMove = (index: number) => {
    if (boardState[index] || winner) {
      return;
    }

    // Replace array with new value
    const value = isXTurn ? "X" : "O";
    const boardCopy = [...boardState];
    boardCopy[index] = value;

    checkWinner(boardCopy);

    // Set state
    setBoardState(boardCopy);

    // Switch turns
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="Board">
      {boardState &&
        boardState.map((_, index) =>
          index % 3 === 2 ? (
            <div key={`row${index}`} className="row">
              <Cell
                value={boardState[index - 2]}
                key={index - 2}
                index={index - 2}
                handleMove={handleMove}
              />
              <Cell
                value={boardState[index - 1]}
                key={index - 1}
                index={index - 1}
                handleMove={handleMove}
              />
              <Cell
                value={boardState[index]}
                key={index}
                index={index}
                handleMove={handleMove}
              />
            </div>
          ) : null
        )}
    </div>
  );
}

export default Board;

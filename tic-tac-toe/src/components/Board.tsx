import "../App.css";
import Cell from "./Cell";

interface BoardProps {
  boardState: string[];
}

function Board({ boardState }: BoardProps) {
  return (
    <div className="Board">
      {boardState &&
        boardState.map((value, index) => {
          if (index % 3 === 2) {
            return (
              <div className="row">
                <Cell value={boardState[index - 2]} />
                <Cell value={boardState[index - 1]} />
                <Cell value={boardState[index]} />
              </div>
            );
          }
        })}
    </div>
  );
}

export default Board;

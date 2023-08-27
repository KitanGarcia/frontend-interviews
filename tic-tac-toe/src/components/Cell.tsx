import "../App.css";

interface CellProps {
  value: string;
  index: number;
  handleMove: (index: number) => void;
}

function Cell({ value, index, handleMove }: CellProps) {
  return (
    <div className="Cell" onClick={() => handleMove(index)}>
      {value}
    </div>
  );
}

export default Cell;

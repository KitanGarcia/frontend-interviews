import "../App.css";

interface CellProps {
  value: string;
}

function Cell({ value }: CellProps) {
  return <div className="Cell">{value}</div>;
}

export default Cell;

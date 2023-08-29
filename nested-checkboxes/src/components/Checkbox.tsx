import "../App.css";
import { Node } from "../types/Node";

interface CheckboxProps {
  data: Node;
}

function Checkbox({ data }: CheckboxProps) {
  return (
    <>
      <li>
        <input type="checkbox" checked={data.checked} />
        <label>{data.label}</label>
      </li>
      {data.childrenNodes && (
        <ul>
          {data.childrenNodes.map((node) => (
            <Checkbox data={node} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Checkbox;

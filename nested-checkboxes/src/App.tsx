import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import { Node } from "./types/Node";

function App() {
  const [checkboxes, setCheckboxes] = useState<Node[]>([
    {
      label: "foo",
      checked: true,
      childrenNodes: [],
    },
    {
      label: "bar",
      checked: false,
      childrenNodes: [],
    },
    {
      label: "foobar",
      checked: false,
      childrenNodes: [
        {
          label: "hello",
          checked: true,
          childrenNodes: [],
          parent: "<point to foobar>",
        },
        {
          label: "hi",
          checked: true,
          childrenNodes: [],
          parent: "<point to foobar>",
        },
        {
          label: "greetings",
          checked: false,
          childrenNodes: [
            {
              label: "good day",
              checked: true,
              childrenNodes: [],
              parent: "<point to greetings>",
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <ul>
        {checkboxes.map((node) => (
          <Checkbox data={node} />
        ))}
      </ul>
    </div>
  );
}

export default App;

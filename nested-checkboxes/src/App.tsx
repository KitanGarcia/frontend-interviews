import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import { Node } from "./types/Node";

/*
 * if parent gets checked, all children should be checked
 *
 * if all children are checked, parent should be checked
 */
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
          parent: "foobar",
          childrenNodes: [],
        },
        {
          label: "hi",
          checked: true,
          parent: "foobar",
          childrenNodes: [],
        },
        {
          label: "greetings",
          checked: false,
          parent: "foobar",
          childrenNodes: [
            {
              label: "good day",
              checked: true,
              childrenNodes: [],
              parent: "greetings",
            },
          ],
        },
      ],
    },
  ]);

  const findParent = (
    checkboxesAtLevel: Node[],
    parentName: string
  ): Node | undefined => {
    for (let node of checkboxesAtLevel) {
      // Node found
      console.log(node.label);
      if (node.label === parentName) {
        return node;
      }

      // Search children recursively
      const foundInChild = findParent(node.childrenNodes, parentName);
      if (foundInChild) {
        return foundInChild; // Return the result of the recursive call
      }
    }

    // Node not found
    return undefined;
  };

  console.log(findParent(checkboxes, "greetings"));

  const handleChange = () => {
    // If checked
    //   check all children
    //   find parent.
    //   verify if parent's children are checked
    //     if so, check parent
    //       repeat recursively
    // If unchecked
    //   find parent
    //     uncheck parent
    //     repeat recursively
  };

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

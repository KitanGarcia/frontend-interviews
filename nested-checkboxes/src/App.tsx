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

  // Returns a node given its checkbox label/name
  const findNode = (
    checkboxesAtLevel: Node[],
    nodeName: string | undefined
  ): Node | undefined => {
    if (nodeName === undefined) {
      return undefined;
    }

    for (let node of checkboxesAtLevel) {
      // Node found
      console.log(node.label);
      if (node.label === nodeName) {
        return node;
      }

      // Search children recursively
      const foundInChild = findNode(node.childrenNodes, nodeName);
      if (foundInChild) {
        return foundInChild; // Return the result of the recursive call
      }
    }

    // Node not found
    return undefined;
  };

  // Checks all descendents of a node
  const operateOnDescendents = (node: Node, check: boolean) => {
    for (let child of node.childrenNodes) {
      child.checked = check;
      operateOnDescendents(child, check);
    }
  };

  console.log(findNode(checkboxes, "greetings"));

  const handleChange = (event: any, node: Node) => {
    const nodeCopy = { ...node };

    // Find parent
    const parentCopy = { ...findNode(checkboxes, node.parent) };

    // If checked
    // THIS NEEDS TO BE FIXED!!! SHOULD CAPTURE THE NODE AND IF WAS CHECKED OR UNCHECKED
    if (event.target.value === "check") {
      // Set node to checked
      nodeCopy.checked = true;

      // Check all children
      operateOnDescendents(nodeCopy, true);

      //   verify if parent's children are checked
      //     if so, check parent
      //       repeat recursively
    }

    // If unchecked
    else {
      // Uncheck parent
      if (parentCopy) {
        parentCopy.checked = false;
      }

      // Uncheck all children
      operateOnDescendents(nodeCopy, false);
    }

    // Set state
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

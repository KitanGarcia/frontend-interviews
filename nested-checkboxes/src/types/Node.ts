export interface Node {
  label: string;
  checked: boolean;
  childrenNodes: Node[];
  parent?: string;
}

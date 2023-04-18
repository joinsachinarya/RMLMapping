import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";

const initialNodes = [
  {
    id: "node-1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];
const nodeTypes = { custom: CustomNode };
const rfStyle = {
  backgroundColor: "#EEE",
};

const Graph = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes: unknown) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: unknown) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: unknown) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
      // onClick={handleClick}
    />
  );
};

export default Graph;

import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { GraphView } from "react-digraph";
import { sample, getServerMonitoring, getUpdatedData } from "./sample";
import {
  default as nodeConfig,
  // CUSTOM_EMPTY_TYPE,
  NODE_KEY,
  SERVER_TYPE,
} from "./config";

function Graph() {
  const customNodeRef = useRef(null);
  const [graph, setGraph] = useState(sample);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    getServerMonitoring().then((response) =>
      setGraph(getUpdatedData(response))
    );
  }, []);

  function getNodeIndex(searchNode) {
    return graph.nodes.findIndex((node) => {
      return node[NODE_KEY] === searchNode[NODE_KEY];
    });
  }

  function getEdgeIndex(searchEdge) {
    return graph.edges.findIndex((edge) => {
      return (
        edge.source === searchEdge.source && edge.target === searchEdge.target
      );
    });
  }

  function getViewNode(nodeKey) {
    const searchNode = {};
    searchNode[NODE_KEY] = nodeKey;
    const i = getNodeIndex(searchNode);
    return graph.nodes[i];
  }

  function deleteStartNode() {
    const newGraph = { ...graph };
    newGraph.nodes.splice(0, 1);
    newGraph.nodes = [...graph.nodes];
    setGraph(newGraph);
  }

  function onUpdateNode(viewNode) {
    const newGraph = { ...graph };
    const i = getNodeIndex(viewNode);

    newGraph.nodes[i] = viewNode;
    setGraph(newGraph);
  }

  function onSelectNode(viewNode, event) {
    setSelected(viewNode);
  }

  function onSelectEdge(viewEdge) {
    setSelected(viewEdge);
  }

  function onCreateNode(x, y) {
    const newGraph = { ...graph };
    const type = Math.random() < 0.25 ? SERVER_TYPE : CUSTOM_EMPTY_TYPE;

    const viewNode = {
      id: Date.now(),
      title: "",
      type,
      x,
      y,
    };

    newGraph.nodes = [...graph.nodes, viewNode];
    setGraph(newGraph);
  }

  function onDeleteNode(viewNode, nodeId, nodeArr) {
    const newGraph = { ...graph };
    const newEdges = graph.edges.filter((edge, i) => {
      return (
        edge.source !== viewNode[NODE_KEY] && edge.target !== viewNode[NODE_KEY]
      );
    });

    newGraph.nodes = nodeArr;
    newGraph.edges = newEdges;

    setGraph(newGraph);
    setSelected(null);
  }

  function onSwapEdge(sourceViewNode, targetViewNode, viewEdge) {
    const newGraph = { ...graph };
    const i = getEdgeIndex(viewEdge);
    const edge = JSON.parse(JSON.stringify(graph.edges[i]));

    edge.source = sourceViewNode[NODE_KEY];
    edge.target = targetViewNode[NODE_KEY];
    newGraph.edges[i] = edge;
    newGraph.edges = [...graph.edges];

    setGraph(newGraph);
    setSelected(edge);
  }

  function onDeleteEdge(viewEdge, edges) {
    const newGraph = { ...graph };
    newGraph.edges = edges;
    setGraph(newGraph);
    setSelected(null);
  }

  return (
    <>
      <div id="graph" style={{ height: "50rem" }}>
        <GraphView
          showGraphControls={true}
          gridSize={100}
          gridDotSize={1}
          renderNodeText={false}
          ref={customNodeRef}
          nodeKey={NODE_KEY}
          nodes={graph.nodes}
          edges={graph.edges}
          selected={selected}
          nodeTypes={nodeConfig.NodeTypes}
          nodeSubtypes
          edgeTypes={nodeConfig.EdgeTypes}
          onSelectNode={onSelectNode}
          onCreateNode={onCreateNode}
          onUpdateNode={onUpdateNode}
          onDeleteNode={onDeleteNode}
          onSelectEdge={onSelectEdge}
          onSwapEdge={onSwapEdge}
          onDeleteEdge={onDeleteEdge}
          readOnly
        />
      </div>
    </>
  );
}

export default Graph;

// src/mindmaps/functional/functionalStyles.js

const functionalStyles = [
  {
    selector: 'node.first',
    style: {
      shape: 'ellipse',
      'background-color': '#98EE99', // Very light green
      'text-outline-color': '#98EE99',
      color: '#2d2d2d',
    },
  },
  {
    selector: 'node.second',
    style: {
      shape: 'rectangle',
      'background-color': '#B9F6CA', // Mint green
      'text-outline-color': '#B9F6CA',
      color: '#2d2d2d',
    },
  },
  {
    selector: 'node.third',
    style: {
      shape: 'diamond',
      'background-color': '#E8F5E9', // Almost white green
      color: '#2d2d2d',
      'text-outline-width': 0,
      width: '130px',
      height: '80px',
    },
  },
  {
    selector: 'node#antipatterns',
    style: {
      'background-color': '#FF8A80', // Light red
      shape: 'hexagon',
      'text-outline-width': 0,
      color: '#2d2d2d',
    },
  },
  {
    selector: 'node#mutability, node#impureFunctions, node#sharedState',
    style: {
      'background-color': '#FFB3B3', // Lighter red
      shape: 'hexagon',
      'text-outline-width': 0,
      color: '#2d2d2d',
    },
  },
  {
    selector: 'node#directMutation, node#arrayMutators, node#sideEffects, node#externalDependency',
    style: {
      'background-color': '#FFE0E0', // Very light red
      shape: 'hexagon',
      'text-outline-width': 0,
      color: '#2d2d2d',
    },
  },
  // Edge styles
  {
    selector: 'edge',
    style: {
      'control-point-step-size': 20,
      width: 3,
      'line-color': '#66BB6A', // Lighter Material green
      'target-arrow-color': '#66BB6A',
      'target-arrow-shape': 'triangle',
      'curve-style': 'unbundled-bezier',
    },
  },
  {
    selector:
      'edge[source = "antipatterns"], edge[source = "mutability"], edge[source = "impureFunctions"]',
    style: {
      'line-style': 'dashed',
      'line-color': '#FF8A80', // Light red
      'target-arrow-color': '#FF8A80',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
    },
  },
  {
    selector: 'edge[target = "antipatterns"]',
    style: {
      'line-style': 'solid',
      'line-color': '#FF8A80', // Light red
      'target-arrow-color': '#FF8A80',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
    },
  },
]

export default functionalStyles

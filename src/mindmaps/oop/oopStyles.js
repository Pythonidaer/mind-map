const oopStyles = [
    {
      selector: 'node.first',
      style: {
        shape: 'ellipse',
        'background-color': '#98EE99', // Light blue
        'text-outline-color': '#98EE99',
        color: '#2d2d2d',
      },
    },
    {
      selector: 'node.second',
      style: {
        shape: 'rectangle',
        'background-color': '#B9F6CA', // Medium blue
        'text-outline-color': '#B9F6CA',
        color: '#2d2d2d',
      },
    },
    {
      selector: 'node.third',
      style: {
        shape: 'diamond',
        'background-color': '#B9F6CA', // Almost white blue
        color: '#2d2d2d',
        'text-outline-width': 0,
        width: '130px',
        height: '80px',
      },
    },
    {
      selector: 'node#antipatterns',
      style: {
        'background-color': '#FF8A80', // Light red for anti‑patterns
        shape: 'hexagon',
        'text-outline-width': 0,
        color: '#2d2d2d',
      },
    },
    {
      selector: 'node#godObjects, node#excessiveInheritance, node#misusingThis, node#globalState, node#modifyingPrototypes',
      style: {
        'background-color': '#FFB3B3', // Lighter red for specific anti‑patterns
        shape: 'hexagon',
        'text-outline-width': 0,
        color: '#2d2d2d',
      },
    },
    {
      selector: 'node#godObjects',
      style: {
        'background-color': '#FFB3B3', // Very light red for third‑level example
        shape: 'hexagon',
        'text-outline-width': 0,
        color: '#2d2d2d',
      },
    },
    // Edge styles (similar to your functionalStyles)
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
        'edge[source = "antipatterns"], edge[source = "godObjects"], edge[source = "excessiveInheritance"]',
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
  ];
  
  export default oopStyles;
  

  
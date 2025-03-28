// src/mindmaps/shared/cyBaseStyles.js

const cyBaseStyles = [
  // Base style for all nodes
  {
    selector: 'node',
    style: {
      label: 'data(label)',
      'text-valign': 'center',
      color: '#2d2d2d',
      'text-outline-width': 0,
      'font-size': '24px',
      'font-weight': 500,
      'font-family': '"Segoe UI", "Open Sans", sans-serif',
      'text-margin-y': 8,
      width: '200px',
      height: '140px',
      padding: '30px',
      'text-wrap': 'wrap',
      'text-max-width': '180px',
    },
  },
  {
    selector: 'node.root',
    style: {
      shape: 'round-rectangle',
      'background-color': '#37474F',
      'text-outline-color': '#37474F',
      'font-weight': 600,
      'font-size': '28px',
      color: '#ffffff',
      width: '240px',
      height: '160px',
    },
  },
]

export default cyBaseStyles
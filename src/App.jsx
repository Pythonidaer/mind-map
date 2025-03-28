import $ from 'jquery'
window.jQuery = $
window.$ = $
import React, { useEffect, useRef } from 'react'
import cytoscape from 'cytoscape'
import cytoscapeQtip from 'cytoscape-qtip'
import 'qtip2/dist/jquery.qtip.css'
import 'qtip2'

cytoscapeQtip(cytoscape)

function App() {
  const cyRef = useRef(null)

  // Fixed container style: black background with ghost white text
  const containerStyle = {
    width: '100%',
    height: 'calc(100% - 60px)',
    border: '1px solid #ccc',
    backgroundColor: '#050609',
  }

  // Base text color for nodes: ghost white
  const baseTextColor = '#FEF9FF'

  // Cytoscape style array using your color scheme:
  const cyStyles = [
    // Base style for all nodes
    {
      selector: 'node',
      style: {
        label: 'data(label)',
        'text-valign': 'center',
        color: baseTextColor,
        'text-outline-width': 3,
        'font-size': '18px',
        'font-family': '"Open Sans", sans-serif',
        width: '150px',
        height: '100px',
        padding: '20px',
        'text-wrap': 'wrap',
        'text-max-width': '140px',
      },
    },
    {
      selector: 'node.root',
      style: {
        shape: 'round-rectangle',
        'background-color': '#211C84',
        'text-outline-color': '#211C84',
      },
    },
    {
      selector: 'node.first',
      style: {
        shape: 'ellipse',
        margin: '1rem',
        'background-color': '#4D55CC',
        'text-outline-color': '#4D55CC',
      },
    },
    {
      selector: 'node.second',
      style: {
        shape: 'rectangle',
        'background-color': '#7A73D1',
        'text-outline-color': '#7A73D1',
      },
    },
    // Third-level node style: Distinct variant (lighter than second-level)
    {
      selector: 'node.third',
      style: {
        shape: 'diamond',
        'background-color': '#B5A8D5',
        color: '#000', // Black text for better contrast
        'text-outline-width': 0,
        width: '130px',
        height: '80px',
      },
    },
    {
      selector: 'node#antipatterns',
      style: {
        shape: 'hexagon',
      },
    },
    // Edge style
    {
      selector: 'edge',
      // style: {
      //   width: 3,
      //   'line-color': '#32CD32',
      //   'target-arrow-color': '#32CD32',
      //   'target-arrow-shape': 'triangle',
      //   'curve-style': 'bezier',
      // },
      style: {
        'control-point-step-size': 20, // Adjust as needed
        width: 3,
        'line-color': '#32CD32',
        'target-arrow-color': '#32CD32',
        'target-arrow-shape': 'triangle',
        'curve-style': 'unbundled-bezier',
      },
    },
    {
      selector:
        'edge[source = "antipatterns"], edge[source = "mutability"], edge[source = "impureFunctions"]',
      style: {
        'line-style': 'dashed',
        'line-color': '#FF69B4', // Vibrant pink
        'target-arrow-color': '#FF69B4', // Same vibrant pink for the arrow
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
      },
    },
    {
      selector: 'edge[target = "antipatterns"]',
      style: {
        'line-style': 'solid',
        'line-color': '#FF4500', // Bright reddish-pink/red (e.g., OrangeRed)
        'target-arrow-color': '#FF4500', // Same vibrant color for the arrow
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
      },
    },
  ]

  // Define elements based on your mermaid mindmap structure.
  // The root node has five direct children: Immutability, State in Functional Programming, Functions, Anti-Patterns, and Benefits.
  // Functions and Anti-Patterns are separate nodes.
  const elements = {
    nodes: [
      // Root node
      {
        data: {
          id: 'root',
          label: 'Functional Programming in JavaScript',
          definition:
            'A style of programming that emphasizes pure functions, immutability, and declarative code.',
        },
        classes: 'root',
      },
      // First-level nodes (direct children of root)
      {
        data: {
          id: 'immutability',
          label: 'Immutability',
          definition:
            'Data cannot be changed once created; instead, new data is produced for modifications.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'state',
          label: 'State in Functional Programming',
          definition:
            'Manage state by avoiding shared state, using parameters instead of globals, and returning new state from functions.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'functions',
          label: 'Functions',
          definition:
            'Functions are central to functional programming; they can be first-class, pure, higher-order, and composable.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'antipatterns',
          label: 'Anti-Patterns',
          definition:
            'Patterns to avoid: mutability, impure functions, and shared state can lead to bugs and maintenance issues.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'benefits',
          label: 'Benefits',
          definition:
            'Functional programming improves testability, predictability, modularity, concurrency-friendliness, and readability.',
        },
        classes: 'first',
      },
      // Second-level nodes for Immutability
      {
        data: {
          id: 'objectFreeze',
          label: 'Object.freeze',
          definition: 'Prevents modifications to an object.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'objectAssign',
          label: 'Object.assign',
          definition:
            'Creates a new object by copying properties from source objects.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'spreadOp',
          label: 'Spread Operator',
          definition: 'Copies elements into a new array or object.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'arrayNew',
          label: 'Array Methods that return new arrays',
          definition:
            'Methods like map, filter, and reduce that do not mutate the original array.',
        },
        classes: 'second',
      },
      // Second-level nodes for State
      {
        data: {
          id: 'avoidShared',
          label: 'Avoid Shared State',
          definition:
            'Prevent multiple parts of your code from modifying the same state concurrently.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'useParams',
          label: 'Use Parameters Instead of Globals',
          definition:
            'Pass state as parameters to functions rather than using global variables.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'returnNew',
          label: 'Return New State from Functions',
          definition:
            'Functions should return new state rather than modifying existing state.',
        },
        classes: 'second',
      },
      // Second-level nodes for Functions
      {
        data: {
          id: 'firstClass',
          label: 'First-Class Functions',
          definition:
            'Functions are treated as first-class citizens and can be passed around as values.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'pureFunctions',
          label: 'Pure Functions',
          definition:
            'Functions that produce the same output for the same input and have no side effects.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'higherOrder',
          label: 'Higher-Order Functions',
          definition:
            'Functions that accept other functions as arguments or return them.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'composition',
          label: 'Function Composition',
          definition: 'Combining simple functions to create more complex ones.',
        },
        classes: 'second',
      },
      // Third-level node under Pure Functions
      {
        data: {
          id: 'noSideEffects',
          label: 'No Side Effects',
          definition: 'Pure functions do not affect external state.',
        },
        classes: 'third',
      },
      // Second-level nodes for Anti-Patterns
      {
        data: {
          id: 'mutability',
          label: 'Mutability',
          definition:
            'Directly modifying objects or arrays leads to unpredictable behavior.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'impureFunctions',
          label: 'Impure Functions',
          definition:
            'Functions that produce side effects or depend on external state.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'sharedState',
          label: 'Shared State',
          definition:
            'Multiple parts of the program modifying the same state can lead to bugs.',
        },
        classes: 'second',
      },
      // Third-level nodes under Mutability
      {
        data: {
          id: 'directMutation',
          label: 'Direct Object/Array Mutation',
          definition: 'Changing objects or arrays in place.',
        },
        classes: 'third',
      },
      {
        data: {
          id: 'arrayMutators',
          label: 'Array Methods',
          definition:
            'Using methods that modify the array in place (push, pop, splice, etc.).',
        },
        classes: 'third',
      },
      // Third-level nodes under Impure Functions
      {
        data: {
          id: 'sideEffects',
          label: 'Side Effects',
          definition:
            'Functions that interact with external systems (I/O, DOM, etc.).',
        },
        classes: 'third',
      },
      {
        data: {
          id: 'externalDependency',
          label: 'External State Dependency',
          definition: 'Functions that rely on or change external state.',
        },
        classes: 'third',
      },
      // Second-level nodes for Benefits
      {
        data: {
          id: 'testability',
          label: 'Testability',
          definition: 'Easier to test due to predictable outputs.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'predictability',
          label: 'Predictability',
          definition: 'Outputs remain consistent given the same inputs.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'modularity',
          label: 'Modularity',
          definition:
            'Well-defined, independent modules that are easier to maintain.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'concurrency',
          label: 'Concurrency-Friendly',
          definition:
            'Immutable data and pure functions reduce issues in concurrent contexts.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'readability',
          label: 'Readability',
          definition: 'Clear and concise code that is easier to understand.',
        },
        classes: 'second',
      },
    ],
    edges: [
      // Connect root to first-level nodes
      { data: { source: 'root', target: 'immutability' } },
      { data: { source: 'root', target: 'state' } },
      { data: { source: 'root', target: 'functions' } },
      { data: { source: 'root', target: 'antipatterns' } },
      { data: { source: 'root', target: 'benefits' } },
      // Immutability branch
      { data: { source: 'immutability', target: 'objectFreeze' } },
      { data: { source: 'immutability', target: 'objectAssign' } },
      { data: { source: 'immutability', target: 'spreadOp' } },
      { data: { source: 'immutability', target: 'arrayNew' } },
      // State branch
      { data: { source: 'state', target: 'avoidShared' } },
      { data: { source: 'state', target: 'useParams' } },
      { data: { source: 'state', target: 'returnNew' } },
      // Functions branch
      { data: { source: 'functions', target: 'firstClass' } },
      { data: { source: 'functions', target: 'pureFunctions' } },
      { data: { source: 'functions', target: 'higherOrder' } },
      { data: { source: 'functions', target: 'composition' } },
      // Pure functions third-level child
      { data: { source: 'pureFunctions', target: 'noSideEffects' } },
      // Anti-Patterns branch
      { data: { source: 'antipatterns', target: 'mutability' } },
      { data: { source: 'antipatterns', target: 'impureFunctions' } },
      { data: { source: 'antipatterns', target: 'sharedState' } },
      // Mutability third-level children
      { data: { source: 'mutability', target: 'directMutation' } },
      { data: { source: 'mutability', target: 'arrayMutators' } },
      // Impure Functions third-level children
      { data: { source: 'impureFunctions', target: 'sideEffects' } },
      { data: { source: 'impureFunctions', target: 'externalDependency' } },
      // Benefits branch
      { data: { source: 'benefits', target: 'testability' } },
      { data: { source: 'benefits', target: 'predictability' } },
      { data: { source: 'benefits', target: 'modularity' } },
      { data: { source: 'benefits', target: 'concurrency' } },
      { data: { source: 'benefits', target: 'readability' } },
    ],
  }

  useEffect(() => {
    // Initialize Cytoscape
    const cy = cytoscape({
      container: document.getElementById('cy'),
      headless: false,
      boxSelectionEnabled: false,
      autounselectify: true,
      layout: {
        name: 'cose',
        directed: true,
        padding: 30,
        spacingFactor: 1.3,
        animate: false,
      },
      style: cyStyles,
      elements,
    })

    // Attach tooltips once Cytoscape is ready
    cy.ready(() => {
      if (!cy.renderer()) {
        console.error(
          'Renderer is not available. Cytoscape may be in headless mode.'
        )
        return
      }
      cy.nodes().forEach((node) => {
        node.qtip({
          content: node.data('definition'),
          position: {
            my: 'top center',
            at: 'bottom center',
          },
          style: {
            classes: 'qtip-bootstrap',
            tip: { width: 16, height: 8 },
            'font-size': '16px',
            'max-width': '300px',
          },
          show: { event: 'mouseover' },
          hide: { event: 'mouseout' },
        })
      })
    })

    console.log('Is Cytoscape headless?', cy.headless())

    return () => {
      // Cleanup: destroy tooltips and the Cytoscape instance
      cy.nodes().forEach((node) => {
        try {
          node.qtip('destroy')
        } catch (e) {
          console.warn('Error destroying qTip for node', node.id(), e)
        }
      })
      cy.destroy()
    }
  }, [])

  return (
    <div
      style={{
        height: '95vh',
        padding: '20px',
        backgroundColor: '#050609',
        color: '#FEF9FF',
        fontFamily: '"Open Sans", sans-serif',
      }}
    >
      <h2>Functional Programming Mind Map</h2>
      <div id='cy' ref={cyRef} style={containerStyle} />
    </div>
  )
}

export default App

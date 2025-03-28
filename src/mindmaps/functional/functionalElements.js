// src/mindmaps/functional/functionalElements.js

const functionalElements = {
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
  };
  
  export default functionalElements;
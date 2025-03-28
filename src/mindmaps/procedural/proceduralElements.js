const proceduralElements = {
    nodes: [
      // Root node
      {
        data: {
          id: 'root',
          label: 'Procedural Programming in JavaScript',
          definition:
            'A style that relies on step‑by‑step instructions, organizing code into procedures (functions) that operate on shared data.',
        },
        classes: 'root',
      },
      // First-level nodes (direct children of root)
      {
        data: {
          id: 'keyPrinciples',
          label: 'Key Principles',
          definition:
            'Focus on linear, sequential steps using functions and control structures to manipulate shared state.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'benefits',
          label: 'Benefits',
          definition:
            'Simple, straightforward code for small tasks with clear execution order and transparent state changes.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'cons',
          label: 'Cons',
          definition:
            'Can lead to spaghetti code, difficulty scaling, and high risk of bugs due to mutable shared state.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'antipatterns',
          label: 'Anti‑Patterns',
          definition:
            'Pitfalls include excessive global variables, god functions, and tight coupling of code due to implicit ordering.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'examples',
          label: 'Examples & APIs',
          definition:
            'Includes use of loops, conditionals, and direct DOM manipulation, as well as algorithm implementations in plain JavaScript.',
        },
        classes: 'first',
      },
      // Second-level nodes for Key Principles
      {
        data: {
          id: 'stepByStep',
          label: 'Step‑by‑Step Instructions',
          definition:
            'Explicitly defines each action the computer must take in order.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'procedures',
          label: 'Procedures (Functions)',
          definition:
            'Organizes code into functions that perform specific tasks.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'sharedState',
          label: 'Shared State',
          definition:
            'Uses variables that are modified by multiple procedures, often as global or higher‑scope variables.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'structured',
          label: 'Structured Programming',
          definition:
            'Relies on loops, conditionals, and structured control flows instead of arbitrary jumps.',
        },
        classes: 'second',
      },
      // Second-level nodes for Benefits
      {
        data: {
          id: 'simplicity',
          label: 'Simplicity',
          definition:
            'Ideal for small programs and quick scripting tasks with a clear, sequential flow.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'debugging',
          label: 'Easy Debugging',
          definition:
            'Straight‑forward execution order makes tracing state changes simpler.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'lowOverhead',
          label: 'Low Overhead',
          definition:
            'Minimal abstraction means the code does exactly what is written, often with less memory or performance overhead.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'scripting',
          label: 'Scripting & Automation',
          definition:
            'Well suited for one‑off scripts and automation tasks where a quick solution is needed.',
        },
        classes: 'second',
      },
      // Second-level nodes for Cons
      {
        data: {
          id: 'scalability',
          label: 'Poor Scalability',
          definition:
            'Code can become unmanageable and error‑prone as programs grow larger.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'maintenance',
          label: 'Maintenance Difficulties',
          definition:
            'Lack of modularity can lead to tightly coupled code that is hard to modify.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'bugRisk',
          label: 'High Bug Risk',
          definition:
            'Frequent mutation of shared state increases the chance of unintended side effects and bugs.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'reusability',
          label: 'Limited Reusability',
          definition:
            'Procedures are often context‑dependent, making them harder to reuse across different parts of an application.',
        },
        classes: 'second',
      },
      // Second-level nodes for Anti‑Patterns
      {
        data: {
          id: 'globalVars',
          label: 'Excessive Global Variables',
          definition:
            'Overuse of global state can lead to unpredictable interactions and bugs.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'godFunction',
          label: 'God Function',
          definition:
            'One massive function that does too much, making it hard to debug and maintain.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'orderDependency',
          label: 'Implicit Order Dependency',
          definition:
            'Code relying too much on the specific sequence of operations, causing fragility if the order changes.',
        },
        classes: 'second',
      },
      // Second-level nodes for Examples & APIs
      {
        data: {
          id: 'loops',
          label: 'Loops & Conditionals',
          definition:
            'Using for/while loops, if/else, and switch statements to control program flow.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'domProcedural',
          label: 'Direct DOM Manipulation',
          definition:
            'Manipulating DOM elements via methods like document.createElement and element.appendChild.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'algorithmic',
          label: 'Algorithm Implementations',
          definition:
            'Procedural solutions to algorithms (e.g., sorting, searching) written explicitly.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'nodeScripts',
          label: 'Node.js Scripting',
          definition:
            'Using Node.js for writing small, linear scripts that perform file or network operations.',
        },
        classes: 'second',
      },
    ],
    edges: [
      // Connect root to first-level nodes
      { data: { source: 'root', target: 'keyPrinciples' } },
      { data: { source: 'root', target: 'benefits' } },
      { data: { source: 'root', target: 'cons' } },
      { data: { source: 'root', target: 'antipatterns' } },
      { data: { source: 'root', target: 'examples' } },
      // Key Principles branch
      { data: { source: 'keyPrinciples', target: 'stepByStep' } },
      { data: { source: 'keyPrinciples', target: 'procedures' } },
      { data: { source: 'keyPrinciples', target: 'sharedState' } },
      { data: { source: 'keyPrinciples', target: 'structured' } },
      // Benefits branch
      { data: { source: 'benefits', target: 'simplicity' } },
      { data: { source: 'benefits', target: 'debugging' } },
      { data: { source: 'benefits', target: 'lowOverhead' } },
      { data: { source: 'benefits', target: 'scripting' } },
      // Cons branch
      { data: { source: 'cons', target: 'scalability' } },
      { data: { source: 'cons', target: 'maintenance' } },
      { data: { source: 'cons', target: 'bugRisk' } },
      { data: { source: 'cons', target: 'reusability' } },
      // Anti‑Patterns branch
      { data: { source: 'antipatterns', target: 'globalVars' } },
      { data: { source: 'antipatterns', target: 'godFunction' } },
      { data: { source: 'antipatterns', target: 'orderDependency' } },
      // Examples branch
      { data: { source: 'examples', target: 'loops' } },
      { data: { source: 'examples', target: 'domProcedural' } },
      { data: { source: 'examples', target: 'algorithmic' } },
      { data: { source: 'examples', target: 'nodeScripts' } },
    ],
  };
  
  export default proceduralElements;
  
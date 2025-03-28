const imperativeElements = {
    nodes: [
      // Root node
      {
        data: {
          id: 'root',
          label: 'Imperative Programming in JavaScript',
          definition:
            'A style where you explicitly define every step and state change, controlling exactly how tasks are executed.',
        },
        classes: 'root',
      },
      // First-level nodes (direct children of root)
      {
        data: {
          id: 'keyPrinciples',
          label: 'Key Principles',
          definition:
            'Focuses on explicit instructions, mutable state, and precise control over program flow and data changes.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'benefits',
          label: 'Benefits',
          definition:
            'Provides precise control, easy step‑by‑step debugging, and a familiar, transparent mapping to how computers execute instructions.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'cons',
          label: 'Cons',
          definition:
            'Can become verbose, complex, and error‑prone due to heavy mutation and intricate control flows.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'antipatterns',
          label: 'Anti‑Patterns',
          definition:
            'Pitfalls include spaghetti code, excessive mutability, tight coupling, repetitive code, and ignoring return values.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'examples',
          label: 'Examples & APIs',
          definition:
            'Includes explicit loops, in‑place array methods, direct DOM manipulation, async/await control, and low‑level binary operations.',
        },
        classes: 'first',
      },
      // Second-level nodes for Key Principles
      {
        data: {
          id: 'explicitInstructions',
          label: 'Explicit Instructions',
          definition:
            'Each operation is clearly stated in sequence; nothing is left implicit.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'mutableState',
          label: 'Mutable State',
          definition:
            'Variables and data structures are changed in place to reflect progress.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'sequencing',
          label: 'Sequencing & Order',
          definition:
            'The order of commands is critical as each step directly affects subsequent operations.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'proceduralOOP',
          label: 'Procedural/OOP Inclusion',
          definition:
            'Imperative style underlies both procedural and OOP approaches by detailing how operations occur.',
        },
        classes: 'second',
      },
      // Second-level nodes for Benefits
      {
        data: {
          id: 'preciseControl',
          label: 'Precise Control',
          definition:
            'Allows fine‑tuning of performance and exact behavior through detailed commands.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'stepwiseDebugging',
          label: 'Step‑by‑Step Debugging',
          definition:
            'Straightforward execution order makes it easier to trace how state changes over time.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'familiarity',
          label: 'Familiarity',
          definition:
            'Matches the natural “do this, then that” way many programmers initially learn to code.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'transparency',
          label: 'Transparency',
          definition:
            'State and operations are explicit, making the underlying process clear.',
        },
        classes: 'second',
      },
      // Second-level nodes for Cons
      {
        data: {
          id: 'verbosity',
          label: 'Verbosity & Complexity',
          definition:
            'The need to detail every step can lead to large amounts of boilerplate code.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'scalabilityChallenges',
          label: 'Scalability Challenges',
          definition:
            'Complex, tightly coupled code can become difficult to maintain as the application grows.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'sideEffectBugs',
          label: 'Side‑Effect Bugs',
          definition:
            'Frequent mutation increases the chance of unintended interactions and bugs.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'repetitiveCode',
          label: 'Repetitive Code',
          definition:
            'Without abstraction, similar operations are repeated, making maintenance harder.',
        },
        classes: 'second',
      },
      // Second-level nodes for Anti‑Patterns
      {
        data: {
          id: 'spaghettiCode',
          label: 'Spaghetti Code',
          definition:
            'Unstructured, nested control flows that are hard to follow and debug.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'excessiveMutability',
          label: 'Excessive Mutability',
          definition:
            'Over‑reliance on in‑place modifications leads to hidden bugs and unpredictable behavior.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'tightCoupling',
          label: 'Tight Coupling',
          definition:
            'Components become interdependent, making isolated changes difficult.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'ignoredReturns',
          label: 'Ignoring Return Values',
          definition:
            'Failing to check function outputs can cause errors to propagate unnoticed.',
        },
        classes: 'second',
      },
      // Second-level nodes for Examples & APIs
      {
        data: {
          id: 'loopsImperative',
          label: 'Explicit Loops',
          definition:
            'Using for/while loops and direct variable assignments to control flow.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'inPlaceMethods',
          label: 'In‑Place Array Methods',
          definition:
            'Methods like .sort(), .push(), and .splice() that modify arrays directly.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'domImperative',
          label: 'Direct DOM API',
          definition:
            'Using native DOM methods (e.g., element.setAttribute, appendChild) to manipulate the document.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'asyncAwait',
          label: 'async/await',
          definition:
            'Writing asynchronous code in a step‑by‑step manner that waits for each operation.',
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
      { data: { source: 'keyPrinciples', target: 'explicitInstructions' } },
      { data: { source: 'keyPrinciples', target: 'mutableState' } },
      { data: { source: 'keyPrinciples', target: 'sequencing' } },
      { data: { source: 'keyPrinciples', target: 'proceduralOOP' } },
      // Benefits branch
      { data: { source: 'benefits', target: 'preciseControl' } },
      { data: { source: 'benefits', target: 'stepwiseDebugging' } },
      { data: { source: 'benefits', target: 'familiarity' } },
      { data: { source: 'benefits', target: 'transparency' } },
      // Cons branch
      { data: { source: 'cons', target: 'verbosity' } },
      { data: { source: 'cons', target: 'scalabilityChallenges' } },
      { data: { source: 'cons', target: 'sideEffectBugs' } },
      { data: { source: 'cons', target: 'repetitiveCode' } },
      // Anti‑Patterns branch
      { data: { source: 'antipatterns', target: 'spaghettiCode' } },
      { data: { source: 'antipatterns', target: 'excessiveMutability' } },
      { data: { source: 'antipatterns', target: 'tightCoupling' } },
      { data: { source: 'antipatterns', target: 'ignoredReturns' } },
      // Examples branch
      { data: { source: 'examples', target: 'loopsImperative' } },
      { data: { source: 'examples', target: 'inPlaceMethods' } },
      { data: { source: 'examples', target: 'domImperative' } },
      { data: { source: 'examples', target: 'asyncAwait' } },
    ],
  };
  
  export default imperativeElements;
  
const declarativeElements = {
    nodes: [
      // Root node
      {
        data: {
          id: 'root',
          label: 'Declarative Programming in JavaScript',
          definition:
            'A style that focuses on describing what should be done rather than how to do it. It emphasizes clear expression of intent, often using frameworks and high‑level abstractions.',
        },
        classes: 'root',
      },
      // First-level nodes (direct children of root)
      {
        data: {
          id: 'keyPrinciples',
          label: 'Key Principles',
          definition:
            'Focus on describing the desired outcome, using implicit control flow and high‑level abstractions rather than explicit step‑by‑step instructions.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'benefits',
          label: 'Benefits',
          definition:
            'Improved readability, maintainability, fewer side effects, and closer alignment to domain languages, making code easier to reason about.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'cons',
          label: 'Cons',
          definition:
            'May incur performance overhead, offer less fine‑grained control, and can be challenging for developers unfamiliar with abstract concepts.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'antipatterns',
          label: 'Anti‑Patterns',
          definition:
            'Common pitfalls include mixing imperative logic into declarative code, over‑abstraction, state synchronization issues, and ignoring performance details.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'examples',
          label: 'Examples & APIs',
          definition:
            'Examples include using React (JSX) for UI, chaining array methods (map, filter, reduce), promise chaining, and GraphQL for data queries.',
        },
        classes: 'first',
      },
      // Second-level nodes for Key Principles
      {
        data: {
          id: 'whatNotHow',
          label: 'What, Not How',
          definition:
            'Expresses the desired outcome rather than the sequence of steps to achieve it.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'implicitControl',
          label: 'Implicit Control Flow',
          definition:
            'Relies on libraries or frameworks to manage execution order (e.g., React re‑rendering based on state changes).',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'immutabilityStateless',
          label: 'Immutability & Statelessness',
          definition:
            'Favors unchanging data and pure functions to minimize side effects.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'highLevel',
          label: 'High‑Level Abstractions',
          definition:
            'Uses declarative constructs such as JSX, template languages, and DSLs to express logic.',
        },
        classes: 'second',
      },
      // Second-level nodes for Benefits
      {
        data: {
          id: 'readability',
          label: 'Readability',
          definition:
            'Code clearly communicates intent, making it easier to understand at a glance.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'maintainability',
          label: 'Maintainability',
          definition:
            'Changes in implementation are hidden behind high‑level declarations.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'fewerSideEffects',
          label: 'Fewer Side Effects',
          definition:
            'Pure functions and immutable data reduce unexpected behavior in the code.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'domainAlignment',
          label: 'Domain Alignment',
          definition:
            'Declarative code often mirrors the domain language (e.g., HTML, GraphQL), making it intuitive for domain experts.',
        },
        classes: 'second',
      },
      // Second-level nodes for Cons
      {
        data: {
          id: 'performanceOverhead',
          label: 'Performance Overhead',
          definition:
            'Abstractions may add extra processing layers, potentially reducing performance in critical paths.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'lessControl',
          label: 'Less Fine‑Grained Control',
          definition:
            'Developers have less control over execution details and optimizations.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'learningCurve',
          label: 'Learning Curve',
          definition:
            'For those used to imperative styles, shifting to declarative thinking may be challenging.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'opaqueAbstractions',
          label: 'Opaque Abstractions',
          definition:
            'High‑level abstractions can sometimes hide complexity, making debugging harder.',
        },
        classes: 'second',
      },
      // Second-level nodes for Anti‑Patterns
      {
        data: {
          id: 'mixingStyles',
          label: 'Mixing Imperative Logic',
          definition:
            'Inserting imperative steps into declarative code undermines clarity and benefits.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'overAbstraction',
          label: 'Over‑Abstraction',
          definition:
            'Creating overly complex abstractions that obscure the intended behavior.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'stateIssues',
          label: 'State Synchronization Issues',
          definition:
            'Failing to properly manage state can lead to inconsistencies and bugs.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'ignorePerf',
          label: 'Ignoring Performance',
          definition:
            'Relying solely on declarative methods without considering performance can be problematic.',
        },
        classes: 'second',
      },
      // Second-level nodes for Examples & APIs
      {
        data: {
          id: 'reactJSX',
          label: 'React & JSX',
          definition:
            'Using React’s declarative component model to describe UI based on state.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'arrayMethods',
          label: 'Array Methods',
          definition:
            'Using .map, .filter, .reduce for data processing in a declarative style.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'promiseChaining',
          label: 'Promise Chaining',
          definition:
            'Chaining asynchronous actions declaratively using promises.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'graphql',
          label: 'GraphQL & Templates',
          definition:
            'Declaring data requirements with GraphQL or using template languages to describe UI.',
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
      { data: { source: 'keyPrinciples', target: 'whatNotHow' } },
      { data: { source: 'keyPrinciples', target: 'implicitControl' } },
      { data: { source: 'keyPrinciples', target: 'immutabilityStateless' } },
      { data: { source: 'keyPrinciples', target: 'highLevel' } },
      // Benefits branch
      { data: { source: 'benefits', target: 'readability' } },
      { data: { source: 'benefits', target: 'maintainability' } },
      { data: { source: 'benefits', target: 'fewerSideEffects' } },
      { data: { source: 'benefits', target: 'domainAlignment' } },
      // Cons branch
      { data: { source: 'cons', target: 'performanceOverhead' } },
      { data: { source: 'cons', target: 'lessControl' } },
      { data: { source: 'cons', target: 'learningCurve' } },
      { data: { source: 'cons', target: 'opaqueAbstractions' } },
      // Anti‑Patterns branch
      { data: { source: 'antipatterns', target: 'mixingStyles' } },
      { data: { source: 'antipatterns', target: 'overAbstraction' } },
      { data: { source: 'antipatterns', target: 'stateIssues' } },
      { data: { source: 'antipatterns', target: 'ignorePerf' } },
      // Examples branch
      { data: { source: 'examples', target: 'reactJSX' } },
      { data: { source: 'examples', target: 'arrayMethods' } },
      { data: { source: 'examples', target: 'promiseChaining' } },
      { data: { source: 'examples', target: 'graphql' } },
    ],
  };
  
  export default declarativeElements;
  
const oopElements = {
    nodes: [
      // Root node
      {
        data: {
          id: 'root',
          label: 'Object‑Oriented Programming in JavaScript',
          definition:
            'A paradigm that organizes code into objects and classes, emphasizing encapsulation, inheritance, polymorphism, and abstraction to model real‑world entities.',
        },
        classes: 'root',
      },
      // First-level nodes (direct children of root)
      {
        data: {
          id: 'keyPrinciples',
          label: 'Key Principles',
          definition:
            'Core concepts include encapsulation, inheritance, polymorphism, abstraction, and use of classes/prototypes to structure code.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'benefits',
          label: 'Benefits',
          definition:
            'OOP enables intuitive modeling, modularity, reusability, and maintainability by bundling state and behavior into objects.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'cons',
          label: 'Cons',
          definition:
            'OOP can be verbose for simple tasks, prone to tight coupling, and sometimes less performant or harder to debug if misused.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'antipatterns',
          label: 'Anti‑Patterns',
          definition:
            'Common pitfalls include god objects, excessive inheritance, misusing "this", overusing global singletons, and modifying built‑in prototypes.',
        },
        classes: 'first',
      },
      {
        data: {
          id: 'examples',
          label: 'Examples & APIs',
          definition:
            'JavaScript‑specific examples include ES6 classes, prototypal inheritance, closure‑based modules, and OOP‑based frameworks.',
        },
        classes: 'first',
      },
      // Second-level nodes for Key Principles
      {
        data: {
          id: 'encapsulation',
          label: 'Encapsulation',
          definition:
            'Bundling data with methods; exposing a public interface while hiding internal details.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'inheritance',
          label: 'Inheritance',
          definition:
            'Creating new classes or objects by extending existing ones to promote code reuse.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'polymorphism',
          label: 'Polymorphism',
          definition:
            'Allowing objects of different types to be used interchangeably via a common interface.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'abstraction',
          label: 'Abstraction',
          definition:
            'Hiding complex implementation details behind simpler interfaces.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'classesPrototypes',
          label: 'Classes & Prototypes',
          definition:
            'Using ES6 classes for syntactic sugar over JavaScript’s prototypal inheritance model.',
        },
        classes: 'second',
      },
      // Third-level node under Inheritance
      {
        data: {
          id: 'prototypalChain',
          label: 'Prototypal Chain',
          definition:
            'Leveraging JavaScript’s prototype-based inheritance for dynamic object extension.',
        },
        classes: 'third',
      },
      // Second-level nodes for Benefits
      {
        data: {
          id: 'intuitiveModeling',
          label: 'Intuitive Modeling',
          definition:
            'Models real‑world entities naturally through objects and classes.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'modularity',
          label: 'Modularity & Reusability',
          definition:
            'Encapsulation and inheritance allow code to be organized into discrete, reusable units.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'maintainability',
          label: 'Maintainability',
          definition:
            'Changes to an object’s internals do not affect external code as long as its interface remains consistent.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'codeOrganization',
          label: 'Code Organization',
          definition:
            'Classes and objects help break down complex systems into manageable components.',
        },
        classes: 'second',
      },
      // Second-level nodes for Cons
      {
        data: {
          id: 'verboseComplexity',
          label: 'Verbosity/Complexity',
          definition:
            'For small tasks, the overhead of defining classes and objects can be overkill.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'tightCoupling',
          label: 'Tight Coupling',
          definition:
            'Inheritance can create strong dependencies between classes, making changes fragile.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'performanceOverhead',
          label: 'Performance Overhead',
          definition:
            'Dynamic dispatch and object creation may incur extra performance costs.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'learningCurve',
          label: 'Learning Curve & Misuse',
          definition:
            'Misunderstanding prototypes or “this” can lead to bugs and misuse of the paradigm.',
        },
        classes: 'second',
      },
      // Second-level nodes for Anti‑Patterns
      {
        data: {
          id: 'godObjects',
          label: 'God Objects',
          definition:
            'Objects that take on too many responsibilities, reducing clarity and maintainability.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'excessiveInheritance',
          label: 'Excessive Inheritance',
          definition:
            'Deep inheritance hierarchies can lead to brittle, hard‑to‑maintain code.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'misusingThis',
          label: 'Misusing "this"',
          definition:
            'Losing the correct context in methods can lead to unexpected behavior.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'globalState',
          label: 'Global State/Singletons',
          definition:
            'Overuse of global objects or singletons undermines encapsulation and increases coupling.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'modifyingPrototypes',
          label: 'Modifying Prototypes',
          definition:
            'Changing built‑in prototypes can cause conflicts and unexpected behavior across the application.',
        },
        classes: 'second',
      },
      // Second-level nodes for Examples & APIs
      {
        data: {
          id: 'es6Classes',
          label: 'ES6 Classes',
          definition:
            'Modern syntax for defining classes and inheritance (using "class", "constructor", "extends", "super").',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'prototypalInheritance',
          label: 'Prototypal Inheritance',
          definition:
            'Directly linking objects via prototypes using Object.create() or function constructors.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'closuresModules',
          label: 'Encapsulation via Closures',
          definition:
            'Module pattern using closures to hide private data while exposing a public API.',
        },
        classes: 'second',
      },
      {
        data: {
          id: 'frameworksOOP',
          label: 'Frameworks & Tools',
          definition:
            'OOP is integral in frameworks like Angular or in libraries such as TypeScript for structured, class‑based coding.',
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
      { data: { source: 'keyPrinciples', target: 'encapsulation' } },
      { data: { source: 'keyPrinciples', target: 'inheritance' } },
      { data: { source: 'keyPrinciples', target: 'polymorphism' } },
      { data: { source: 'keyPrinciples', target: 'abstraction' } },
      { data: { source: 'keyPrinciples', target: 'classesPrototypes' } },
      // Inheritance third-level child
      { data: { source: 'inheritance', target: 'prototypalChain' } },
      // Benefits branch
      { data: { source: 'benefits', target: 'intuitiveModeling' } },
      { data: { source: 'benefits', target: 'modularity' } },
      { data: { source: 'benefits', target: 'maintainability' } },
      { data: { source: 'benefits', target: 'codeOrganization' } },
      // Cons branch
      { data: { source: 'cons', target: 'verboseComplexity' } },
      { data: { source: 'cons', target: 'tightCoupling' } },
      { data: { source: 'cons', target: 'performanceOverhead' } },
      { data: { source: 'cons', target: 'learningCurve' } },
      // Anti‑Patterns branch
      { data: { source: 'antipatterns', target: 'godObjects' } },
      { data: { source: 'antipatterns', target: 'excessiveInheritance' } },
      { data: { source: 'antipatterns', target: 'misusingThis' } },
      { data: { source: 'antipatterns', target: 'globalState' } },
      { data: { source: 'antipatterns', target: 'modifyingPrototypes' } },
      // Examples branch
      { data: { source: 'examples', target: 'es6Classes' } },
      { data: { source: 'examples', target: 'prototypalInheritance' } },
      { data: { source: 'examples', target: 'closuresModules' } },
      { data: { source: 'examples', target: 'frameworksOOP' } },
    ],
  };
  
  export default oopElements;
  
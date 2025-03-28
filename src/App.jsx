import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MindmapBase from './mindmaps/MindmapBase'
import Navbar from './components/Navbar'
import cyBaseStyles from './mindmaps/shared/cyBaseStyles'
import containerStyle from './mindmaps/shared/containerStyles'
import functionalElements from './mindmaps/functional/functionalElements'
import functionalStyles from './mindmaps/functional/functionalStyles'
import oopElements from './mindmaps/oop/oopElements'
import oopStyles from './mindmaps/oop/oopStyles'
import imperativeElements from './mindmaps/imperative/imperativeElements'
import imperativeStyles from './mindmaps/imperative/imperativeStyles'
import declarativeElements from './mindmaps/declarative/declarativeElements'
import declarativeStyles from './mindmaps/declarative/declarativeStyles'
import proceduralElements from './mindmaps/procedural/proceduralElements'
import proceduralStyles from './mindmaps/procedural/proceduralStyles'

function App() {
  const functionalCombinedStyles = [...cyBaseStyles, ...functionalStyles]
  const oopCombinedStyles = [...cyBaseStyles, ...oopStyles]
  const imperativeCombinedStyles = [...cyBaseStyles, ...imperativeStyles]
  const declarativeCombinedStyles = [...cyBaseStyles, ...declarativeStyles]
  const proceduralCombinedStyles = [...cyBaseStyles, ...proceduralStyles]

  return (
    <Router>
      <div>
        <Navbar />
        <div
          style={{
            marginTop: '64px', // Add space for fixed navbar
            padding: '20px',
            width: '80%',
            margin: 'auto',
            color: '#333333',
            fontFamily: '"Open Sans", sans-serif',
          }}
        >
          <Routes>
            <Route path="/functional" element={
              <MindmapBase
                paradigmName="Functional"
                elements={functionalElements}
                cyBaseStyles={functionalCombinedStyles}
                containerStyle={containerStyle}
              />
            } />
            <Route path="/" element={<h2>Welcome to JavaScript Paradigms</h2>} />
            <Route path="/about" element={<h2>About JavaScript Paradigms</h2>} />
            <Route path="/declarative" element={
              <MindmapBase
                paradigmName="Declarative"
                elements={declarativeElements}
                cyBaseStyles={declarativeCombinedStyles}
                containerStyle={containerStyle}
              />
            } />
            <Route path="/oop" element={
              <MindmapBase
                paradigmName="Object-Oriented"
                elements={oopElements}
                cyBaseStyles={oopCombinedStyles}
                containerStyle={containerStyle}
              />
            } />
            <Route path="/procedural" element={
              <MindmapBase
                paradigmName="Procedural"
                elements={proceduralElements}
                cyBaseStyles={proceduralCombinedStyles}
                containerStyle={containerStyle}
              />
            } />
            <Route path="/imperative" element={
              <MindmapBase
                paradigmName="Imperative"
                elements={imperativeElements}
                cyBaseStyles={imperativeCombinedStyles}
                containerStyle={containerStyle}
              />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

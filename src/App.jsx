import $ from 'jquery'
window.jQuery = $
window.$ = $
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import cytoscape from 'cytoscape'
import * as cytoscapeQtip from 'cytoscape-qtip'
import 'qtip2/dist/jquery.qtip.css'
import 'qtip2'
import MindmapBase from './mindmaps/MindmapBase'
import Navbar from './components/Navbar'
import cyBaseStyles from './mindmaps/shared/cyBaseStyles'
import containerStyle from './mindmaps/shared/containerStyles'
import functionalElements from './mindmaps/functional/functionalElements'
import functionalStyles from './mindmaps/functional/functionalStyles'

cytoscapeQtip(cytoscape)

function App() {
  const combinedStyles = [...cyBaseStyles, ...functionalStyles]

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
              <>
                <MindmapBase
                  elements={functionalElements}
                  cyBaseStyles={combinedStyles}
                  containerStyle={containerStyle}
                />
              </>
            } />
            <Route path="/" element={<h2>Welcome to JavaScript Paradigms</h2>} />
            <Route path="/about" element={<h2>About JavaScript Paradigms</h2>} />
            <Route path="/declarative" element={<h2>Declarative Programming</h2>} />
            <Route path="/oop" element={<h2>Object-Oriented Programming</h2>} />
            <Route path="/procedural" element={<h2>Procedural Programming</h2>} />
            <Route path="/imperative" element={<h2>Imperative Programming</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

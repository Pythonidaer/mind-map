import React from 'react'
import MindmapBase from './mindmaps/MindmapBase'
import cyBaseStyles from './mindmaps/shared/cyBaseStyles'
import containerStyle from './mindmaps/shared/containerStyles'
import functionalElements from './mindmaps/functional/functionalElements'
import functionalStyles from './mindmaps/functional/functionalStyles'

function FunctionalMindMapPage() {
  const combinedStyles = [...cyBaseStyles, ...functionalStyles]

  return (
    <div
      style={{
        height: '90vh',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        color: '#333333',
        fontFamily: '"Open Sans", sans-serif',
      }}
    >
      <h2>Functional Programming Mind Map</h2>
      <MindmapBase
        elements={functionalElements}
        cyBaseStyles={combinedStyles}
        containerStyle={containerStyle}
      />
    </div>
  )
}

export default FunctionalMindMapPage
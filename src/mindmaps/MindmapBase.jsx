// src/mindmaps/MindmapBase.jsx
import $ from 'jquery'
window.jQuery = $
window.$ = $
import React, { useEffect, useRef } from 'react'
import cytoscape from 'cytoscape'
import 'qtip2/dist/jquery.qtip.css'
import 'qtip2'

function MindmapBase({ elements, cyBaseStyles, containerStyle, onCytoscapeInit, paradigmName }) {
  const cyRef = useRef(null);

  useEffect(() => {
    const initCytoscape = async () => {
      const container = cyRef.current;
      if (!container) {
        console.error('Cytoscape container not found.');
        return;
      }

      // Import and register qtip
      const cytoscapeQtip = await import('cytoscape-qtip');
      cytoscapeQtip.default(cytoscape);

      const cy = cytoscape({
        container,
        elements,
        style: cyBaseStyles,
        layout: {
          name: 'cose',
          directed: true,
          padding: 30,
          spacingFactor: 1.3,
          animate: false,
        },
        boxSelectionEnabled: false,
        autounselectify: true,
        headless: false,
      });

      cy.ready(() => {
        if (!cy.renderer()) {
          console.error('Renderer not available; possibly headless mode.');
          return;
        }
        // Attach qTip tooltips
        cy.nodes().forEach((node) => {
          node.qtip({
            content: node.data('definition'),
            position: { my: 'top center', at: 'bottom center' },
            style: {
              classes: 'qtip-bootstrap',
              tip: { width: 16, height: 8 },
              'font-size': '16px',
              'max-width': '300px',
            },
            show: { event: 'mouseover' },
            hide: { event: 'mouseout' },
          });
        });

        // Optional callback to let the parent know cytoscape is ready
        if (onCytoscapeInit) {
          onCytoscapeInit(cy);
        }
      });

      return () => {
        // Cleanup
        cy.nodes().forEach((node) => {
          try {
            node.qtip('destroy');
          } catch (err) {
            console.warn('Error destroying qTip:', err);
          }
        });
        cy.destroy();
      };
    };

    initCytoscape();
  }, [elements, cyBaseStyles, onCytoscapeInit]);

  return (
    <div style={{ marginTop: '64px', paddingBottom: '60px' }}>
      <h2>{paradigmName} Programming Mind Map</h2>
      <div ref={cyRef} className="mindmap-base" style={{ ...containerStyle}} />
    </div>
  );
}

export default MindmapBase;

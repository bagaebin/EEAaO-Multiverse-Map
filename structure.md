# Architecture Overview

## Application Composition
- **Static single-page app**: `index.html` loads the visualization shell, links the stylesheet, and imports D3.js v7 from a CDN before bootstrapping `script.js` for behavior. 【F:index.html†L1-L57】
- **Dual-SVG layout**: the page defines a full-screen background `<svg>` for ambient network lines and a foreground `<svg>` inside the circular `.scene-container` that users interact with. The foreground also declares shared SVG filters used for glow effects. 【F:index.html†L10-L25】
- **Modal assets**: a hidden `.popup` container hosts images associated with each node and is toggled by script-driven events. 【F:index.html†L52-L55】

## Data & Force Simulation Flow
- **Universe graph model**: `script.js` declares parallel `nodes` and `links` arrays describing personas and their multiversal relationships. Each node references an image under `images/`. 【F:script.js†L1-L15】
- **D3 force layout**: a `d3.forceSimulation` orchestrates `forceLink`, `forceManyBody`, `forceCenter`, and `forceRadial` behaviors to position nodes in a radial radar footprint while maintaining the network topology. 【F:script.js†L24-L45】【F:script.js†L193-L197】
- **Layered rendering**: background and foreground SVG groups mirror the same data. Background elements give a soft ambient network, while the lens layer adds interactive circles and labels. 【F:script.js†L48-L87】
- **Interactive drag**: a reusable `drag` helper wires D3 drag events so users can reposition nodes; physics settles positions after the drag ends. 【F:script.js†L116-L138】
- **Popup workflow**: clicking a node invokes `showPopup`, swapping the popup image source and revealing the modal; `hidePopup` and the `Escape` key dismiss it. 【F:script.js†L141-L155】

## Responsive Behavior & Layout
- **Radar synchronization**: `syncRadarToContainer` recalculates SVG viewboxes, radial forces, and pulse ring sizing whenever the window resizes, seeding nodes within the radar on first load. 【F:script.js†L162-L214】
- **Viewport listeners**: the script listens for `resize` and initializes the sync routine immediately, guaranteeing the force layout fits the current viewport. 【F:script.js†L227-L229】
- **Styling system**: `style.css` defines theme variables, neon HUD styling (currently commented in HTML), the circular radar container, pulsating rings, and popup presentation. Layers rely on mix-blend modes and gradients to achieve the sci-fi aesthetic. 【F:style.css†L1-L157】【F:style.css†L176-L237】

# Technology Notes

## Core Stack
- **HTML5 + vanilla JavaScript**: The experience is delivered as a standalone static page with inline DOM elements defined in `index.html` and behavior wired through `script.js`. No framework or bundler is used. 【F:index.html†L1-L57】【F:script.js†L1-L229】
- **CSS3 styling**: A single stylesheet governs theming, layout, and animation via custom properties, gradients, and keyframes. 【F:style.css†L1-L237】

## External Libraries & Assets
- **D3.js v7**: Pulled directly from the official CDN to power the force-directed graph simulation, drag interactions, and selections. 【F:index.html†L6-L7】【F:script.js†L32-L138】
- **Google Fonts (Orbitron)**: Imported at runtime to reinforce the sci-fi interface aesthetic. 【F:style.css†L1-L4】
- **Image assets**: Each node references an image under `images/`, so the runtime requires corresponding files to exist and be reachable relative to the HTML root. 【F:script.js†L1-L7】

## Patterns & Practices
- **Data-driven rendering**: Nodes and links are defined as JavaScript data structures, then bound to SVG elements through D3’s `data` join pattern to keep DOM in sync with simulation updates. 【F:script.js†L32-L113】
- **Force simulation composition**: Multiple D3 forces are combined—including radial centering—to constrain layout within a circular radar, giving deterministic structure to an otherwise organic graph. 【F:script.js†L32-L45】【F:script.js†L193-L197】
- **Responsive recalibration**: Window resize events trigger recomputation of viewboxes, force centers, and decorative ring sizing so the visualization scales with viewport changes. 【F:script.js†L162-L214】【F:script.js†L227-L229】
- **Progressive HUD**: Additional HUD markup and styling exist but remain commented out until the interactive game system is enabled, signalling planned extensibility. 【F:index.html†L28-L50】【F:style.css†L60-L123】

## Operational Considerations
- **Static hosting**: Because assets are fully static, the project can be hosted from any static file server or CDN without build steps. 【F:index.html†L1-L57】【F:script.js†L1-L229】
- **Viewport-bound simulation**: The force layout depends on browser APIs like `getBoundingClientRect` and `window.innerWidth`, making the experience inherently browser-based and sensitive to rendering container dimensions. 【F:script.js†L165-L185】
- **Modal accessibility**: Popups are dismissed via both UI controls and keyboard escape handling, but there are no ARIA attributes or focus management yet—important for future accessibility work. 【F:script.js†L141-L155】【F:index.html†L52-L55】

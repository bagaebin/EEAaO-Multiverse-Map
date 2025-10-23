# Product Brief

## Concept & Audience
- **Experience goal**: Present a stylized multiverse radar inspired by *Everything Everywhere All at Once*, letting fans explore Evelyn’s alternate personas through an interactive network. 【F:index.html†L5-L25】【F:script.js†L1-L7】
- **Target users**: Viewers familiar with the film who want a visual companion piece or exploratory artifact that highlights improbable life paths.

## Current Feature Set
- **Multiverse map**: A force-directed node graph displays five personas (“Cook”, “Kung-Fu”, “Actor”, “Mom”, “Singer”) and their cross-universe connections. Nodes radiate within a circular radar while ambient links fill the background. 【F:script.js†L1-L87】
- **Interactive exploration**: Users can drag personas to inspect relationships without breaking the layout, thanks to the live D3 simulation. 【F:script.js†L90-L138】
- **Character spotlights**: Selecting a node opens a modal image viewer that surfaces artwork or stills for that persona; users close it via the ✕ icon or the Escape key. 【F:index.html†L52-L55】【F:script.js†L141-L155】
- **Immersive styling**: Pulse rings, neon accents, and optional HUD chrome (currently disabled) reinforce the sci-fi monitoring metaphor. 【F:index.html†L23-L50】【F:style.css†L60-L205】

## User Workflow
1. **Launch** the page to see the animated radar with ambient network lines already running. 【F:index.html†L10-L25】【F:style.css†L20-L57】
2. **Explore** by dragging personas around the radar; the simulation stabilizes them while preserving connections. 【F:script.js†L90-L138】
3. **Inspect** a persona by clicking its node to open the modal, then dismiss via the close control or Escape key to continue exploring. 【F:index.html†L52-L55】【F:script.js†L141-L155】
4. **Resize** the window if desired—the radar automatically rescales to keep the experience centered. 【F:script.js†L162-L229】

## Known Gaps & Opportunities
- Several node image paths still include placeholder notes (e.g., `002(need edited).png`), signalling art assets that require finalization before launch. 【F:script.js†L2-L7】
- HUD overlays are commented out, offering room to add game-like objectives or probabilities once mechanics are defined. 【F:index.html†L28-L50】
- Accessibility enhancements—focus trapping, descriptive alt text, and keyboard navigation—remain to be implemented for broader usability. 【F:index.html†L54-L55】【F:script.js†L141-L155】

const NODE_LIBRARY = new Map([
  [
    "Young Evelyn",
    {
      id: "Young Evelyn",
      label: "Young Evelyn",
      video: { src: "videos/01_Young Evelyn.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [0.8, 1.6],
          rect: { x: 0.42, y: 0.32, w: 0.22, h: 0.3 },
          target: "Bagle",
        },
        {
          timeRange: [3.2, 3.8],
          rect: { x: 0.18, y: 0.4, w: 0.2, h: 0.28 },
          target: "IRS Office",
        },
      ],
    },
  ],
  [
    "Bagle",
    {
      id: "Bagle",
      label: "Bagle",
      video: { src: "videos/02_Bagle.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.0, 2.6],
          rect: { x: 0.35, y: 0.28, w: 0.28, h: 0.32 },
          target: "Everything Cultist",
        },
      ],
    },
  ],
  [
    "Actor",
    {
      id: "Actor",
      label: "Actor",
      video: { src: "videos/03_Actor.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [1.5, 2.2],
          rect: { x: 0.5, y: 0.3, w: 0.22, h: 0.3 },
          target: "Singer",
        },
      ],
    },
  ],
  [
    "IRS Office",
    {
      id: "IRS Office",
      label: "IRS Office",
      video: { src: "videos/04_IRS Office.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.6, 3.2],
          rect: { x: 0.55, y: 0.42, w: 0.22, h: 0.24 },
          target: "Sign Spinner",
        },
      ],
    },
  ],
  [
    "Singer",
    {
      id: "Singer",
      label: "Singer",
      video: { src: "videos/05_Singer.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.1, 2.7],
          rect: { x: 0.32, y: 0.26, w: 0.28, h: 0.34 },
          target: "Young Evelyn",
        },
      ],
    },
  ],
  [
    "Sign Spinner",
    {
      id: "Sign Spinner",
      label: "Sign Spinner",
      video: { src: "videos/07_Sign Spinner.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [1.0, 1.6],
          rect: { x: 0.4, y: 0.35, w: 0.24, h: 0.3 },
          target: "Young Evelyn",
        },
      ],
    },
  ],
  [
    "Everything Cultist",
    {
      id: "Everything Cultist",
      label: "Everything Cultist",
      video: { src: "videos/02_Bagle.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "Ambient Echo",
    {
      id: "Ambient Echo",
      label: "Ambient Echo",
      decorative: true,
      appearance: { opacity: 0.28 },
    },
  ],
  [
    "Prismatic Drift",
    {
      id: "Prismatic Drift",
      label: "Prismatic Drift",
      decorative: true,
      appearance: { opacity: 0.34 },
    },
  ],
  [
    "Signal Ghost",
    {
      id: "Signal Ghost",
      label: "Signal Ghost",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
]);

const INITIAL_NODE_IDS = [
  "Young Evelyn",
  "Bagle",
  "Actor",
  "IRS Office",
  "Singer",
  "Sign Spinner",
  "Ambient Echo",
  "Prismatic Drift",
  "Signal Ghost",
];

function cloneNodeConfig(config = {}) {
  return {
    id: config.id,
    label: config.label ?? config.id,
    decorative: Boolean(config.decorative),
    img: config.img ?? null,
    video: config.video ? { ...config.video } : null,
    hotspots: Array.isArray(config.hotspots)
      ? config.hotspots.map(h => ({
          timeRange: Array.isArray(h.timeRange) ? [...h.timeRange] : [],
          rect: h.rect ? { ...h.rect } : { x: 0, y: 0, w: 0, h: 0 },
          target: h.target,
        }))
      : [],
    appearance: config.appearance ? { ...config.appearance } : undefined,
  };
}

const nodes = INITIAL_NODE_IDS.map(id =>
  cloneNodeConfig(NODE_LIBRARY.get(id) ?? { id })
);

const links = [
  { source: "Young Evelyn", target: "Bagle" },
  { source: "Young Evelyn", target: "IRS Office" },
  { source: "Young Evelyn", target: "Actor" },
  { source: "Bagle", target: "Sign Spinner" },
  { source: "Actor", target: "Singer" },
  { source: "IRS Office", target: "Singer" },
  { source: "Ambient Echo", target: "Young Evelyn" },
  { source: "Prismatic Drift", target: "Singer" },
  { source: "Signal Ghost", target: "Bagle" },
];

const sceneContainer = document.querySelector(".scene-container");
const lensSvg = d3.select(".scene-container svg");
const backgroundSvg = d3.select(".background-network");
const pulseRings = Array.from(document.querySelectorAll(".pulse-ring"));
const PULSE_RING_DEFAULT_SCALES = [0.6, 0.75, 0.9];

let width = 800;
let height = 800;
let hasSeededNodes = false;
const RADIAL_PADDING = 40;
const MIN_RADIAL_RADIUS = 120;

backgroundSvg.attr("preserveAspectRatio", "xMidYMid meet");

const backgroundLinkGroup = backgroundSvg
  .append("g")
  .attr("class", "background-links")
  .attr("stroke-linecap", "round");
let backgroundLink = backgroundLinkGroup.selectAll("line");

const backgroundNodeGroup = backgroundSvg
  .append("g")
  .attr("class", "background-nodes");
let backgroundNode = backgroundNodeGroup.selectAll("circle");

const linkGroup = lensSvg
  .append("g")
  .attr("class", "lens-links")
  .attr("stroke-linecap", "round");
let link = linkGroup.selectAll("line");

const nodeGroup = lensSvg.append("g");
let node = nodeGroup.selectAll("circle");

const labelGroup = lensSvg.append("g");
let label = labelGroup.selectAll("text");

const simulation = d3
  .forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(160).strength(0.3))
  .force("charge", d3.forceManyBody().strength(-220))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force(
    "radial",
    d3
      .forceRadial(
        Math.max(MIN_RADIAL_RADIUS, Math.min(width, height) / 2 - RADIAL_PADDING),
        width / 2,
        height / 2
      )
      .strength(0.08)
  );

function getNodeId(nodeRef) {
  return typeof nodeRef === "object" ? nodeRef.id : nodeRef;
}

function linkKey(d) {
  return `${getNodeId(d.source)}→${getNodeId(d.target)}`;
}

function refreshGraph() {
  backgroundLink = backgroundLinkGroup
    .selectAll("line")
    .data(links, linkKey)
    .join("line")
    .attr("class", "link--background");

  backgroundNode = backgroundNodeGroup
    .selectAll("circle")
    .data(nodes, d => d.id)
    .join("circle")
    .attr("class", d =>
      d.decorative ? "node--background node--decorative" : "node--background"
    )
    .attr("r", d => (d.decorative ? 2.4 : 3))
    .style("opacity", d => {
      if (!d.decorative) return null;
      const baseOpacity = d.appearance?.opacity ?? 0.3;
      return Math.max(0, Math.min(1, baseOpacity * 0.85));
    });

  link = linkGroup
    .selectAll("line")
    .data(links, linkKey)
    .join("line")
    .attr("class", "link");

  node = nodeGroup
    .selectAll("circle")
    .data(nodes, d => d.id)
    .join("circle")
    .attr("class", d => (d.decorative ? "node node--decorative" : "node"))
    .attr("r", d => (d.decorative ? 4.5 : 6))
    .attr("aria-hidden", d => (d.decorative ? "true" : null))
    .style("opacity", d => {
      if (!d.decorative) return null;
      const baseOpacity = d.appearance?.opacity ?? 0.3;
      return Math.max(0, Math.min(1, baseOpacity));
    })
    .style("filter", d => (d.decorative ? "none" : null))
    .style("cursor", d => (d.decorative ? "default" : null))
    .style("pointer-events", d => (d.decorative ? "none" : "auto"))
    .on("click", (event, d) => {
      if (d.decorative) return;
      event.stopPropagation();
      showPopupForNode(d);
    })
    .call(drag(simulation));

  label = labelGroup
    .selectAll("text")
    .data(nodes, d => d.id)
    .join("text")
    .attr("class", d => (d.decorative ? "label label--decorative" : "label"))
    .text(d => (d.decorative ? "" : d.label ?? d.id));

  simulation.nodes(nodes);
  simulation.force("link").links(links);
  simulation.alpha(0.7).restart();
}

function ticked() {
  backgroundLink
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  backgroundNode
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  label
    .attr("x", d => d.x + 12)
    .attr("y", d => d.y + 4);
}

function drag(simulation) {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}

const popup = document.getElementById("popup");
const popupVideo = document.getElementById("popupVideo");
const popupImg = document.getElementById("popupImg");
const popupFallback = document.getElementById("popupFallback");
const hotspotLayer = document.getElementById("hotspotLayer");
const scrollGhost = document.getElementById("scrollGhost");

let activeNode = null;
let scrollHandler = null;
let metadataHandler = null;
let inspectorOn = false;
let dragStart = null;
let draftBox = null;
let scrollRestoration = 0;
let lastWinH = window.innerHeight;
const frameStep = 0.04;

function resetMediaState() {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;
  }
  if (metadataHandler) {
    popupVideo.removeEventListener("loadedmetadata", metadataHandler);
    metadataHandler = null;
  }
  popupVideo.pause();
  popupVideo.removeAttribute("src");
  popupVideo.load();
  popupVideo.style.display = "none";
  popupImg.style.display = "none";
  popupFallback.style.display = "none";
  popupFallback.textContent = "";
  if (hotspotLayer) {
    hotspotLayer.innerHTML = "";
    hotspotLayer.style.pointerEvents = inspectorOn ? "auto" : "none";
    hotspotLayer.classList.toggle("inspector-active", inspectorOn);
  }
  scrollGhost.style.height = "0px";
}

function getVideoDuration(node, vid) {
  const declared = node?.video?.duration;
  if (Number.isFinite(declared)) return declared;
  const meta = vid?.duration;
  return Number.isFinite(meta) ? meta : 5;
}

function showPopupForNode(nodeData) {
  if (!nodeData) return;
  if (nodeData.decorative) return;

  scrollRestoration = window.scrollY || document.documentElement.scrollTop || 0;
  resetMediaState();

  activeNode = nodeData;
  popup.classList.add("open");
  popup.setAttribute("aria-hidden", "false");

  if (nodeData.video && nodeData.video.src) {
    const ghostHeight = Math.max(window.innerHeight * 2, 1600);
    scrollGhost.style.height = `${ghostHeight}px`;
    window.scrollTo({ top: 0 });

    hotspotLayer.style.display = "block";
    hotspotLayer.style.pointerEvents = inspectorOn ? "auto" : "none";

    const onLoadedMetadata = () => {
      popupVideo.currentTime = 0;
      updateHotspotsVisibility(nodeData, popupVideo);
    };
    metadataHandler = onLoadedMetadata;
    popupVideo.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });

    popupVideo.src = nodeData.video.src;
    popupVideo.style.display = "block";
    popupVideo.pause();

    let tickingScroll = false;
    const onScroll = () => {
      if (!popup.classList.contains("open")) return;
      if (tickingScroll) return;
      tickingScroll = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const maxScroll = Math.max(1, doc.scrollHeight - lastWinH);
        const scrollTop = window.scrollY || doc.scrollTop || 0;
        const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
        const duration = getVideoDuration(nodeData, popupVideo);
        const safeDuration = Math.max(duration, 0);
        const targetTime =
          safeDuration > 0
            ? Math.min(progress * safeDuration, Math.max(safeDuration - 0.001, 0))
            : 0;
        if (!Number.isNaN(targetTime)) {
          popupVideo.currentTime = targetTime;
        }
        updateHotspotsVisibility(nodeData, popupVideo);
        tickingScroll = false;
      });
    };

    scrollHandler = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(onScroll);
  } else if (nodeData.img) {
    popupImg.src = nodeData.img;
    popupImg.style.display = "block";
    hotspotLayer.style.display = inspectorOn ? "block" : "none";
    hotspotLayer.style.pointerEvents = inspectorOn ? "auto" : "none";
  } else {
    popupFallback.textContent = "아직 연결된 미디어가 없습니다.";
    popupFallback.style.display = "flex";
    hotspotLayer.style.display = inspectorOn ? "block" : "none";
    hotspotLayer.style.pointerEvents = inspectorOn ? "auto" : "none";
  }
}

function hidePopup() {
  if (!popup.classList.contains("open")) return;
  resetMediaState();
  popup.classList.remove("open");
  popup.setAttribute("aria-hidden", "true");
  if (typeof scrollRestoration === "number") {
    window.scrollTo({ top: scrollRestoration });
  }
  scrollRestoration = 0;
  activeNode = null;
}

function updateHotspotsVisibility(nodeData, vid) {
  if (!hotspotLayer || !nodeData) return;
  hotspotLayer.innerHTML = "";

  const hasHotspots = Array.isArray(nodeData.hotspots) && nodeData.hotspots.length > 0;
  const shouldShowLayer = inspectorOn || hasHotspots;
  hotspotLayer.style.display = shouldShowLayer ? "block" : "none";
  hotspotLayer.classList.toggle("inspector-active", inspectorOn);

  if (!hasHotspots || !vid) {
    hotspotLayer.style.pointerEvents = inspectorOn ? "auto" : "none";
    return;
  }

  const rect = hotspotLayer.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    hotspotLayer.style.pointerEvents = inspectorOn ? "auto" : "none";
    return;
  }

  const currentTime = vid.currentTime ?? 0;
  let visibleCount = 0;

  nodeData.hotspots.forEach(h => {
    const [start, end] = h.timeRange ?? [];
    if (typeof start !== "number" || typeof end !== "number") return;
    if (currentTime < start || currentTime > end) return;

    const { x = 0, y = 0, w = 0, h: rectHeight = 0 } = h.rect ?? {};
    const hotspot = document.createElement("div");
    hotspot.className = "hotspot";
    hotspot.style.left = `${rect.width * x}px`;
    hotspot.style.top = `${rect.height * y}px`;
    hotspot.style.width = `${rect.width * w}px`;
    hotspot.style.height = `${rect.height * rectHeight}px`;
    hotspot.classList.toggle("hotspot--debug", inspectorOn);
    hotspot.addEventListener("click", event => {
      event.stopPropagation();
      openInteractiveNode(h.target);
    });
    hotspotLayer.appendChild(hotspot);
    visibleCount += 1;
  });

  hotspotLayer.style.pointerEvents =
    inspectorOn || visibleCount > 0 ? "auto" : "none";

  if (inspectorOn) {
    Array.from(hotspotLayer.children).forEach(child =>
      child.classList.add("hotspot--debug")
    );
  }
}

function toggleInspector(force) {
  inspectorOn = force ?? !inspectorOn;
  console.log(`[Inspector] ${inspectorOn ? "ON" : "OFF"}`);
  hotspotLayer.classList.toggle("inspector-active", inspectorOn);
  if (!inspectorOn && draftBox) {
    draftBox.remove();
    draftBox = null;
    dragStart = null;
  }
  if (activeNode && popupVideo.style.display === "block") {
    updateHotspotsVisibility(activeNode, popupVideo);
  } else {
    hotspotLayer.style.display = inspectorOn ? "block" : "none";
    hotspotLayer.style.pointerEvents = inspectorOn ? "auto" : "none";
  }
}

function nudgeVideo(delta) {
  if (!activeNode || popupVideo.style.display === "none") return;
  const duration = getVideoDuration(activeNode, popupVideo);
  if (!duration || Number.isNaN(duration)) return;
  const current = popupVideo.currentTime ?? 0;
  const next = Math.max(
    0,
    Math.min(current + delta, Math.max(duration - 0.001, 0))
  );
  popupVideo.currentTime = next;
  syncScrollToVideo(next, duration);
  updateHotspotsVisibility(activeNode, popupVideo);
}

function syncScrollToVideo(time, duration) {
  const doc = document.documentElement;
  const maxScroll = Math.max(1, doc.scrollHeight - lastWinH);
  const ratio = duration > 0 ? time / duration : 0;
  const targetScroll = ratio * maxScroll;
  window.scrollTo({ top: targetScroll });
}

function ensureNode(targetId) {
  if (!targetId) return null;
  let target = nodes.find(n => n.id === targetId);
  if (target) return target;
  const blueprint = NODE_LIBRARY.get(targetId);
  target = cloneNodeConfig(blueprint ?? { id: targetId });
  nodes.push(target);
  return target;
}

function ensureLinkBetween(sourceId, targetId) {
  if (!sourceId || !targetId) return;
  const exists = links.some(
    l => getNodeId(l.source) === sourceId && getNodeId(l.target) === targetId
  );
  if (!exists) {
    links.push({ source: sourceId, target: targetId });
  }
}

function openInteractiveNode(targetId) {
  const target = ensureNode(targetId);
  if (!target) return;
  if (activeNode) {
    ensureLinkBetween(activeNode.id, target.id);
  }
  refreshGraph();
  showPopupForNode(target);
}

if (hotspotLayer) {
  hotspotLayer.addEventListener("mousedown", event => {
    if (!inspectorOn || popupVideo.style.display === "none" || event.button !== 0) {
      return;
    }
    event.preventDefault();
    const rect = hotspotLayer.getBoundingClientRect();
    dragStart = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    draftBox = document.createElement("div");
    draftBox.className = "hotspot hotspot--debug hotspot--draft";
    Object.assign(draftBox.style, {
      left: `${dragStart.x}px`,
      top: `${dragStart.y}px`,
      width: "0px",
      height: "0px",
    });
    hotspotLayer.appendChild(draftBox);
  });
}

window.addEventListener("mousemove", event => {
  if (!inspectorOn || !dragStart || !draftBox) return;
  const rect = hotspotLayer.getBoundingClientRect();
  const currentX = event.clientX - rect.left;
  const currentY = event.clientY - rect.top;
  const startX = Math.min(dragStart.x, currentX);
  const startY = Math.min(dragStart.y, currentY);
  const width = Math.abs(currentX - dragStart.x);
  const height = Math.abs(currentY - dragStart.y);
  Object.assign(draftBox.style, {
    left: `${startX}px`,
    top: `${startY}px`,
    width: `${width}px`,
    height: `${height}px`,
  });
});

window.addEventListener("mouseup", event => {
  if (!inspectorOn || !dragStart || !draftBox) return;
  const rect = hotspotLayer.getBoundingClientRect();
  const endX = event.clientX - rect.left;
  const endY = event.clientY - rect.top;
  const startX = Math.min(dragStart.x, endX);
  const startY = Math.min(dragStart.y, endY);
  const width = Math.abs(endX - dragStart.x);
  const height = Math.abs(endY - dragStart.y);

  draftBox.remove();
  draftBox = null;

  if (!rect.width || !rect.height || width < 2 || height < 2) {
    dragStart = null;
    return;
  }

  const norm = {
    x: +(startX / rect.width).toFixed(4),
    y: +(startY / rect.height).toFixed(4),
    w: +(width / rect.width).toFixed(4),
    h: +(height / rect.height).toFixed(4),
  };
  const currentTime = +(popupVideo.currentTime ?? 0).toFixed(3);
  const duration = getVideoDuration(activeNode, popupVideo);
  const rangeStart = Math.max(0, currentTime - 0.1);
  const rangeEnd = Math.min(duration ?? currentTime + 0.1, currentTime + 0.1);
  const hotspot = {
    timeRange: [+(rangeStart.toFixed(3)), +(rangeEnd.toFixed(3))],
    rect: norm,
    target: "NewNode_ID",
  };
  const json = JSON.stringify(hotspot, null, 2);
  console.log("%c[Hotspot JSON]\n" + json, "color:#3ff2ff");
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(json).catch(() => {});
  }
  dragStart = null;
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hidePopup();
    return;
  }
  if (!popup.classList.contains("open")) return;
  if (event.key.toLowerCase() === "i") {
    event.preventDefault();
    toggleInspector();
  } else if (event.key === "[") {
    event.preventDefault();
    nudgeVideo(event.shiftKey ? -0.2 : -frameStep);
  } else if (event.key === "]") {
    event.preventDefault();
    nudgeVideo(event.shiftKey ? 0.2 : frameStep);
  }
});

function syncRadarToContainer() {
  if (!sceneContainer) return;

  const rect = sceneContainer.getBoundingClientRect();
  width = sceneContainer.clientWidth || rect.width;
  height = sceneContainer.clientHeight || rect.height;
  const radius = Math.max(
    MIN_RADIAL_RADIUS,
    Math.min(width, height) / 2 - RADIAL_PADDING
  );
  const centerX = width / 2;
  const centerY = height / 2;

  syncPulseRings(centerX, centerY);

  lensSvg
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", width)
    .attr("height", height);

  backgroundSvg
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight);

  if (!hasSeededNodes) {
    seedNodesRandomly(radius, centerX, centerY);
    hasSeededNodes = true;
    simulation.nodes(nodes);
  }

  simulation
    .force("center", d3.forceCenter(centerX, centerY))
    .force("radial", d3.forceRadial(radius, centerX, centerY).strength(0.08));

  simulation.alpha(0.2).restart();
}

function syncPulseRings(centerX, centerY) {
  const baseSize = Math.min(width, height);

  pulseRings.forEach((ring, index) => {
    const parsed = parseFloat(ring.dataset.scale);
    const fallback =
      PULSE_RING_DEFAULT_SCALES[index] ??
      PULSE_RING_DEFAULT_SCALES[PULSE_RING_DEFAULT_SCALES.length - 1];
    const scale = Number.isFinite(parsed) ? parsed : fallback;
    const diameter = baseSize * scale;

    ring.style.width = `${diameter}px`;
    ring.style.height = `${diameter}px`;
    ring.style.left = `${centerX}px`;
    ring.style.top = `${centerY}px`;
  });
}

function seedNodesRandomly(radius, centerX, centerY) {
  nodes.forEach(nodeItem => {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.sqrt(Math.random()) * radius;
    nodeItem.x = centerX + Math.cos(angle) * distance;
    nodeItem.y = centerY + Math.sin(angle) * distance;
  });
}

window.addEventListener("resize", () => {
  lastWinH = window.innerHeight;
  syncRadarToContainer();
  if (activeNode && popupVideo.style.display === "block") {
    requestAnimationFrame(() => updateHotspotsVisibility(activeNode, popupVideo));
  }
});

refreshGraph();
simulation.on("tick", ticked);
syncRadarToContainer();

window.hidePopup = hidePopup;

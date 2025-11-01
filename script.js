const NODE_LIBRARY = new Map([
  [
    "young evelyn",
    {
      id: "young evelyn",
      label: "young evelyn",
      video: { src: "videos/01_Young Evelyn.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [0.8, 1.6],
          rect: { x: 0.42, y: 0.32, w: 0.22, h: 0.3 },
          target: "bagle",
        },
        {
          timeRange: [0.903, 1.903],
          rect: { x: 0.3733, y: 0.7784, w: 0.0679, h: 0.1299 },
          target: "actor",
        },
        {
          timeRange: [1.806, 2.006],
          rect: { x: 0.0225, y: 0.3938, w: 0.1107, h: 0.2379 },
          target: "sign spinner",
        },
        {
          timeRange: [3.11, 4.31],
          rect: { x: 0.367, y: 0.3757, w: 0.0503, h: 0.0771 },
          target: "irs office",
        },
      ],
    },
  ],
  [
    "bagle",
    {
      id: "bagle",
      label: "bagle",
      video: { src: "videos/02_Bagle.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.957, 4.157],
          rect: { x: 0.3482, y: 0.3236, w: 0.0931, h: 0.1629 },
          target: "young evelyn",
        },
        {
          timeRange: [0.5, 1.5],
          rect: { x: 0.58, y: 0.26, w: 0.2, h: 0.32 },
          target: "actor",
        },
      ],
    },
  ],
  [
    "actor",
    {
      id: "actor",
      label: "actor",
      video: { src: "videos/03_Actor.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [1.5, 2.2],
          rect: { x: 0.5, y: 0.3, w: 0.22, h: 0.3 },
          target: "singer",
        },
        {
          timeRange: [2.286, 3.486],
          rect: { x: 0.45, y: 0.5709, w: 0.1434, h: 0.3656 },
          target: "bagle",
        },
        {
          timeRange: [3.8, 4.6],
          rect: { x: 0.14, y: 0.28, w: 0.16, h: 0.25 },
          target: "irs office",
        },
      ],
    },
  ],
  [
    "irs office",
    {
      id: "irs office",
      label: "irs office",
      video: { src: "videos/04_IRS Office.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.6, 3.2],
          rect: { x: 0.55, y: 0.42, w: 0.22, h: 0.24 },
          target: "sign spinner",
        },
        {
          timeRange: [2.186, 3.386],
          rect: { x: 0.8527, y: 0.5255, w: 0.0566, h: 0.1078 },
          target: "bagle",
        },
      ],
    },
  ],
  [
    "singer",
    {
      id: "singer",
      label: "singer",
      video: { src: "videos/05_Singer.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.1, 2.7],
          rect: { x: 0.32, y: 0.26, w: 0.28, h: 0.34 },
          target: "young evelyn",
        },
        {
          timeRange: [4.029, 5.229],
          rect: { x: 0.4312, y: 0.0073, w: 0.0717, h: 0.1188 },
          target: "bagle",
        },
      ],
    },
  ],
  [
    "pottery",
    {
      id: "pottery",
      label: "pottery",
      video: { src: "videos/06_pottery.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "sign spinner",
    {
      id: "sign spinner",
      label: "sign spinner",
      video: { src: "videos/07_Sign Spinner.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [1.0, 1.6],
          rect: { x: 0.4, y: 0.35, w: 0.24, h: 0.3 },
          target: "bagle",
        },
      ],
    },
  ],
  [
    "cat",
    {
      id: "cat",
      label: "cat",
      video: { src: "videos/08_cat.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "slaughterhouse",
    {
      id: "slaughterhouse",
      label: "slaughterhouse",
      video: { src: "videos/09_slaughterhouse.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "tinder",
    {
      id: "tinder",
      label: "tinder",
      video: { src: "videos/10_tinder.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "macho",
    {
      id: "macho",
      label: "macho",
      video: { src: "videos/11_macho.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "lab",
    {
      id: "lab",
      label: "lab",
      video: { src: "videos/12_lab.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "monster",
    {
      id: "monster",
      label: "monster",
      video: { src: "videos/13_monster.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "animation",
    {
      id: "animation",
      label: "animation",
      video: { src: "videos/14_animation.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "youtube",
    {
      id: "youtube",
      label: "youtube",
      video: { src: "videos/15_youtube.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "soldier",
    {
      id: "soldier",
      label: "soldier",
      video: { src: "videos/16_soldier.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "hotdog fingers",
    {
      id: "hotdog fingers",
      label: "hotdog fingers",
      video: { src: "videos/17_hotdog fingers.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "jail",
    {
      id: "jail",
      label: "jail",
      video: { src: "videos/18_jail.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "statue",
    {
      id: "statue",
      label: "statue",
      video: { src: "videos/19_statue.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "grape",
    {
      id: "grape",
      label: "grape",
      video: { src: "videos/20_grape.mp4", duration: 5 },
      hotspots: [],
    },
  ],
  [
    "Ghost 1",
    {
      id: "Ghost 1",
      label: "Ghost 1",
      decorative: true,
      appearance: { opacity: 0.28 },
    },
  ],
  [
    "Ghost 2",
    {
      id: "Ghost 2",
      label: "Ghost 2",
      decorative: true,
      appearance: { opacity: 0.34 },
    },
  ],
  [
    "Ghost 3",
    {
      id: "Ghost 3",
      label: "Ghost 3",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 4",
    {
      id: "Ghost 4",
      label: "Ghost 4",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 5",
    {
      id: "Ghost 5",
      label: "Ghost 5",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 6",
    {
      id: "Ghost 6",
      label: "Ghost 6",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 7",
    {
      id: "Ghost 7",
      label: "Ghost 7",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 8",
    {
      id: "Ghost 8",
      label: "Ghost 8",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 9",
    {
      id: "Ghost 9",
      label: "Ghost 9",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 10",
    {
      id: "Ghost 10",
      label: "Ghost 10",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 11",
    {
      id: "Ghost 11",
      label: "Ghost 11",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 12",
    {
      id: "Ghost 12",
      label: "Ghost 12",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 13",
    {
      id: "Ghost 13",
      label: "Ghost 13",
      decorative: true,
      appearance: { opacity: 0.26 },
    },
  ],
  [
    "Ghost 14",
    {
      id: "Ghost 14",
      label: "Ghost 14",
      decorative: true,
      appearance: { opacity: 0.28 },
    },
  ],
  [
    "Ghost 15",
    {
      id: "Ghost 15",
      label: "Ghost 15",
      decorative: true,
      appearance: { opacity: 0.24 },
    },
  ],
  [
    "Ghost 16",
    {
      id: "Ghost 16",
      label: "Ghost 16",
      decorative: true,
      appearance: { opacity: 0.32 },
    },
  ],
  [
    "Ghost 17",
    {
      id: "Ghost 17",
      label: "Ghost 17",
      decorative: true,
      appearance: { opacity: 0.27 },
    },
  ],
  [
    "Ghost 18",
    {
      id: "Ghost 18",
      label: "Ghost 18",
      decorative: true,
      appearance: { opacity: 0.29 },
    },
  ],
  [
    "Ghost 19",
    {
      id: "Ghost 19",
      label: "Ghost 19",
      decorative: true,
      appearance: { opacity: 0.25 },
    },
  ],
  [
    "Ghost 20",
    {
      id: "Ghost 20",
      label: "Ghost 20",
      decorative: true,
      appearance: { opacity: 0.31 },
    },
  ],
  [
    "Ghost 21",
    {
      id: "Ghost 21",
      label: "Ghost 21",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 22",
    {
      id: "Ghost 22",
      label: "Ghost 22",
      decorative: true,
      appearance: { opacity: 0.28 },
    },
  ],
  [
    "Ghost 23",
    {
      id: "Ghost 23",
      label: "Ghost 23",
      decorative: true,
      appearance: { opacity: 0.27 },
    },
  ],
  [
    "Ghost 24",
    {
      id: "Ghost 24",
      label: "Ghost 24",
      decorative: true,
      appearance: { opacity: 0.29 },
    },
  ],
  [
    "Ghost 25",
    {
      id: "Ghost 25",
      label: "Ghost 25",
      decorative: true,
      appearance: { opacity: 0.26 },
    },
  ],
  [
    "Ghost 26",
    {
      id: "Ghost 26",
      label: "Ghost 26",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 27",
    {
      id: "Ghost 27",
      label: "Ghost 27",
      decorative: true,
      appearance: { opacity: 0.27 },
    },
  ],
  [
    "Ghost 28",
    {
      id: "Ghost 28",
      label: "Ghost 28",
      decorative: true,
      appearance: { opacity: 0.24 },
    },
  ],
  [
    "Ghost 29",
    {
      id: "Ghost 29",
      label: "Ghost 29",
      decorative: true,
      appearance: { opacity: 0.25 },
    },
  ],
  [
    "Ghost 30",
    {
      id: "Ghost 30",
      label: "Ghost 30",
      decorative: true,
      appearance: { opacity: 0.3 },
    },
  ],
  [
    "Ghost 31",
    {
      id: "Ghost 31",
      label: "Ghost 31",
      decorative: true,
      appearance: { opacity: 0.28 },
    },
  ],
  [
    "Ghost 32",
    {
      id: "Ghost 32",
      label: "Ghost 32",
      decorative: true,
      appearance: { opacity: 0.26 },
    },
  ],
]);

const INITIAL_NODE_IDS = [
  "young evelyn",
  "bagle",
  "actor",
  "irs office",
  "singer",
  "pottery",
  "sign spinner",
  "cat",
  "slaughterhouse",
  "tinder",
  "macho",
  "lab",
  "monster",
  "animation",
  "youtube",
  "soldier",
  "hotdog fingers",
  "jail",
  "statue",
  "grape",
  "Ghost 1",
  "Ghost 2",
  "Ghost 3",
  "Ghost 4",
  "Ghost 5",
  "Ghost 6",
  "Ghost 7",
  "Ghost 8",
  "Ghost 9",
  "Ghost 10",
  "Ghost 11",
  "Ghost 12",
  "Ghost 13",
  "Ghost 14",
  "Ghost 15",
  "Ghost 16",
  "Ghost 17",
  "Ghost 18",
  "Ghost 19",
  "Ghost 20",
  "Ghost 21",
  "Ghost 22",
  "Ghost 23",
  "Ghost 24",
  "Ghost 25",
  "Ghost 26",
  "Ghost 27",
  "Ghost 28",
  "Ghost 29",
  "Ghost 30",
  "Ghost 31",
  "Ghost 32",
];

const CELEBRATION_VIDEO_SRC = "videos/I love you_speech.mp4";
const DONUT_ANIMATION_DURATION = 1000;
const HEART_ANIMATION_DURATION = 2000;
const DECORATIVE_CONNECTION_SPAN = 2;
const INACTIVITY_RESET_MS = 60 * 1000;
const INACTIVITY_CHECK_INTERVAL = 5000;

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

function createDecorativeLinkBlueprints(allNodes) {
  const decorativeIds = allNodes.filter(n => n.decorative).map(n => n.id);
  if (decorativeIds.length <= 1) return [];

  const maxStep = Math.min(
    Math.max(1, DECORATIVE_CONNECTION_SPAN),
    decorativeIds.length - 1
  );
  const dedupe = new Set();
  const result = [];

  decorativeIds.forEach((sourceId, index) => {
    for (let step = 1; step <= maxStep; step += 1) {
      const targetIndex = (index + step) % decorativeIds.length;
      const targetId = decorativeIds[targetIndex];
      if (!targetId || targetId === sourceId) continue;
      const key = index < targetIndex ? `${index}-${targetIndex}` : `${targetIndex}-${index}`;
      if (dedupe.has(key)) continue;
      dedupe.add(key);
      result.push({ source: sourceId, target: targetId });
    }
  });

  return result;
}

const nodes = INITIAL_NODE_IDS.map(id =>
  cloneNodeConfig(NODE_LIBRARY.get(id) ?? { id })
);

const baseDecorativeLinks = createDecorativeLinkBlueprints(nodes);
const links = baseDecorativeLinks.map(link => ({ ...link }));

const visitedInteractiveNodes = new Set();
let celebrationTriggered = false;
let celebrationAnimating = false;
let celebrationHoldingNodes = false;
let celebrationAnimationToken = 0;
let lastInteractionAt = performance.now();
let inactivityTimerId = null;

const sceneContainer = document.querySelector(".scene-container");
const lensSvg = d3.select(".scene-container svg");
const backgroundSvg = d3.select(".background-network");
const pulseRings = Array.from(document.querySelectorAll(".pulse-ring"));
const PULSE_RING_DEFAULT_SCALES = [0.6, 0.75, 0.9];
const BODY_LOCK_CLASS = "body-scroll-locked";
const SCROLL_GHOST_HEIGHT_VAR = "--scroll-ghost-height";
const VIRTUAL_SCROLL_MULTIPLIER = 1;
const TICK_AUDIO_SRC = "audios/tick.wav";
const TICK_VOLUME = 0.8;
const SCROLL_TICK_INTERVAL = 90;
const CLICK_TICK_INTERVAL = 60;
const SCROLL_DELTA_THRESHOLD = 2;

const celebrationOverlay = document.getElementById("celebration");
const celebrationVideo = document.getElementById("celebrationVideo");
const celebrationCloseBtn = document.getElementById("celebrationClose");
const celebrationDismissBtn = document.getElementById("celebrationDismiss");
const celebrationReplayBtn = document.getElementById("celebrationReplay");
const loadingOverlay = document.getElementById("loadingOverlay");
const loadingStatus = document.getElementById("loadingStatus");
const loadingBar = document.getElementById("loadingBar");
const loadingProgress = document.getElementById("loadingProgress");

let width = 800;
let height = 800;
let hasSeededNodes = false;
let sceneContainerLocked = false;
const RADIAL_PADDING = 40;
const MIN_RADIAL_RADIUS = 120;
let audioContext = null;
let tickBuffer = null;
let tickBufferPromise = null;
const tickThrottleMap = new Map();
const mediaPreloadCache = new Map();

backgroundSvg.attr("preserveAspectRatio", "xMidYMid meet");

const backgroundViewport = backgroundSvg.append("g").attr("class", "background-viewport");

const backgroundLinkGroup = backgroundViewport
  .append("g")
  .attr("class", "background-links")
  .attr("stroke-linecap", "round");
let backgroundLink = backgroundLinkGroup.selectAll("line");

const backgroundNodeGroup = backgroundViewport
  .append("g")
  .attr("class", "background-nodes");
let backgroundNode = backgroundNodeGroup.selectAll("circle");

const lensViewport = lensSvg.append("g").attr("class", "lens-viewport");

const linkGroup = lensViewport
  .append("g")
  .attr("class", "lens-links")
  .attr("stroke-linecap", "round");
let link = linkGroup.selectAll("line");

const nodeGroup = lensViewport.append("g");
let node = nodeGroup.selectAll("circle");

const labelGroup = lensViewport.append("g");
let label = labelGroup.selectAll("text");

let currentZoomTransform = d3.zoomIdentity;

const zoomBehavior = d3
  .zoom()
  .scaleExtent([0.6, 3])
  .on("zoom", event => {
    currentZoomTransform = event.transform;
    lensViewport.attr("transform", currentZoomTransform);
    backgroundViewport.attr("transform", currentZoomTransform);
  });

lensSvg.call(zoomBehavior);
backgroundSvg.call(zoomBehavior);

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

function lockSceneContainer() {
  if (!sceneContainer || sceneContainerLocked) return;
  sceneContainer.classList.add("scene-container--locked");
  if (document.body) {
    document.body.classList.add(BODY_LOCK_CLASS);
  }
  sceneContainerLocked = true;
}

function unlockSceneContainer() {
  if (!sceneContainer || !sceneContainerLocked) return;
  sceneContainer.classList.remove("scene-container--locked");
  if (document.body) {
    document.body.classList.remove(BODY_LOCK_CLASS);
  }
  sceneContainerLocked = false;
}

function enableScrollPlayback(ghostHeight) {
  virtualScrollHeight = ghostHeight;
  virtualScrollMax = Math.max(1, virtualScrollHeight - lastWinH);
  virtualScrollPos = 0;
  scrollGhost.style.height = `${virtualScrollHeight}px`;
  scrollGhost.style.setProperty(SCROLL_GHOST_HEIGHT_VAR, `${virtualScrollHeight}px`);
  scrollGhost.classList.add("scroll-ghost--active");

  if (!wheelHandler) {
    wheelHandler = event => {
      if (!popup.classList.contains("open") || !activeNode) return;
      event.preventDefault();
      updateVirtualScroll(event.deltaY);
    };
    window.addEventListener("wheel", wheelHandler, { passive: false });
  }

  if (!touchStartHandler) {
    touchStartHandler = event => {
      if (event.touches?.length === 1) {
        lastTouchY = event.touches[0].clientY;
      }
    };
    window.addEventListener("touchstart", touchStartHandler, { passive: false });
  }

  if (!touchMoveHandler) {
    touchMoveHandler = event => {
      if (event.touches?.length !== 1 || lastTouchY == null) return;
      const currentY = event.touches[0].clientY;
      const delta = lastTouchY - currentY;
      if (delta !== 0) {
        event.preventDefault();
        updateVirtualScroll(delta);
      }
      lastTouchY = currentY;
    };
    window.addEventListener("touchmove", touchMoveHandler, { passive: false });
  }

  requestAnimationFrame(() => {
    virtualScrollPos = 0;
    applyVirtualScroll();
  });
}

function disableScrollPlayback() {
  if (wheelHandler) {
    window.removeEventListener("wheel", wheelHandler);
    wheelHandler = null;
  }
  if (touchStartHandler) {
    window.removeEventListener("touchstart", touchStartHandler);
    touchStartHandler = null;
  }
  if (touchMoveHandler) {
    window.removeEventListener("touchmove", touchMoveHandler);
    touchMoveHandler = null;
  }
  lastTouchY = null;
  virtualScrollPos = 0;
  virtualScrollMax = 0;
  virtualScrollHeight = 0;
  scrollGhost.classList.remove("scroll-ghost--active");
  scrollGhost.style.height = "0px";
  scrollGhost.style.removeProperty(SCROLL_GHOST_HEIGHT_VAR);
}

function updateVirtualScroll(delta) {
  if (!activeNode || !Number.isFinite(delta) || virtualScrollMax <= 0) return;
  const adjustedDelta = delta * VIRTUAL_SCROLL_MULTIPLIER;
  if (adjustedDelta === 0) return;
  const next = Math.max(
    0,
    Math.min(virtualScrollPos + adjustedDelta, virtualScrollMax)
  );
  if (Math.abs(next - virtualScrollPos) < 0.0001) return;
  virtualScrollPos = next;
  triggerScrollFeedback(adjustedDelta);
  applyVirtualScroll();
}

function applyVirtualScroll() {
  if (!activeNode) return;
  const duration = getVideoDuration(activeNode, popupVideo);
  const safeDuration = Math.max(duration, 0);
  const progress = virtualScrollMax > 0 ? virtualScrollPos / virtualScrollMax : 0;
  const targetTime =
    safeDuration > 0
      ? Math.min(progress * safeDuration, Math.max(safeDuration - 0.001, 0))
      : 0;
  if (!Number.isNaN(targetTime)) {
    popupVideo.currentTime = targetTime;
  }
  updateHotspotsVisibility(activeNode, popupVideo);
}

function refreshVirtualScrollBounds() {
  if (!activeNode || !popup.classList.contains("open")) return;
  if (!virtualScrollHeight) return;
  const ratio =
    virtualScrollMax > 0 ? Math.max(0, Math.min(virtualScrollPos / virtualScrollMax, 1)) : 0;
  virtualScrollHeight = Math.max(window.innerHeight * 2, 1600);
  virtualScrollMax = Math.max(1, virtualScrollHeight - lastWinH);
  virtualScrollPos = Math.min(ratio * virtualScrollMax, virtualScrollMax);
  scrollGhost.style.height = `${virtualScrollHeight}px`;
  scrollGhost.style.setProperty(SCROLL_GHOST_HEIGHT_VAR, `${virtualScrollHeight}px`);
  applyVirtualScroll();
}

function ensureAudioContext() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!audioContext) {
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }
  return audioContext;
}

function loadTickBuffer() {
  if (tickBuffer) return Promise.resolve(tickBuffer);
  if (tickBufferPromise) return tickBufferPromise;
  const ctx = ensureAudioContext();
  if (!ctx) return Promise.resolve(null);
  tickBufferPromise = fetch(TICK_AUDIO_SRC)
    .then(response => response.arrayBuffer())
    .then(data => ctx.decodeAudioData(data))
    .then(buffer => {
      tickBuffer = buffer;
      return tickBuffer;
    })
    .catch(error => {
      console.warn("[Audio] Failed to load tick sample:", error);
      return null;
    })
    .finally(() => {
      tickBufferPromise = null;
    });
  return tickBufferPromise;
}

function updateLoadingProgress(completed, total) {
  if (!loadingOverlay) return;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  if (loadingStatus) {
    loadingStatus.textContent = `멀티버스 초기화 중... ${percent}%`;
  }
  if (loadingBar) {
    loadingBar.style.width = `${percent}%`;
  }
  if (loadingProgress) {
    loadingProgress.setAttribute("aria-valuenow", String(percent));
  }
}

function hideLoadingOverlay() {
  if (!loadingOverlay) return;
  loadingOverlay.classList.add("loading-overlay--hidden");
  setTimeout(() => {
    loadingOverlay.remove();
  }, 600);
}

function preloadVideoSource(src) {
  if (!src) return Promise.resolve();
  if (mediaPreloadCache.has(src)) return mediaPreloadCache.get(src);

  const task = new Promise(resolve => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    let settled = false;

    const finalize = () => {
      if (settled) return;
      settled = true;
      video.removeAttribute("src");
      video.load();
      resolve(src);
    };

    const handleError = error => {
      if (settled) return;
      settled = true;
      console.warn(`[Media] Failed to preload ${src}`, error);
      video.removeAttribute("src");
      video.load();
      resolve(src);
    };

    video.addEventListener("canplaythrough", finalize, { once: true });
    video.addEventListener("loadeddata", finalize, { once: true });
    video.addEventListener("error", handleError, { once: true });
    video.src = src;
    video.load();
  });

  mediaPreloadCache.set(src, task);
  return task;
}

// Preload the entire media library up front so that runtime playback is stutter-free
// and compatible with the scroll-driven interaction model.
function preloadAllMediaSources() {
  const sources = new Set();
  nodes.forEach(nodeItem => {
    const src = nodeItem.video?.src;
    if (src) {
      sources.add(src);
    }
  });
  if (CELEBRATION_VIDEO_SRC) {
    sources.add(CELEBRATION_VIDEO_SRC);
  }

  const uniqueSources = Array.from(sources);
  const total = uniqueSources.length;
  if (!total) {
    updateLoadingProgress(0, 0);
    if (loadingStatus) {
      loadingStatus.textContent = "탑승 준비 완료";
    }
    if (loadingProgress) {
      loadingProgress.setAttribute("aria-valuenow", "100");
    }
    if (loadingBar) {
      loadingBar.style.width = "100%";
    }
    return Promise.resolve().then(() => {
      setTimeout(() => hideLoadingOverlay(), 250);
    });
  }

  let completed = 0;
  updateLoadingProgress(0, total);

  const tasks = uniqueSources.map(src =>
    preloadVideoSource(src)
      .catch(error => {
        console.warn(`[Media] Error during preload for ${src}`, error);
      })
      .finally(() => {
        completed += 1;
        updateLoadingProgress(completed, total);
      })
  );

  return Promise.all(tasks)
    .then(() => loadTickBuffer().catch(() => null))
    .then(() => {
      if (loadingStatus) {
        loadingStatus.textContent = "탑승 준비 완료";
      }
      if (loadingProgress) {
        loadingProgress.setAttribute("aria-valuenow", "100");
      }
      if (loadingBar) {
        loadingBar.style.width = "100%";
      }
      setTimeout(() => hideLoadingOverlay(), 250);
    });
}

function shouldThrottleTick(key, interval) {
  if (!interval) return false;
  const now = performance.now();
  const last = tickThrottleMap.get(key) ?? 0;
  if (now - last < interval) return true;
  tickThrottleMap.set(key, now);
  return false;
}

function markInteraction() {
  lastInteractionAt = performance.now();
}

function triggerVibration(duration = 10) {
  try {
    if (navigator?.vibrate) {
      navigator.vibrate(duration);
    }
  } catch {
    // ignore unsupported vibration errors
  }
}

function playTick({ playbackRate = 1, volume = TICK_VOLUME, throttleKey, throttleMs, skipIfLoading = false } = {}) {
  if (throttleKey && throttleMs && shouldThrottleTick(throttleKey, throttleMs)) {
    return;
  }
  const ctx = ensureAudioContext();
  if (!ctx) return;

  const emit = buffer => {
    if (!buffer) return;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = playbackRate;
    const gain = ctx.createGain();
    gain.gain.value = volume;
    source.connect(gain).connect(ctx.destination);
    source.start(0);
  };

  if (tickBuffer) {
    emit(tickBuffer);
    return;
  }
  if (skipIfLoading) return;
  loadTickBuffer().then(buffer => {
    if (buffer) {
      emit(buffer);
    }
  });
}

function triggerClickFeedback() {
  markInteraction();
  playTick({ playbackRate: 1, throttleKey: "click", throttleMs: CLICK_TICK_INTERVAL, skipIfLoading: false });
  triggerVibration(10);
}

function triggerScrollFeedback(delta) {
  markInteraction();
  if (!Number.isFinite(delta)) return;
  const magnitude = Math.abs(delta);
  if (magnitude < SCROLL_DELTA_THRESHOLD) return;
  const normalized = Math.min(1, magnitude / 180);
  const playbackRate = 0.8 + normalized * 0.5;
  playTick({
    playbackRate,
    throttleKey: "scroll",
    throttleMs: SCROLL_TICK_INTERVAL,
    skipIfLoading: false,
  });
  if (normalized > 0.45) {
    triggerVibration(8);
  }
}

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
    .attr("r", d => (d.decorative ? 4.8 : 6))
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
      triggerClickFeedback();
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
let metadataHandler = null;
let inspectorOn = false;
let dragStart = null;
let draftBox = null;
let scrollRestoration = 0;
let wheelHandler = null;
let touchStartHandler = null;
let touchMoveHandler = null;
let lastTouchY = null;
let virtualScrollPos = 0;
let virtualScrollMax = 0;
let virtualScrollHeight = 0;
let lastWinH = window.innerHeight;
const frameStep = 0.04;

function resetMediaState() {
  disableScrollPlayback();
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
  markInteraction();

  scrollRestoration = window.scrollY || document.documentElement.scrollTop || 0;
  resetMediaState();

  activeNode = nodeData;
  popup.classList.add("open");
  popup.setAttribute("aria-hidden", "false");
  lockSceneContainer();

  if (nodeData.video && nodeData.video.src) {
    const ghostHeight = Math.max(window.innerHeight * 2, 1600);
    enableScrollPlayback(ghostHeight);
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

  handleInteractiveNodeOpened(nodeData);
}

function hidePopup() {
  if (!popup.classList.contains("open")) return;
  resetMediaState();
  popup.classList.remove("open");
  popup.setAttribute("aria-hidden", "true");
  unlockSceneContainer();
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
      triggerClickFeedback();
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
  if (popup.classList.contains("open") && virtualScrollMax > 0) {
    const ratio = duration > 0 ? time / duration : 0;
    virtualScrollPos = Math.max(
      0,
      Math.min(ratio * virtualScrollMax, virtualScrollMax)
    );
    return;
  }
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

function restoreDecorativeLinks() {
  links.length = 0;
  baseDecorativeLinks.forEach(link => {
    links.push({ source: link.source, target: link.target });
  });
}

function resetProgressState() {
  if (popup.classList.contains("open")) {
    hidePopup();
  }
  if (isCelebrationOpen()) {
    closeCelebrationOverlay();
  } else {
    celebrationAnimationToken += 1;
    celebrationAnimating = false;
    celebrationHoldingNodes = false;
    releaseNodesAfterCelebration();
  }

  visitedInteractiveNodes.clear();
  celebrationTriggered = false;
  restoreDecorativeLinks();
  refreshGraph();
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("[Session] Progress state reset after inactivity.");
  }
  markInteraction();
}

function startInactivityWatcher() {
  if (inactivityTimerId) return;
  inactivityTimerId = setInterval(() => {
    const idleFor = performance.now() - lastInteractionAt;
    if (idleFor >= INACTIVITY_RESET_MS) {
      resetProgressState();
    }
  }, INACTIVITY_CHECK_INTERVAL);
}

function openInteractiveNode(targetId) {
  markInteraction();
  const target = ensureNode(targetId);
  if (!target) return;
  if (activeNode) {
    ensureLinkBetween(activeNode.id, target.id);
  }
  refreshGraph();
  showPopupForNode(target);
}

function handleInteractiveNodeOpened(nodeData) {
  if (!nodeData || nodeData.decorative) return;
  visitedInteractiveNodes.add(nodeData.id);
  maybeTriggerCelebration();
}

function getInteractiveNodeIds() {
  return nodes.filter(n => !n.decorative).map(n => n.id);
}

function areAllInteractiveNodesOpened() {
  const ids = getInteractiveNodeIds();
  if (!ids.length) return false;
  return ids.every(id => visitedInteractiveNodes.has(id));
}

function areInteractiveNodesFullyConnected() {
  const ids = getInteractiveNodeIds();
  if (!ids.length) return false;
  const interactiveSet = new Set(ids);
  const adjacency = new Map();
  ids.forEach(id => adjacency.set(id, new Set()));

  links.forEach(link => {
    const source = getNodeId(link.source);
    const target = getNodeId(link.target);
    if (!interactiveSet.has(source) || !interactiveSet.has(target)) return;
    adjacency.get(source).add(target);
    adjacency.get(target).add(source);
  });

  const stack = [ids[0]];
  const visited = new Set();
  while (stack.length) {
    const current = stack.pop();
    if (visited.has(current)) continue;
    visited.add(current);
    adjacency.get(current).forEach(neighbor => {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    });
  }

  return visited.size === ids.length;
}

function maybeTriggerCelebration() {
  if (celebrationTriggered || celebrationAnimating) return;
  if (!areAllInteractiveNodesOpened()) return;
  if (!areInteractiveNodesFullyConnected()) return;
  celebrationTriggered = true;
  startCelebrationSequence();
}

function startCelebrationSequence() {
  celebrationAnimating = true;
  hidePopup();
  pauseSimulationForCelebration();
  const runId = ++celebrationAnimationToken;
  setCelebrationDismissEnabled(false);
  openCelebrationOverlay();

  const donutTargets = computeDonutTargets();
  animateNodesToTargets(donutTargets, DONUT_ANIMATION_DURATION, runId, () => {
    const heartTargets = computeHeartTargets();
    animateNodesToTargets(heartTargets, HEART_ANIMATION_DURATION, runId, () => {
      if (runId !== celebrationAnimationToken) return;
      holdNodesAtFinalTargets();
      celebrationAnimating = false;
      setCelebrationDismissEnabled(true);
    });
  });
}

function setCelebrationDismissEnabled(enabled) {
  [celebrationCloseBtn, celebrationDismissBtn].forEach(btn => {
    if (!btn) return;
    btn.disabled = !enabled;
  });
}

function openCelebrationOverlay() {
  if (!celebrationOverlay) return;
  celebrationOverlay.classList.add("open");
  celebrationOverlay.setAttribute("aria-hidden", "false");
  lockSceneContainer();
  if (celebrationVideo) {
    if (CELEBRATION_VIDEO_SRC && celebrationVideo.src !== CELEBRATION_VIDEO_SRC) {
      celebrationVideo.src = CELEBRATION_VIDEO_SRC;
      celebrationVideo.load();
    }
    celebrationVideo.currentTime = 0;
    celebrationVideo.play().catch(() => {});
  }
}

function replayCelebrationVideo() {
  if (!celebrationVideo) return;
  celebrationVideo.currentTime = 0;
  celebrationVideo.play().catch(() => {});
}

function closeCelebrationOverlay() {
  if (!celebrationOverlay || !celebrationOverlay.classList.contains("open")) return;
  celebrationOverlay.classList.remove("open");
  celebrationOverlay.setAttribute("aria-hidden", "true");
  celebrationAnimationToken += 1;
  celebrationAnimating = false;
  setCelebrationDismissEnabled(true);
  if (celebrationVideo) {
    celebrationVideo.pause();
  }
  unlockSceneContainer();
  releaseNodesAfterCelebration();
  simulation.alpha(0.6).restart();
}

function pauseSimulationForCelebration() {
  simulation.stop();
  nodes.forEach(nodeItem => {
    nodeItem.vx = 0;
    nodeItem.vy = 0;
  });
}

function releaseNodesAfterCelebration() {
  if (!celebrationHoldingNodes) return;
  nodes.forEach(nodeItem => {
    if (nodeItem.decorative) return;
    nodeItem.fx = null;
    nodeItem.fy = null;
  });
  celebrationHoldingNodes = false;
  simulation.nodes(nodes);
}

function holdNodesAtFinalTargets() {
  nodes.forEach(nodeItem => {
    if (nodeItem.decorative) return;
    nodeItem.fx = nodeItem.x;
    nodeItem.fy = nodeItem.y;
  });
  celebrationHoldingNodes = true;
  ticked();
}

function computeDonutTargets() {
  const interactive = nodes.filter(n => !n.decorative);
  const count = interactive.length;
  if (!count) return new Map();
  const centerX = width / 2;
  const centerY = height / 2;
  const minRadius = Math.min(width, height) / 3;
  const maxRadius = Math.min(width, height) / 2.2;
  const radiusMid = (minRadius + maxRadius) / 2;
  const amplitude = Math.max(12, (maxRadius - minRadius) / 2);
  const targets = new Map();

  interactive.forEach((nodeItem, index) => {
    const angle = (index / count) * Math.PI * 2;
    const radial = radiusMid + Math.sin(angle * 3) * (amplitude * 0.25);
    const x = centerX + Math.cos(angle) * radial;
    const y = centerY + Math.sin(angle) * radial;
    targets.set(nodeItem.id, { x, y });
  });

  return targets;
}

function computeHeartTargets() {
  const interactive = nodes.filter(n => !n.decorative);
  const count = interactive.length;
  if (!count) return new Map();
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = Math.min(width, height) / 3.2;
  const targets = new Map();

  interactive.forEach((nodeItem, index) => {
    const t = (index / count) * Math.PI * 2;
    const xNorm = Math.pow(Math.sin(t), 3);
    const yNorm =
      0.8125 * Math.cos(t) -
      0.3125 * Math.cos(2 * t) -
      0.125 * Math.cos(3 * t) -
      0.0625 * Math.cos(4 * t);
    const x = centerX + xNorm * scale;
    const y = centerY - yNorm * scale;
    targets.set(nodeItem.id, { x, y });
  });

  return targets;
}

function animateNodesToTargets(targets, duration, runId, onComplete) {
  if (!(targets instanceof Map) || !targets.size) {
    ticked();
    if (typeof onComplete === "function") onComplete();
    return;
  }

  const startPositions = new Map();
  nodes.forEach(nodeItem => {
    if (nodeItem.decorative) return;
    const startX = Number.isFinite(nodeItem.x) ? nodeItem.x : width / 2;
    const startY = Number.isFinite(nodeItem.y) ? nodeItem.y : height / 2;
    startPositions.set(nodeItem.id, { x: startX, y: startY });
  });

  const startTime = performance.now();

  function step(now) {
    if (runId !== celebrationAnimationToken) return;
    const elapsed = now - startTime;
    const progress = Math.min(1, duration > 0 ? elapsed / duration : 1);
    const eased = easeInOutCubic(progress);

    nodes.forEach(nodeItem => {
      if (nodeItem.decorative) return;
      const start = startPositions.get(nodeItem.id);
      const target = targets.get(nodeItem.id);
      if (!start || !target) return;
      nodeItem.x = start.x + (target.x - start.x) * eased;
      nodeItem.y = start.y + (target.y - start.y) * eased;
    });

    ticked();

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (typeof onComplete === "function") {
      onComplete();
    }
  }

  requestAnimationFrame(step);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function isCelebrationOpen() {
  return Boolean(
    celebrationOverlay && celebrationOverlay.classList.contains("open")
  );
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

if (celebrationCloseBtn) {
  celebrationCloseBtn.addEventListener("click", () => {
    closeCelebrationOverlay();
  });
}

if (celebrationDismissBtn) {
  celebrationDismissBtn.addEventListener("click", () => {
    closeCelebrationOverlay();
  });
}

if (celebrationReplayBtn) {
  celebrationReplayBtn.addEventListener("click", () => {
    replayCelebrationVideo();
  });
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (isCelebrationOpen()) {
      event.preventDefault();
      closeCelebrationOverlay();
      return;
    }
    if (popup.classList.contains("open")) {
      event.preventDefault();
      hidePopup();
    }
    return;
  }
  if (isCelebrationOpen()) return;
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

  lensViewport.attr("transform", currentZoomTransform);
  backgroundViewport.attr("transform", currentZoomTransform);

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
  if (virtualScrollHeight > 0) {
    refreshVirtualScrollBounds();
  }
  if (activeNode && popupVideo.style.display === "block") {
    requestAnimationFrame(() => updateHotspotsVisibility(activeNode, popupVideo));
  }
});

[
  "pointerdown",
  "keydown",
  "wheel",
  "touchstart",
].forEach(eventName => {
  const options =
    eventName === "wheel" || eventName === "touchstart"
      ? { passive: true, capture: true }
      : { capture: true };
  window.addEventListener(eventName, markInteraction, options);
});

preloadAllMediaSources().finally(() => {
  startInactivityWatcher();
});

refreshGraph();
simulation.on("tick", ticked);
syncRadarToContainer();

window.hidePopup = hidePopup;

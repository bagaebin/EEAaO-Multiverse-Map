const NODE_LIBRARY = new Map([
  [
    "young evelyn",
    {
      id: "young evelyn",
      label: "young evelyn",
      video: { src: "videos/01_Young Evelyn.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [1.774, 2.274],
          rect: { x: 0.0021, y: 0.435, w: 0.352, h: 0.5548 },
          target: "sign spinner",
        },
        {
          timeRange: [2.764, 3.264],
          rect: { x: 0.5496, y: 0.6763, w: 0.1029, h: 0.1873 },
          target: "actor",
        },
        {
          timeRange: [4.5, 5],
          rect: { x: 0.4467, y: 0.3701, w: 0.1482, h: 0.1693 },
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
          timeRange: [0.481, 0.981],
          rect: { x: 0.3335, y: 0.5503, w: 0.3005, h: 0.4503 },
          target: "soldier",
        },
        {
          timeRange: [0.395, 0.895],
          rect: { x: 0.7411, y: 0.6583, w: 0.1112, h: 0.1117 },
          target: "grape",
        },
        {
          timeRange: [4.108, 4.608],
          rect: { x: 0.5825, y: 0.4386, w: 0.3561, h: 0.5259 },
          target: "statue",
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
          timeRange: [2.229, 2.429],
          rect: { x: 0.8234, y: 0.5034, w: 0.1317, h: 0.2954 },
          target: "young evelyn",
        },
        {
          timeRange: [3.681, 4.181],
          rect: { x: 0.4652, y: 0.824, w: 0.0967, h: 0.1765 },
          target: "pottery",
        },
        {
          timeRange: [4.5, 5],
          rect: { x: 0.4879, y: 0.3125, w: 0.0391, h: 0.0829 },
          target: "animation",
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
          timeRange: [4.5, 5],
          rect: { x: 0.0082, y: 0.2441, w: 0.4487, h: 0.2666 },
          target: "actor",
        },
        {
          timeRange: [4.5, 5],
          rect: { x: 0.564, y: 0.3017, w: 0.4343, h: 0.3927 },
          target: "actor",
        },
        {
          timeRange: [4.5, 5],
          rect: { x: 0.0082, y: 0.4206, w: 0.3561, h: 0.5548 },
          target: "jail",
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
          timeRange: [4.5, 5],
          rect: { x: 0.0288, y: 0.7052, w: 0.9448, h: 0.263 },
          target: "actor",
        },
        {
          timeRange: [1.17, 1.37],
          rect: { x: 0.3438, y: 0.0315, w: 0.3252, h: 0.3746 },
          target: "grape",
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
      hotspots: [
        {
          timeRange: [0.1, 0.6],
          rect: { x: 0.6361, y: 0.1972, w: 0.2244, h: 0.2774 },
          target: "youtube",
        },
        {
          timeRange: [4.5, 5],
          rect: { x: 0.1009, y: 0.6259, w: 0.2285, h: 0.3314 },
          target: "lab",
        },
        {
          timeRange: [4.5, 5],
          rect: { x: 0.0226, y: 0.1396, w: 0.1997, h: 0.5007 },
          target: "jail",
        },
      ],
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
          timeRange: [0, 0.1],
          rect: { x: 0.2923, y: 0.0171, w: 0.4096, h: 0.3134 },
          target: "singer",
        },
        {
          timeRange: [2.389, 2.589],
          rect: { x: 0.4076, y: 0.6475, w: 0.2635, h: 0.2774 },
          target: "slaughterhouse",
        },
        {
          timeRange: [3.989, 4.189],
          rect: { x: 0.7658, y: 0.6079, w: 0.14, h: 0.2882 },
          target: "young evelyn",
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
      hotspots: [
        {
          timeRange: [0.264, 0.464],
          rect: { x: 0.4652, y: 0.3846, w: 0.0823, h: 0.1297 },
          target: "cat",
        },
        {
          timeRange: [2.958, 3.658],
          rect: { x: 0.6669, y: 0.435, w: 0.1688, h: 0.3206 },
          target: "jail",
        },
        {
          timeRange: [2.958, 3.658],
          rect: { x: 0.2079, y: 0.4242, w: 0.1647, h: 0.5115 },
          target: "jail",
        },
        {
          timeRange: [4.615, 4.815],
          rect: { x: 0, y: 0.2945, w: 0.9942, h: 0.1585 },
          target: "sign spinner",
        },
      ],
    },
  ],
  [
    "slaughterhouse",
    {
      id: "slaughterhouse",
      label: "slaughterhouse",
      video: { src: "videos/09_slaughterhouse.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [3.869, 4.369],
          rect: { x: 0.072, y: 0.3305, w: 0.3541, h: 0.634 },
          target: "bagle",
        },
        {
          timeRange: [3.869, 4.369],
          rect: { x: 0.5455, y: 0.3701, w: 0.3396, h: 0.5764 },
          target: "bagle",
        },
        {
          timeRange: [2.622, 3.122],
          rect: { x: 0.4179, y: 0.5142, w: 0.1564, h: 0.4215 },
          target: "monster",
        },
      ],
    },
  ],
  [
    "tinder",
    {
      id: "tinder",
      label: "tinder",
      video: { src: "videos/10_tinder.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [1.096, 1.596],
          rect: { x: 0.3993, y: 0.2696, w: 0.1976, h: 0.1546 },
          target: "monster",
        },
        {
          timeRange: [2.952, 3.452],
          rect: { x: 0.3561, y: 0.018, w: 0.2964, h: 0.0935 },
          target: "youtube",
        },
      ],
    },
  ],
  [
    "macho",
    {
      id: "macho",
      label: "macho",
      video: { src: "videos/11_macho.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.309, 2.809],
          rect: { x: 0.2532, y: 0.1108, w: 0.5064, h: 0.4899 },
          target: "bagle",
        },
        {
          timeRange: [3.886, 4.386],
          rect: { x: 0.4487, y: 0.0135, w: 0.1359, h: 0.2738 },
          target: "lab",
        },
        {
          timeRange: [3.886, 4.386],
          rect: { x: 0.2532, y: 0.4134, w: 0.4982, h: 0.245 },
          target: "tinder",
        },
      ],
    },
  ],
  [
    "lab",
    {
      id: "lab",
      label: "lab",
      video: { src: "videos/12_lab.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [1.438, 1.938],
          rect: { x: 0.0206, y: 0.6295, w: 0.9572, h: 0.335 },
          target: "slaughterhouse",
        },
        {
          timeRange: [3.015, 3.515],
          rect: { x: 0.0494, y: 0.4926, w: 0.2367, h: 0.2378 },
          target: "statue",
        },
        {
          timeRange: [3.015, 3.515],
          rect: { x: 0.7225, y: 0.4638, w: 0.2264, h: 0.2846 },
          target: "statue",
        },
        {
          timeRange: [3.015, 3.215],
          rect: { x: 0.6484, y: 0.2224, w: 0.1585, h: 0.2558 },
          target: "youtube",
        },
      ],
    },
  ],
  [
    "monster",
    {
      id: "monster",
      label: "monster",
      video: { src: "videos/13_monster.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [4.212, 4.912],
          rect: { x: 0.459, y: 0.0135, w: 0.105, h: 0.3422 },
          target: "cat",
        },
        {
          timeRange: [2.315, 2.515],
          rect: { x: 0.6669, y: 0.4854, w: 0.3294, h: 0.2594 },
          target: "lab",
        },
      ],
    },
  ],
  [
    "animation",
    {
      id: "animation",
      label: "animation",
      video: { src: "videos/14_animation.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [3.305, 3.805],
          rect: { x: 0.0926, y: 0.0315, w: 0.8213, h: 0.4251 },
          target: "cat",
        },
        {
          timeRange: [4.5, 5],
          rect: { x: 0.6587, y: 0.2405, w: 0.0576, h: 0.1693 },
          target: "actor",
        },
      ],
    },
  ],
  [
    "youtube",
    {
      id: "youtube",
      label: "youtube",
      video: { src: "videos/15_youtube.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [0.247, 0.747],
          rect: { x: 0.1688, y: 0.0531, w: 0.6628, h: 0.2522 },
          target: "bagle",
        },
        {
          timeRange: [4.222, 4.722],
          rect: { x: 0.6567, y: 0.1108, w: 0.2779, h: 0.353 },
          target: "pottery",
        },
        {
          timeRange: [3.157, 3.657],
          rect: { x: 0.1585, y: 0.381, w: 0.2758, h: 0.6088 },
          target: "actor",
        },
      ],
    },
  ],
  [
    "soldier",
    {
      id: "soldier",
      label: "soldier",
      video: { src: "videos/16_soldier.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [0.1, 0.6],
          rect: { x: 0.3726, y: 0.208, w: 0.2491, h: 0.2414 },
          target: "tinder",
        },
        {
          timeRange: [4.504, 5],
          rect: { x: 0.2347, y: 0.0099, w: 0.5496, h: 0.3134 },
          target: "pottery",
        },
      ],
    },
  ],
  [
    "hotdog fingers",
    {
      id: "hotdog fingers",
      label: "hotdog fingers",
      video: { src: "videos/17_hotdog fingers.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [2.582, 2.782],
          rect: { x: 0.7369, y: 0.1972, w: 0.175, h: 0.3783 },
          target: "irs office",
        },
        {
          timeRange: [4.365, 4.565],
          rect: { x: 0.4261, y: 0.0207, w: 0.2408, h: 0.1297 },
          target: "macho",
        },
      ],
    },
  ],
  [
    "jail",
    {
      id: "jail",
      label: "jail",
      video: { src: "videos/18_jail.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [0.1, 0.6],
          rect: { x: 0.3643, y: 0.1288, w: 0.2573, h: 0.1405 },
          target: "singer",
        },
        {
          timeRange: [2.383, 2.883],
          rect: { x: 0.3396, y: 0.417, w: 0.1606, h: 0.3422 },
          target: "hotdog fingers",
        },
        {
          timeRange: [3.977, 4.477],
          rect: { x: 0.2594, y: 0.2369, w: 0.3108, h: 0.4071 },
          target: "irs office",
        },
      ],
    },
  ],
  [
    "statue",
    {
      id: "statue",
      label: "statue",
      video: { src: "videos/19_statue.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [0.1, 0.6],
          rect: { x: 0.4302, y: 0.0099, w: 0.1832, h: 0.1729 },
          target: "bagle",
        },
        {
          timeRange: [3.767, 4.267],
          rect: { x: 0.282, y: 0.4602, w: 0.2511, h: 0.5368 },
          target: "grape",
        },
        {
          timeRange: [3.767, 4.267],
          rect: { x: 0.6855, y: 0.6403, w: 0.0679, h: 0.1081 },
          target: "pottery",
        },
      ],
    },
  ],
  [
    "grape",
    {
      id: "grape",
      label: "grape",
      video: { src: "videos/20_grape.mp4", duration: 5 },
      hotspots: [
        {
          timeRange: [4.143, 4.643],
          rect: { x: 0.1194, y: 0.6187, w: 0.3582, h: 0.371 },
          target: "pottery",
        },
        {
          timeRange: [4.143, 4.643],
          rect: { x: 0.3973, y: 0.1468, w: 0.1647, h: 0.7493 },
          target: "monster",
        },
      ],
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

const HUD_BANNER_DISPLAY_MS = 2000;
const DEFAULT_BANNER_HIGHLIGHT = "connected";
const DEFAULT_BANNER_BODY = "A new branch of the multiverse is now accessible.";

const connectionBannerModule = (() => {
  const registry = new Map();

  function normalizeId(nodeId) {
    return typeof nodeId === "string" ? nodeId.trim().toLowerCase() : "";
  }

  function normalizeConfig(config = {}) {
    const normalized = { ...config };
    if (typeof normalized.title !== "string" || !normalized.title.trim()) {
      normalized.title = null;
    }
    if (typeof normalized.highlight !== "string" || !normalized.highlight.trim()) {
      normalized.highlight = DEFAULT_BANNER_HIGHLIGHT;
    }
    if (typeof normalized.body !== "string" || !normalized.body.trim()) {
      normalized.body = DEFAULT_BANNER_BODY;
    }
    return normalized;
  }

  return {
    register(nodeId, config) {
      const key = normalizeId(nodeId);
      if (!key) return;
      registry.set(key, normalizeConfig(config));
    },
    resolve(nodeId, fallbackTitle) {
      const key = normalizeId(nodeId);
      const stored = key ? registry.get(key) : null;
      const base = stored ? { ...stored } : normalizeConfig();
      if (!base.title) {
        base.title = fallbackTitle ?? nodeId ?? "";
      }
      return base;
    },
  };
})();

NODE_LIBRARY.forEach(config => {
  if (!config || config.decorative) return;
  const label = config.label ?? config.id;
  connectionBannerModule.register(config.id, {
    title: label,
    body: `${label} timeline link stabilized.`,
  });
});

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

const CELEBRATION_VIDEO_SRC = "/videos/I love you_connected_voice inluded.mp4";
const DONUT_ANIMATION_DURATION = 1000;
const HEART_ANIMATION_DURATION = 2000;
const DECORATIVE_CONNECTION_SPAN = 2;
const INACTIVITY_RESET_MS = 60 * 1000;
const INACTIVITY_CHECK_INTERVAL = 5000;
const INTERACTION_HINT_DURATION = 5000;

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
const interactionHint = document.getElementById("interactionHint");
const hudBanner = document.querySelector(".hud__banner");
const hudBannerNode = hudBanner?.querySelector(".hud__banner-node") ?? null;
const hudBannerStatus = hudBanner?.querySelector(".hud__banner-status") ?? null;
const hudBannerBody = hudBanner?.querySelector(".hud__banner-body") ?? null;

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
let interactionHintTimerId = null;
let pendingInteractionHint = false;
let hudBannerTimer = null;

if (hudBanner) {
  hudBanner.setAttribute("aria-hidden", "true");
}

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
    loadingStatus.textContent = `resetting the map ${percent}%`;
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

function hideInteractionHint() {
  if (interactionHintTimerId) {
    clearTimeout(interactionHintTimerId);
    interactionHintTimerId = null;
  }
  if (!interactionHint) return;
  interactionHint.classList.remove("hud__panel--visible");
  interactionHint.setAttribute("aria-hidden", "true");
}

function showInteractionHint() {
  if (!interactionHint) return;
  if (interactionHintTimerId) {
    clearTimeout(interactionHintTimerId);
  }
  pendingInteractionHint = false;
  interactionHint.classList.add("hud__panel--visible");
  interactionHint.setAttribute("aria-hidden", "false");
  interactionHintTimerId = setTimeout(() => {
    interactionHintTimerId = null;
    hideInteractionHint();
  }, INTERACTION_HINT_DURATION);
}

function queueInteractionHint() {
  if (!interactionHint) return;
  pendingInteractionHint = true;
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
      loadingStatus.textContent = "Ready for jumping";
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
        loadingStatus.textContent = "ready for jumping";
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

function hideHudBanner() {
  if (!hudBanner) return;
  if (hudBannerTimer) {
    clearTimeout(hudBannerTimer);
    hudBannerTimer = null;
  }
  hudBanner.classList.remove("hud__banner--visible");
  hudBanner.setAttribute("aria-hidden", "true");
}

function displayHudBanner(nodeId, fallbackLabel) {
  if (!hudBanner) return;
  const resolved = connectionBannerModule.resolve(nodeId, fallbackLabel);
  if (hudBannerNode) {
    hudBannerNode.textContent = resolved.title ?? fallbackLabel ?? nodeId ?? "";
  }
  if (hudBannerStatus) {
    hudBannerStatus.textContent = resolved.highlight ?? DEFAULT_BANNER_HIGHLIGHT;
  }
  if (hudBannerBody) {
    hudBannerBody.textContent = resolved.body ?? DEFAULT_BANNER_BODY;
  }
  hudBanner.classList.add("hud__banner--visible");
  hudBanner.setAttribute("aria-hidden", "false");
  if (hudBannerTimer) {
    clearTimeout(hudBannerTimer);
  }
  hudBannerTimer = window.setTimeout(() => {
    hideHudBanner();
  }, HUD_BANNER_DISPLAY_MS);
}

function showConnectionBanner(nodeData) {
  if (!nodeData || nodeData.decorative) return;
  const label = nodeData.label ?? nodeData.id;
  displayHudBanner(nodeData.id, label);
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
  if (!sourceId || !targetId) return false;
  if (sourceId === targetId) return false;
  const exists = links.some(
    l => getNodeId(l.source) === sourceId && getNodeId(l.target) === targetId
  );
  if (exists) return false;
  links.push({ source: sourceId, target: targetId });
  return true;
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
  hideHudBanner();
  refreshGraph();
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("[Session] Progress state reset after inactivity.");
  }
  hideInteractionHint();
  queueInteractionHint();
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
  let createdLink = false;
  if (activeNode) {
    createdLink = ensureLinkBetween(activeNode.id, target.id);
  }
  refreshGraph();
  if (createdLink) {
    showConnectionBanner(target);
  }
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

function triggerAdminCelebration() {
  if (celebrationAnimating || isCelebrationOpen()) return;
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
  hideHudBanner();
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

window.addEventListener("mousemove", () => {
  if (pendingInteractionHint) {
    showInteractionHint();
  }
  markInteraction();
});

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
  if (typeof event.key === "string" && event.key.toLowerCase() === "o") {
    event.preventDefault();
    triggerAdminCelebration();
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

preloadAllMediaSources()
  .then(() => {
    setTimeout(() => {
      showInteractionHint();
    }, 350);
  })
  .finally(() => {
    startInactivityWatcher();
  });

refreshGraph();
simulation.on("tick", ticked);
syncRadarToContainer();

if (typeof window !== "undefined") {
  window.MultiverseConnectionBanner = {
    register: connectionBannerModule.register,
    resolve: connectionBannerModule.resolve,
  };
}

window.hidePopup = hidePopup;

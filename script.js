const nodes = [
  { id: "Cook", img: "images/001.png" },
  { id: "Kung-Fu", img: "images/002(need edited).png" },
  { id: "Actor", img: "images/003.png" },
  { id: "Mom", img: "images/004.png" },
  { id: "Singer", img: "images/005.png" }
];

const links = [
  { source: "Cook", target: "Kung-Fu" },
  { source: "Kung-Fu", target: "Actor" },
  { source: "Actor", target: "Mom" },
  { source: "Mom", target: "Actor" },
  { source: "Singer", target: "Cook" }
];

// ======== sceneContainer(radar) 및 lines & nodes 생성
const sceneContainer = document.querySelector(".scene-container");
const lensSvg = d3.select(".scene-container svg");
const backgroundSvg = d3.select(".background-network");

let width = 800;
let height = 800;
let hasSeededNodes = false;
const RADIAL_PADDING = 40;
const MIN_RADIAL_RADIUS = 120;

backgroundSvg.attr("preserveAspectRatio", "xMidYMid meet");

const simulation = d3.forceSimulation(nodes)
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
  // ======== sceneContainer(radar) 및 lines & nodes 생성 끝

const backgroundLink = backgroundSvg.append("g")
  .attr("class", "background-links")
  .attr("stroke-linecap", "round")
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("class", "link--background");

const backgroundNode = backgroundSvg.append("g")
  .attr("class", "background-nodes")
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("class", "node--background")
  .attr("r", 3);

const link = lensSvg.append("g")
  .attr("class", "lens-links")
  .attr("stroke-linecap", "round")
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("class", "link");

const node = lensSvg.append("g")
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("class", "node")
  .attr("r", 6)
  .on("click", (event, d) => showPopup(d.img))
  .call(drag(simulation));

const label = lensSvg.append("g")
  .selectAll("text")
  .data(nodes)
  .join("text")
  .attr("class", "label")
  .text(d => d.id);
// ======== sceneContainer(radar) 및 lines & nodes 생성 끝

// ======== Making lines & nodes dragable - not on the bg but(only) the sceneContainer(radar)
simulation.on("tick", () => {
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
});

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

  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}
// ======== Making lines & nodes dragable 끝

// ======== Showing video popups
function showPopup(imgUrl) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popupImg");
  popupImg.src = imgUrl;
  popup.style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hidePopup();
});
// ======== Showing video popups 끝

// ========
/**
 * Arranging the radar SVG and the nodes
 */
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

function seedNodesRandomly(radius, centerX, centerY) {
  nodes.forEach(node => {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.sqrt(Math.random()) * radius;
    node.x = centerX + Math.cos(angle) * distance;
    node.y = centerY + Math.sin(angle) * distance;
  });
}

// ==== Rearranging the nodes when the window is resized
window.addEventListener("resize", syncRadarToContainer);
syncRadarToContainer();
// ======== Arranging the radar SVG and the nodes 끝
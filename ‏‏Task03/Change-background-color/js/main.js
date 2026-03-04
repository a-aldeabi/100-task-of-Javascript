const btn = document.getElementById("btn");
const body = document.body;

let colorPalette = [
  "#90a4ae", // blue gray
  "#81c784", // green medium
  "#64b5f6", // blue medium
  "#ffb74d", // orange medium
  "#e57373", // red soft
  "#ba68c8", // purple medium
  "#f06292", // pink medium
  "#4db6ac", // teal medium
  "#aed581", // lime medium
  "#7986cb", // indigo medium
  "#a1887f", // brown medium
  "#ffd54f", // yellow warm
  "#4fc3f7", // sky blue
  "#ff8a65", // coral
  "#9575cd", // violet
  "#4dd0e1", // cyan medium
  "#dce775", // lime yellow
  "#ffb300", // amber
  "#66bb6a", // green strong
  "#5c6bc0", // indigo strong
];

function changecolor() {
  const indexcolor = Math.floor(Math.random() * colorPalette.length);
  body.style.backgroundColor = colorPalette[indexcolor];
}

btn.addEventListener("click", changecolor);

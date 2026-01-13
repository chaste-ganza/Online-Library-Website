const grid = document.querySelector(".grid-bg");
const cellSize = 20;

function createGrid() {
  grid.innerHTML = "";

  const cols = Math.ceil(window.innerWidth / cellSize);
  const rows = Math.ceil(window.innerHeight / cellSize);

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-cell";
    grid.appendChild(cell);
  }
}

createGrid();
window.addEventListener("resize", createGrid);

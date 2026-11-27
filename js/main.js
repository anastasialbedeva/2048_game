const gridElement = document.getElementById("grid");
const tilesElement = document.getElementById("tiles");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

let board = [];
let score = 0;
let tileElements = {};

function createGrid() {
  for (let i = 0; i < SIZE * SIZE; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    gridElement.appendChild(cell);
  }
}

function getTileClass(tile) {
  let className = "tile tile-" + tile.value;
  if (tile.value > 2048) {
    className = "tile tile-super";
  }
  if (tile.isNew) {
    className = className + " tile-new";
  }
  if (tile.isMerged) {
    className = className + " tile-merged";
  }
  return className;
}

function setTilePosition(element, row, col) {
  element.style.setProperty("--row", row);
  element.style.setProperty("--col", col);
}

function createTileElement(tile) {
  const element = document.createElement("div");
  setTilePosition(element, tile.row, tile.col);
  tilesElement.appendChild(element);
  tileElements[tile.id] = element;
  return element;
}

function renderTiles() {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const tile = board[row][col];
      if (tile !== null) {
        let element = tileElements[tile.id];
        if (element === undefined) {
          element = createTileElement(tile);
        }
        element.className = getTileClass(tile);
        element.textContent = tile.value;
        setTilePosition(element, tile.row, tile.col);
      }
    }
  }
}

function clearTiles() {
  tilesElement.innerHTML = "";
  tileElements = {};
}

function updateScore() {
  scoreElement.textContent = score;
}

function render() {
  renderTiles();
  updateScore();
}

function startNewGame() {
  board = createStartBoard();
  score = 0;
  clearTiles();
  render();
}

restartButton.addEventListener("click", startNewGame);
createGrid();
startNewGame();

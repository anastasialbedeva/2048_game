const SIZE = 4;
let nextTileId = 1;

function createTile(value, row, col) {
  const tile = {
    id: nextTileId,
    value: value,
    row: row,
    col: col,
    isNew: true,
    isMerged: false,
    target: null
  };
  nextTileId++;
  return tile;
}

function createEmptyBoard() {
  const board = [];
  for (let row = 0; row < SIZE; row++) {
    const line = [];
    for (let col = 0; col < SIZE; col++) {
      line.push(null);
    }
    board.push(line);
  }
  return board;
}

function getEmptyCells(board) {
  const cells = [];
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      if (board[row][col] === null) {
        cells.push({ row: row, col: col });
      }
    }
  }
  return cells;
}

function addRandomTile(board) {
  const emptyCells = getEmptyCells(board);
  if (emptyCells.length === 0) {
    return;
  }
  const cell = emptyCells[randomInt(emptyCells.length)];
  board[cell.row][cell.col] = createTile(randomTileValue(), cell.row, cell.col);
}

function addNewTiles(board, min, max) {
  const count = min + randomInt(max - min + 1);
  for (let i = 0; i < count; i++) {
    addRandomTile(board);
  }
}

function createStartBoard() {
  const board = createEmptyBoard();
  addNewTiles(board, 1, 3);
  return board;
}

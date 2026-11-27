function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomTileValue() {
  if (Math.random() < 0.9) {
    return 2;
  }
  return 4;
}

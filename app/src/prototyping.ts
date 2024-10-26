function drawBoard(
  boardWidth: number,
  blackColor: string,
  whiteColor: string,
  ctx: CanvasRenderingContext2D
) {
  const tileWidth = boardWidth / 8;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let fillColor = whiteColor;

      if (tileIsBlack(x, y)) {
        fillColor = blackColor;
      }

      ctx.fillStyle = fillColor;

      if (x) ctx.fillRect(x * tileWidth, y * tileWidth, tileWidth, tileWidth);
    }
  }
}

type Piece = {
  x: number;
  y: number;
  color: string;
};

function drawPieces(
  pieces: Piece[],
  boardSize: number,
  tilePaddingPercent: number,
  ctx: CanvasRenderingContext2D
) {
  const tileSize = boardSize / 8;
  pieces.forEach((piece: Piece) => {
    drawPiece(piece, tileSize, tilePaddingPercent, ctx);
  });
}

// If x and y share parity, then the tile should be black
function tileIsBlack(x: number, y: number) {
  const xIsEven = x % 2;
  const yIsEven = y % 2;
  const xAndYShareParity = xIsEven == yIsEven;
  return xAndYShareParity;
}

function drawPiece(
  piece: Piece,
  tileSize: number,
  tilePaddingPercent: number,
  ctx: CanvasRenderingContext2D
) {
  const tilePadding = (tileSize / 200) * tilePaddingPercent;
  const xPixelCord = piece.x * tileSize + tilePadding;
  const yPixelCord = piece.y * tileSize + tilePadding;
  const pieceSize = tileSize - tilePadding * 2;
  ctx.fillRect(xPixelCord, yPixelCord, pieceSize, pieceSize);
}

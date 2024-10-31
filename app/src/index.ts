import { io } from "socket.io-client";

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
      ctx.fillRect(x * tileWidth, y * tileWidth, tileWidth, tileWidth);
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
  ctx.fillStyle = piece.color;
  ctx.fillRect(xPixelCord, yPixelCord, pieceSize, pieceSize);
}

const canvas = document.querySelector("canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("Canvas not found");
}

const ctx = canvas.getContext("2d");

if (!(ctx instanceof CanvasRenderingContext2D)) {
  throw new Error("Canvas not found");
}

const boardSize = 800;
canvas.height = boardSize;
canvas.width = boardSize;

const pieces: Piece[] = [];

for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 2; y++) {
    pieces.push({ x: x, y: y, color: "grey" });
  }
}

for (let x = 0; x < 8; x++) {
  for (let y = 6; y < 8; y++) {
    pieces.push({ x: x, y: y, color: "brown" });
  }
}

drawBoard(boardSize, "black", "white", ctx);
drawPieces(pieces, boardSize, 30, ctx);

const socket = io("http://localhost:3000/", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

socket.io.on("open", () => {
  console.log("hiiii");
  console.log();
});

socket.io.on("ping", () => {
  console.log("PING");
});

socket.io.on("data", (data) => {
  document.write(data);
});

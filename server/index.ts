import { Server } from "npm:socket.io@4.8.0";
import { Gameboard } from "./src/Gameboard.ts";

// Initializeing server and settings
const io = new Server(3000, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const board = new Gameboard();

type OutputPiece = {
  x: number;
  y: number;
  color: string;
};

console.log(board.getPieces());

const boardPieces = board.getPieces();
const outputPieces: OutputPiece[] = [];
boardPieces.forEach((piece) => {
  const tile = piece.getTile();
  outputPieces.push({
    x: tile.getX(),
    y: tile.getY(),
    color: "brown",
  });
});

// Example connection
io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.emit("data", outputPieces.toString());

  socket.on("disconnect", (reason) => {
    console.log(`Socket ${socket.id} disconnected due to ${reason}`);
  });
});

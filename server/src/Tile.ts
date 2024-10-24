import type { Piece } from "./pieces/Piece.ts";

export class Tile {
  x: number;
  y: number;
  piece: Piece | null;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.piece = null;
  }
  setPiece(piece: Piece) {
    this.piece = piece;
    piece.tile = this;
  }
}

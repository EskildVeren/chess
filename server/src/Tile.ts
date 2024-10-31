import type { Piece } from "./pieces/Piece.ts";

export class Tile {
  private x: number;
  private y: number;
  private isUnderAttack: boolean;
  private piece: Piece | null;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.piece = null;
    this.isUnderAttack = false;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setPiece(piece: Piece) {
    this.piece = piece;
  }

  setIsUnderAttack(isUnderAttack: boolean) {
    this.isUnderAttack = isUnderAttack;
  }

  getPiece() {
    return this.piece;
  }
}

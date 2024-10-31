import type { Tile } from "../Tile.ts";
import { Piece } from "./Piece.ts";

export class FirstMovePiece extends Piece {
  private hasMoved: boolean;
  constructor(tile: Tile, player: number) {
    super(tile, player);
    this.hasMoved = false;
  }

  override moveTo(tile: Tile) {
    this.setTile(tile);
    tile.setPiece(this);
    this.hasMoved = true;
  }
}

import type { Tile } from "../Tile.ts";
import { Piece } from "./Piece.ts";

export class King extends Piece {
  firstMove: boolean;
  constructor(tile: Tile, player: number) {
    super(tile, player);
    this.firstMove = false;
  }
}

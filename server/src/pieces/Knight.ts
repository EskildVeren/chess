import type { Tile } from "../Tile.ts";
import { Piece } from "./Piece.ts";

export class Knight extends Piece {
  constructor(tile: Tile, player: number) {
    super(tile, player);
  }
}

import type { Tile } from "../Tile.ts";
import { FirstMovePiece } from "./FirstMovePiece.ts";
import { Piece } from "./Piece.ts";

export class King extends FirstMovePiece {
  constructor(tile: Tile, player: number) {
    super(tile, player);
  }
}

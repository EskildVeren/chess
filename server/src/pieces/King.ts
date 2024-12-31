import type { Tile } from "../gameLogic/Tile.ts";
import { FirstMovePiece } from "./FirstMovePiece.ts";

export class King extends FirstMovePiece {
  constructor(tile: Tile, player: number) {
    super(tile, player);
  }
}

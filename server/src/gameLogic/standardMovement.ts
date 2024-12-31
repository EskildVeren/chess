import type { Piece } from "../pieces/Piece.ts";
import type { Tile } from "./Tile.ts";

export type MovementRule = {
  x: number;
  y: number;
  repeating: boolean;
};

export function calculateMoves(piece: Piece, tile: Tile, movementRule: MovementRule, tiles: Tile[][]) {
  const x = tile.getX() + movementRule.x;
  const y = tile.getY() + movementRule.y;
  if (x < 0 || x > 7) {
    return;
  }
  if (y < 0 || y > 7) {
    return;
  }

  const newTile = tiles[x][y];
  newTile.setIsUnderAttack(true);
  piece.addTileThisAttacks(newTile);

  if (movementRule.repeating) {
    calculateMoves(piece, newTile, movementRule, tiles);
  }
}

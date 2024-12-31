import { Bishop } from "../pieces/Bishop.ts";
import { King } from "../pieces/King.ts";
import { Knight } from "../pieces/Knight.ts";
import { Pawn } from "../pieces/Pawn.ts";
import { Queen } from "../pieces/Queen.ts";
import { Rook } from "../pieces/Rook.ts";
import { Tile } from "./Tile.ts";

export function getPieceForTile(tile: Tile) {
  const x = tile.getX();
  const y = tile.getY();

  const player = Math.floor(y / 4);

  if (y == 1 || y == 6) {
    return new Pawn(tile, player);
  }

  if (y != 0 && y != 7) {
    return null;
  }

  if (x == 0 || x == 7) {
    return new Rook(tile, player);
  }

  if (x == 1 || x == 6) {
    return new Knight(tile, player);
  }

  if (x == 2 || x == 5) {
    return new Bishop(tile, player);
  }

  if (x == 3) {
    return new Queen(tile, player);
  }

  if (x == 4) {
    return new King(tile, player);
  }

  return null;
}

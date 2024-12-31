import type { Gameboard } from "../gameLogic/Gameboard.ts";
import { Piece } from "../pieces/Piece.ts";
import type { Tile } from "../gameLogic/Tile.ts";

export function convertChessDataToJSON(board: Gameboard) {
  const pieces: Piece[] = [];
  board.getTiles().forEach((tileColumn: Tile[]) => {
    tileColumn.forEach((tile: Tile) => {
      const piece = tile.getPiece;
      if (piece instanceof Piece) {
        pieces.push(piece);
      }
    });
  });
  return { pieces: pieces };
}

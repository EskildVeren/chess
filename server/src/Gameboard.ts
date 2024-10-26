import { Tile } from "./Tile.ts";
import { getPieceForTile } from "./helperFunctions/getPieceForTile.ts";
import { Piece } from "./pieces/Piece.ts";

export class Gameboard {
  private tiles: Tile[][];
  private pieces: Piece[];
  constructor() {
    this.pieces = [];
    this.tiles = [];
    for (let x = 0; x < 8; x++) {
      this.tiles.push([]);
      for (let y = 0; y < 8; y++) {
        const tile = new Tile(x, y);
        const piece = getPieceForTile(tile);

        if (piece instanceof Piece) {
          tile.setPiece(piece);
          this.pieces.push(piece);
        }

        this.tiles[x].push(new Tile(x, y));
      }
    }
  }

  getTiles() {
    return this.tiles;
  }

  getPieces() {
    return this.pieces;
  }

  setAllTilesNotUnderAttack() {
    this.tiles.forEach((tileColumn: Tile[]) => {
      tileColumn.forEach((tile: Tile) => {
        tile.setIsUnderAttack(false);
      });
    });
  }
}

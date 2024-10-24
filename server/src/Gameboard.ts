import { Tile } from "./Tile.ts";
import { getPieceForTile } from "./helperFunctions/getPieceForTile.ts";
import { Piece } from "./pieces/Piece.ts";

export class Gameboard {
  tiles: Tile[][];
  constructor() {
    this.tiles = [];
    for (let x = 0; x < 8; x++) {
      this.tiles.push([]);
      for (let y = 0; y < 8; y++) {
        const tile = new Tile(x, y);
        const piece = getPieceForTile(tile);

        if (piece instanceof Piece) {
          tile.setPiece(piece);
        }

        this.tiles[x].push(new Tile(x, y));
      }
    }
  }
}

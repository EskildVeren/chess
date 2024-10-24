import type { Tile } from "../Tile.ts";

export class Piece {
  tile!: Tile;
  player: number;
  constructor(tile: Tile, player: number) {
    this.moveTo(tile);
    this.player = player;
  }

  moveTo(tile: Tile) {
    this.tile = tile;
    tile.piece = this;
  }
}

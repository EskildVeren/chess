import type { Tile } from "../Tile.ts";

export class Piece {
  private tile!: Tile;
  private player: number;
  private tilesThisAttacks: Tile[];
  constructor(tile: Tile, player: number) {
    this.moveTo(tile);
    this.player = player;
    this.tilesThisAttacks = [];
  }

  getPlayer() {
    return this.player;
  }

  getTilesThisAttacks() {
    return this.tilesThisAttacks;
  }

  resetTilesThisAttacks() {
    this.tilesThisAttacks = [];
  }

  addTileThisAttacks(tile: Tile) {
    this.tilesThisAttacks.push(tile);
  }

  setTile(tile: Tile) {
    this.setTile(tile);
  }

  moveTo(tile: Tile) {
    this.setTile(tile);
    tile.setPiece(this);
  }
}

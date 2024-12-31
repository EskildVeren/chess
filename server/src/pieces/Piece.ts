import type { Tile } from "../gameLogic/Tile.ts";

export class Piece {
  private tile!: Tile;
  private player: number;
  private tilesThisAttacks: Tile[];
  x: number;
  y: number;
  constructor(tile: Tile, player: number) {
    this.moveTo(tile);
    this.x = tile.getX();
    this.y = tile.getY();
    this.player = player;
    this.tilesThisAttacks = [];
  }

  getPlayer() {
    return this.player;
  }

  getTile() {
    return this.tile;
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
    this.tile = tile;
  }

  moveTo(tile: Tile) {
    this.setTile(tile);
    tile.setPiece(this);
  }
}

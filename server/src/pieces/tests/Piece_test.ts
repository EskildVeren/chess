import { beforeEach, describe, it } from "jsr:@std/testing/bdd";
import { Piece } from "../Piece.ts";
import { expect } from "jsr:@std/expect/expect";
import { Tile } from "../../gameLogic/Tile.ts";

describe("Piece class", () => {
  let tile: Tile;
  let piece: Piece;
  beforeEach(() => {
    tile = new Tile(3, 5);
    piece = new Piece(tile, 0);
  });
  it("Constructs", () => {
    expect(piece.x).toEqual(3);
    expect(piece.y).toEqual(5);
    expect(piece.getPlayer()).toEqual(0);
    expect(piece.getTile()).toBe(tile);
  });
  it("Can add tiles it attacks", () => {
    const attackTile1 = new Tile(2, 1);
    const attackTile2 = new Tile(1, 1);
    piece.addTileThisAttacks(attackTile1);
    piece.addTileThisAttacks(attackTile2);
    expect(piece.getTilesThisAttacks()[0]).toBe(attackTile1);
    expect(piece.getTilesThisAttacks()[1]).toBe(attackTile2);
  });
  it("Can reset tiles it attacks", () => {
    const attackTile1 = new Tile(2, 1);
    const attackTile2 = new Tile(1, 1);
    piece.addTileThisAttacks(attackTile1);
    piece.addTileThisAttacks(attackTile2);
    piece.resetTilesThisAttacks();
    expect(piece.getTilesThisAttacks()).toHaveLength(0);
  });
  it("Can move to other tiles", () => {
    const newTile = new Tile(2, 1);
    piece.moveTo(newTile);
    expect(piece.getTile()).toBe(newTile);
    expect(tile.getPiece()).toBe(piece);
  });
});

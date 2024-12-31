import { beforeEach, describe, it } from "jsr:@std/testing/bdd";
import { Gameboard } from "../Gameboard.ts";
import { expect } from "jsr:@std/expect";
import { Tile } from "../Tile.ts";

describe("GameBoard class", () => {
  let gameBoard: Gameboard = new Gameboard();
  beforeEach(() => {
    gameBoard = new Gameboard();
  });
  it("returns an array of tiles", () => {
    expect(gameBoard.getTiles()).toHaveLength(8);
  });
  it("returns an array of pieces", () => {
    expect(gameBoard.getPieces()).toHaveLength(32);
  });

  it("has a function that sets all tiles safe", () => {
    gameBoard.setAllTilesNotUnderAttack();
    gameBoard.getTiles().forEach((tileColumn: Tile[]) => {
      tileColumn.forEach((tile: Tile) => {
        expect(tile.getIsUnderAttack()).toEqual(false);
      });
    });
  });
});

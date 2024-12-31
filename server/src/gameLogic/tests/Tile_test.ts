import { beforeEach, describe, it } from "jsr:@std/testing/bdd";
import { Tile } from "../Tile.ts";
import { expect } from "jsr:@std/expect/expect";
import { Piece } from "../../pieces/Piece.ts";

describe("Tile class", () => {
  let tile: Tile;
  beforeEach(() => {
    tile = new Tile(3, 5);
  });
  it("constructs", () => {
    expect(tile.getX()).toBe(3);
    expect(tile.getY()).toBe(5);
    expect(tile.getIsUnderAttack()).toBe(false);
  });
  it("constructs with piece being null", () => {
    expect(tile.getPiece()).toBe(null);
  });
  it("has a function for setting piece attribute", () => {
    const anotherTile = new Tile(5, 7);
    const piece = new Piece(anotherTile, 0);
    tile.setPiece(piece);
    expect(tile.getPiece()).toBe(piece);
  });
  it("can set isUnderAttack to true", () => {
    tile.setIsUnderAttack(true);
    expect(tile.getIsUnderAttack()).toBe(true);
  });
  it("can set isUnderAttack to false", () => {
    tile.setIsUnderAttack(true);
    tile.setIsUnderAttack(false);
    expect(tile.getIsUnderAttack()).toBe(false);
  });
});

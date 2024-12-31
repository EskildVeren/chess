import { beforeEach, describe, it } from "jsr:@std/testing/bdd";
import { FirstMovePiece } from "../FirstMovePiece.ts";
import { Tile } from "../../gameLogic/Tile.ts";
import { expect } from "jsr:@std/expect";
import { Piece } from "../Piece.ts";

describe("First-move piece", () => {
  const tile = new Tile(3, 6);
  let piece = new FirstMovePiece(tile, 0);
  beforeEach(() => {
    piece = new FirstMovePiece(tile, 0);
  });
  it("is a piece", () => {
    expect(piece).toBeInstanceOf(Piece);
  });
  it("Constructs with attribute firstmove being false", () => {
    expect(piece.getHasMoved()).toEqual(false);
  });
  it("Firstmove to be false after moving once", () => {
    const newTile = new Tile(2, 5);
    piece.moveTo(newTile);
    expect(piece.getHasMoved()).toEqual(true);
  });
  it("Firstmove to be false after moving twice", () => {
    const newTile = new Tile(2, 5);
    piece.moveTo(newTile);
    piece.moveTo(tile);
    expect(piece.getHasMoved()).toEqual(true);
  });
});

import { describe, it } from "jsr:@std/testing/bdd";
import { Tile } from "../Tile.ts";
import { expect } from "jsr:@std/expect/expect";
import { getPieceForTile } from "../getPieceForTile.ts";
import { Pawn } from "../../pieces/Pawn.ts";
import { Queen } from "../../pieces/Queen.ts";
import { King } from "../../pieces/King.ts";
import { Bishop } from "../../pieces/Bishop.ts";
import { Knight } from "../../pieces/Knight.ts";
import { Rook } from "../../pieces/Rook.ts";

describe("getPieceForTile function", () => {
  const whitePlayerNumber = 1;
  const blackPlayerNumber = 0;
  const whitePawnTiles = getWhitePawnTiles();
  const whiteRookTiles = getWhiteRookTiles();
  const whiteKnightTiles = getWhiteKnightTiles();
  const whiteBishopTiles = getWhiteBishopTiles();
  const whiteQueenTile = getWhiteQueenTile();
  const whiteKingTile = getWhiteKingTile();

  const blackPawnTiles = getBlackPawnTiles();
  const blackRookTiles = getBlackRookTiles();
  const blackKnightTiles = getBlackKnightTiles();
  const blackBishopTiles = getBlackBishopTiles();
  const blackQueenTile = getBlackQueenTile();
  const blackKingTile = getBlackKingTile();

  const nullTiles = getNullTiles();

  it("places white pawns correctly", () => {
    whitePawnTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Pawn);
      expect(piece?.getPlayer()).toEqual(whitePlayerNumber);
    });
  });
  it("places white rooks correctly", () => {
    whiteRookTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Rook);
      expect(piece?.getPlayer()).toEqual(whitePlayerNumber);
    });
  });
  it("places white knights correctly", () => {
    whiteKnightTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Knight);
      expect(piece?.getPlayer()).toEqual(whitePlayerNumber);
    });
  });
  it("places white bishops correctly", () => {
    whiteBishopTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Bishop);
      expect(piece?.getPlayer()).toEqual(whitePlayerNumber);
    });
  });
  it("places white queen correctly", () => {
    const piece = getPieceForTile(whiteQueenTile);
    expect(piece).toBeInstanceOf(Queen);
    expect(piece?.getPlayer()).toEqual(whitePlayerNumber);
  });
  it("places white king correctly", () => {
    const piece = getPieceForTile(whiteKingTile);
    expect(piece).toBeInstanceOf(King);
    expect(piece?.getPlayer()).toEqual(whitePlayerNumber);
  });

  it("places black pawns correctly", () => {
    blackPawnTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Pawn);
      expect(piece?.getPlayer()).toEqual(blackPlayerNumber);
    });
  });
  it("places black rooks correctly", () => {
    blackRookTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Rook);
      expect(piece?.getPlayer()).toEqual(blackPlayerNumber);
    });
  });
  it("places black knights correctly", () => {
    blackKnightTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Knight);
      expect(piece?.getPlayer()).toEqual(blackPlayerNumber);
    });
  });
  it("places black bishops correctly", () => {
    blackBishopTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBeInstanceOf(Bishop);
      expect(piece?.getPlayer()).toEqual(blackPlayerNumber);
    });
  });
  it("places black queen correctly", () => {
    const piece = getPieceForTile(blackQueenTile);
    expect(piece).toBeInstanceOf(Queen);
    expect(piece?.getPlayer()).toEqual(blackPlayerNumber);
  });
  it("places black king correctly", () => {
    const piece = getPieceForTile(blackKingTile);
    expect(piece).toBeInstanceOf(King);
    expect(piece?.getPlayer()).toEqual(blackPlayerNumber);
  });
  it("has no piece in tiles that shouldnt have", () => {
    nullTiles.forEach((tile: Tile) => {
      const piece = getPieceForTile(tile);
      expect(piece).toBe(null);
    });
  });
});

function getWhitePawnTiles() {
  return [
    new Tile(0, 6),
    new Tile(1, 6),
    new Tile(2, 6),
    new Tile(3, 6),
    new Tile(4, 6),
    new Tile(5, 6),
    new Tile(6, 6),
    new Tile(7, 6),
  ];
}
function getBlackPawnTiles() {
  return [
    new Tile(0, 1),
    new Tile(1, 1),
    new Tile(2, 1),
    new Tile(3, 1),
    new Tile(4, 1),
    new Tile(5, 1),
    new Tile(6, 1),
    new Tile(7, 1),
  ];
}

function getWhiteRookTiles() {
  return [new Tile(0, 7), new Tile(7, 7)];
}
function getWhiteKnightTiles() {
  return [new Tile(1, 7), new Tile(6, 7)];
}
function getWhiteBishopTiles() {
  return [new Tile(2, 7), new Tile(5, 7)];
}
function getWhiteQueenTile() {
  return new Tile(3, 7);
}
function getWhiteKingTile() {
  return new Tile(4, 7);
}

function getBlackRookTiles() {
  return [new Tile(0, 0), new Tile(7, 0)];
}
function getBlackKnightTiles() {
  return [new Tile(1, 0), new Tile(6, 0)];
}
function getBlackBishopTiles() {
  return [new Tile(2, 0), new Tile(5, 0)];
}
function getBlackQueenTile() {
  return new Tile(3, 0);
}
function getBlackKingTile() {
  return new Tile(4, 0);
}
function getNullTiles() {
  return [
    new Tile(0, 2),
    new Tile(1, 2),
    new Tile(2, 2),
    new Tile(3, 2),
    new Tile(4, 2),
    new Tile(5, 2),
    new Tile(6, 2),
    new Tile(7, 2),

    new Tile(0, 3),
    new Tile(1, 3),
    new Tile(2, 3),
    new Tile(3, 3),
    new Tile(4, 3),
    new Tile(5, 3),
    new Tile(6, 3),
    new Tile(7, 3),

    new Tile(0, 4),
    new Tile(1, 4),
    new Tile(2, 4),
    new Tile(3, 4),
    new Tile(4, 4),
    new Tile(5, 4),
    new Tile(6, 4),
    new Tile(7, 4),

    new Tile(0, 5),
    new Tile(1, 5),
    new Tile(2, 5),
    new Tile(3, 5),
    new Tile(4, 5),
    new Tile(5, 5),
    new Tile(6, 5),
    new Tile(7, 5),
  ];
}

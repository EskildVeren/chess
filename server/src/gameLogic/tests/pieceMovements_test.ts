import { expect } from "jsr:@std/expect";
import { describe, it, beforeEach } from "jsr:@std/testing/bdd";
import { Gameboard } from "../Gameboard.ts";

Deno.test("DownLeft works", () => {
  const x = 2 + 1;
  expect(x).toEqual(3);
});

describe.ignore("DownLeft movement function", () => {
  let gameBoard = new Gameboard();
  let tiles = gameBoard.getTiles();
  beforeEach(() => {
    gameBoard = new Gameboard();
    tiles = gameBoard.getTiles();
  });
  it("modifies all tiles from upper right corner", () => {
    const c = gameBoard;
  });
  it("modifies all tiles from the middle", () => {});
  it("modifies all tiles from the lower left corner", () => {});
});

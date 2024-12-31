import type { Piece } from "../pieces/Piece.ts";
import type { Tile } from "./Tile.ts";
import { calculateMoves, type MovementRule } from "./standardMovement.ts";

const downLeftRule: MovementRule = { x: -1, y: 1, repeating: true };

export const downLeft = (piece: Piece, tiles: Tile[][]) => calculateMoves(piece, piece.getTile(), downLeftRule, tiles);

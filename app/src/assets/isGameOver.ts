import { King } from "../chessPieces/king";

export function isGameOver(kings: King[]) {
  kings.forEach((king: King) => {
    const isChecked = king.tile.isUnderAttack;
    const cantMove = king.validMoves.length > 0;

    if (isChecked && cantMove) {
      return true;
    }
  });

  return false;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGameOver = isGameOver;
function isGameOver(kings) {
    kings.forEach(function (king) {
        var isChecked = king.tile.isUnderAttack;
        var cantMove = king.validMoves.length > 0;
        if (isChecked && cantMove) {
            return true;
        }
    });
    return false;
}

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
var movementRules_1 = require("../assets/movementRules");
var chessPiece_1 = require("../gameObjects/chessPiece");
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(x, y, boardSize, owner, spritesheetName, tile) {
        var _this = _super.call(this, x, y, boardSize, owner, spritesheetName, tile) || this;
        _this.movementRules = (0, movementRules_1.getRookMoves)();
        _this.spriteX = 200;
        _this.spriteY = 0;
        _this.firstMove = true;
        return _this;
    }
    return Rook;
}(chessPiece_1.ChessPiece));
exports.Rook = Rook;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = require("socket.io-client");
function drawBoard(boardWidth, blackColor, whiteColor, ctx) {
    var tileWidth = boardWidth / 8;
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            var fillColor = whiteColor;
            if (tileIsBlack(x, y)) {
                fillColor = blackColor;
            }
            ctx.fillStyle = fillColor;
            ctx.fillRect(x * tileWidth, y * tileWidth, tileWidth, tileWidth);
        }
    }
}
function drawPieces(pieces, boardSize, tilePaddingPercent, ctx) {
    var tileSize = boardSize / 8;
    pieces.forEach(function (piece) {
        drawPiece(piece, tileSize, tilePaddingPercent, ctx);
    });
}
// If x and y share parity, then the tile should be black
function tileIsBlack(x, y) {
    var xIsEven = x % 2;
    var yIsEven = y % 2;
    var xAndYShareParity = xIsEven == yIsEven;
    return xAndYShareParity;
}
function drawPiece(piece, tileSize, tilePaddingPercent, ctx) {
    var tilePadding = (tileSize / 200) * tilePaddingPercent;
    var xPixelCord = piece.x * tileSize + tilePadding;
    var yPixelCord = piece.y * tileSize + tilePadding;
    var pieceSize = tileSize - tilePadding * 2;
    ctx.fillStyle = piece.color;
    ctx.fillRect(xPixelCord, yPixelCord, pieceSize, pieceSize);
}
var canvas = document.querySelector("canvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas not found");
}
var ctx = canvas.getContext("2d");
if (!(ctx instanceof CanvasRenderingContext2D)) {
    throw new Error("Canvas not found");
}
var boardSize = 800;
canvas.height = boardSize;
canvas.width = boardSize;
var pieces = [];
for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 2; y++) {
        pieces.push({ x: x, y: y, color: "grey" });
    }
}
for (var x = 0; x < 8; x++) {
    for (var y = 6; y < 8; y++) {
        pieces.push({ x: x, y: y, color: "brown" });
    }
}
drawBoard(boardSize, "black", "white", ctx);
drawPieces(pieces, boardSize, 30, ctx);
var socket = (0, socket_io_client_1.io)("http://localhost:3000/", {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd",
    },
});
socket.io.on("open", function () {
    console.log("hiiii");
    console.log();
});
socket.io.on("ping", function () {
    console.log("PING");
});
socket.io.on("data", function (data) {
    document.write(data);
});

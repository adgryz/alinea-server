"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gamesUpdated_1 = __importDefault(require("./gamesUpdated"));
const gameStateUpdated_1 = __importDefault(require("./gameStateUpdated"));
const gameStarted_1 = __importDefault(require("./gameStarted"));
const playerTurnChanged_1 = __importDefault(require("./playerTurnChanged"));
const gameWon_1 = __importDefault(require("./gameWon"));
const draw_1 = __importDefault(require("./draw"));
const index_1 = require("../index");
exports.default = {
    gamesUpdated: gamesUpdated_1.default(index_1.io),
    gameStateUpdated: gameStateUpdated_1.default(index_1.io),
    gameStarted: gameStarted_1.default(index_1.io),
    playerTurnChanged: playerTurnChanged_1.default(index_1.io),
    gameWon: gameWon_1.default(index_1.io),
    draw: draw_1.default(index_1.io),
};

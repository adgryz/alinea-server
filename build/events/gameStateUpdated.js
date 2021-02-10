"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameStateUpdated = (io) => (gameState) => {
    io.emit('gameStateUpdated', gameState);
};
exports.default = gameStateUpdated;

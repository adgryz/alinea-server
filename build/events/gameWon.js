"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameWon = (io) => (payload) => {
    io.emit('gameWon', payload);
};
exports.default = gameWon;

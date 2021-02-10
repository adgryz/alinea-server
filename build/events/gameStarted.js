"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameStarted = (io) => (payload) => {
    io.emit('gameStarted', payload);
};
exports.default = gameStarted;

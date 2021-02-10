"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerTurnChanged = (io) => (payload) => {
    io.emit('playerTurnChanged', payload);
};
exports.default = playerTurnChanged;

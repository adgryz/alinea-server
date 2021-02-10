"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gamesUpdated = (io) => (games) => {
    io.emit('gamesUpdated', games);
};
exports.default = gamesUpdated;

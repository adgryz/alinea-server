"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const events_1 = __importDefault(require("../events"));
const winConfigurations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const checkIfGameEnded = (fields) => {
    winConfigurations.forEach(config => {
        const firstFieldValue = fields[config[0]];
        if (firstFieldValue && config.every(index => fields[index] === firstFieldValue)) {
            events_1.default.gameWon({ winnerId: firstFieldValue });
            return;
        }
    });
    if (fields.every(value => value)) {
        events_1.default.draw();
    }
};
const markSpot = (socket) => {
    let { games } = model_1.state;
    socket.on('markSpot', ({ playerId, gameId, index }) => {
        const gameToUpdate = games.find(game => game.id === gameId);
        if (!gameToUpdate || !gameToUpdate.gameState) {
            return;
        }
        gameToUpdate.gameState.fields[index] = playerId;
        events_1.default.gameStateUpdated(gameToUpdate.gameState);
        const { currentPlayerId } = gameToUpdate.gameState;
        const nextPlayerId = gameToUpdate.playersIds.filter(id => id !== currentPlayerId)[0];
        gameToUpdate.gameState.currentPlayerId = nextPlayerId;
        events_1.default.playerTurnChanged({ currentPlayerId: nextPlayerId });
        console.log('');
        console.log(`Game  ${gameId} updated`);
        console.log(`Player  ${playerId} marked ${index}`);
        checkIfGameEnded(gameToUpdate.gameState.fields);
    });
};
exports.default = markSpot;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const events_1 = __importDefault(require("../events"));
const leaveGame = (socket) => socket.on('leaveGame', ({ playerId }) => {
    console.log('');
    console.log(`${playerId} leaves the game`);
    let { games } = model_1.state;
    const gameToLeave = games.find(game => game.playersIds.find(id => id === playerId));
    if (!gameToLeave) {
        return;
    }
    gameToLeave.playersIds = gameToLeave === null || gameToLeave === void 0 ? void 0 : gameToLeave.playersIds.filter(id => id !== playerId);
    gameToLeave.currentPlayersNumber--;
    if (gameToLeave.playersIds.length === 0) { // Remove empty game
        games = games.filter(game => game.id !== gameToLeave.id);
        console.log('Game is removed');
    }
    else if (playerId === gameToLeave.ownerId) { // If owner left setup new owner
        gameToLeave.ownerId = gameToLeave.playersIds[0];
        console.log(`New owner of the game is ${gameToLeave.ownerId}`);
    }
    events_1.default.gamesUpdated(games);
});
exports.default = leaveGame;

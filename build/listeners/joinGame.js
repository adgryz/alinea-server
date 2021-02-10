"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const events_1 = __importDefault(require("../events"));
const joinGame = (socket) => socket.on('joinGame', ({ playerId, gameId }) => {
    let { games } = model_1.state;
    const gameToJoin = games.find(game => game.id === gameId);
    if (gameToJoin.playersNumber === gameToJoin.currentPlayersNumber) {
        return;
    }
    console.log('');
    console.log(`Player ${playerId} joins ${gameId}`);
    if (!gameToJoin) {
        return;
    }
    gameToJoin.playersIds.push(playerId);
    gameToJoin.currentPlayersNumber++;
    events_1.default.gamesUpdated(games);
});
exports.default = joinGame;

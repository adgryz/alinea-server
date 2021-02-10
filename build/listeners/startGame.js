"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const events_1 = __importDefault(require("../events"));
const startGame = (socket) => {
    let { games } = model_1.state;
    const initialFields = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    socket.on('startGame', ({ gameId }) => {
        const gameToStart = games.find(game => game.id === gameId);
        if (!gameToStart || gameToStart.currentPlayersNumber !== gameToStart.playersNumber) {
            return;
        }
        console.log('');
        console.log(`Game  ${gameId} has started`);
        gameToStart.isInProgress === true;
        gameToStart.gameState = {
            fields: initialFields,
            currentPlayerId: gameToStart.ownerId,
        };
        const playersShapes = {
            [gameToStart.playersIds[0]]: "cross",
            [gameToStart.playersIds[1]]: "circle",
        };
        events_1.default.gamesUpdated(games);
        events_1.default.gameStarted({
            gameState: gameToStart.gameState,
            playersShapes,
            currentPlayerId: gameToStart.ownerId
        });
    });
};
exports.default = startGame;

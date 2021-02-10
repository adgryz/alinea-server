"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const events_1 = __importDefault(require("../events"));
const createGame = (socket) => {
    let { games } = model_1.state;
    socket.on('createGame', ({ playerId, playersNumber }) => {
        console.log('');
        console.log(`New game is created by ${playerId}`);
        games.push({
            ownerId: playerId,
            playersIds: [playerId],
            id: new Date().getTime().toString(),
            playersNumber,
            currentPlayersNumber: 1,
            isInProgress: false,
        });
        events_1.default.gamesUpdated(games);
    });
};
exports.default = createGame;

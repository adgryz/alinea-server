import { Socket } from "socket.io";

import { GameShape, GameState, state } from '../model';
import events from '../events';

type StartGameInput = {
    gameId: string;
}

const startGame = (socket: Socket) => {
    let { games } = state;

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

    socket.on('startGame', ({ gameId }: StartGameInput) => {
        const gameToStart = games.find(game => game.id === gameId);
        if (!gameToStart || gameToStart!.currentPlayersNumber !== gameToStart!.playersNumber) {
            return;
        }
        console.log('');
        console.log(`Game  ${gameId} has started`);
        gameToStart.isInProgress === true;
        gameToStart.gameState = {
            fields: initialFields,
            currentPlayerId: gameToStart.ownerId,
        };
        const playersShapes: Record<string, GameShape> = {
            [gameToStart.playersIds[0]]: "cross",
            [gameToStart.playersIds[1]]: "circle",
        }
        events.gamesUpdated(games);
        events.gameStarted({
            gameState: gameToStart.gameState,
            playersShapes,
            currentPlayerId: gameToStart.ownerId
        });
    })
}

export default startGame;
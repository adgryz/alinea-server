import { Socket } from "socket.io";

import { GameState, state } from '../model';
import events from '../events';

type MarkSpotInput = {
    playerId: string;
    gameId: string;
    index: number;
}

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

const checkIfGameEnded = (fields: (string | null)[]) => {
    winConfigurations.forEach(config => {
        const firstFieldValue = fields[config[0]];
        if (firstFieldValue && config.every(index => fields[index] === firstFieldValue)) {
            events.gameWon({ winnerId: (firstFieldValue as string) });
            return;
        }
    })

    if (fields.every(value => value)) {
        events.draw();
    }

}

const markSpot = (socket: Socket) => {
    let { games } = state;

    socket.on('markSpot', ({ playerId, gameId, index }: MarkSpotInput) => {
        const gameToUpdate = games.find(game => game.id === gameId);
        if (!gameToUpdate || !gameToUpdate.gameState) {
            return;
        }

        gameToUpdate.gameState.fields[index] = playerId;

        events.gameStateUpdated(gameToUpdate.gameState);
        const { currentPlayerId } = gameToUpdate.gameState;
        const nextPlayerId = gameToUpdate.playersIds.filter(id => id !== currentPlayerId)[0];
        gameToUpdate.gameState.currentPlayerId = nextPlayerId;
        events.playerTurnChanged({ currentPlayerId: nextPlayerId })

        console.log('');
        console.log(`Game  ${gameId} updated`);
        console.log(`Player  ${playerId} marked ${index}`);
        checkIfGameEnded(gameToUpdate.gameState.fields);
    })
}

export default markSpot;
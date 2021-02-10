import { Server } from 'socket.io';

import { GameState } from '../model';

const gameStateUpdated = (io: Server) => (gameState: GameState) => {
    io.emit('gameStateUpdated', gameState)
};

export default gameStateUpdated;
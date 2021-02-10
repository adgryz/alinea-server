import { Server } from 'socket.io';
import { GameShape, GameState } from '../model';

interface IGameStartedPayload {
    gameState: GameState
    playersShapes: Record<string, GameShape>
    currentPlayerId: string
}

const gameStarted = (io: Server) => (payload: IGameStartedPayload) => {
    io.emit('gameStarted', payload)
};

export default gameStarted;
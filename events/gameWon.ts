import { Server } from 'socket.io';

interface IGameWonPayload {
    winnerId: string
}

const gameWon = (io: Server) => (payload: IGameWonPayload) => {
    io.emit('gameWon', payload)
};

export default gameWon;
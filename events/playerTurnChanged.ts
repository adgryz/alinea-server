import { Server } from 'socket.io';

interface IPlayerTurnChangedPayload {
    currentPlayerId: string
}

const playerTurnChanged = (io: Server) => (payload: IPlayerTurnChangedPayload) => {
    io.emit('playerTurnChanged', payload)
};

export default playerTurnChanged;
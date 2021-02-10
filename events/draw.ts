import { Server } from 'socket.io';

const draw = (io: Server) => () => {
    io.emit('draw')
};

export default draw;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const listeners_1 = __importDefault(require("./listeners"));
const app = express_1.default();
const server = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
    }
});
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Coimbra Server');
});
server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
exports.io.on("connection", (socket) => {
    listeners_1.default(socket);
});

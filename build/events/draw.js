"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const draw = (io) => () => {
    io.emit('draw');
};
exports.default = draw;

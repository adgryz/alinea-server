"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const initListeners = (socket) => {
    const listenersPath = path_1.default.resolve(__dirname);
    fs_1.default.readdir(listenersPath, (err, files) => {
        if (err) {
            process.exit(1);
        }
        files.map((fileName) => {
            if (fileName !== "index.ts") {
                const listener = require(path_1.default.resolve(__dirname, fileName)).default;
                listener(socket);
            }
        });
    });
};
exports.default = initListeners;

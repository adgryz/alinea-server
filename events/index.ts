import gamesUpdatedEvent from './gamesUpdated';
import gameStateUpdatedEvent from './gameStateUpdated';
import gameStartedEvent from './gameStarted';
import playerTurnChangedEvent from './playerTurnChanged';
import gameWonEvent from './gameWon';
import drawEvent from './draw';

import { io } from '../index';

export default {
    gamesUpdated: gamesUpdatedEvent(io),
    gameStateUpdated: gameStateUpdatedEvent(io),
    gameStarted: gameStartedEvent(io),
    playerTurnChanged: playerTurnChangedEvent(io),
    gameWon: gameWonEvent(io),
    draw: drawEvent(io),
}
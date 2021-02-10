export interface IGame {
    ownerId: string;
    playersIds: string[];
    id: string;
    playersNumber: number;
    currentPlayersNumber: number;
    isInProgress: boolean;
    gameState?: GameState;
}

export interface GameState {
    fields: (string | null)[];
    currentPlayerId: string;
}

interface IState {
    games: IGame[];
}

export let state: IState = {
    games: [],
}

export type GameShape = "cross" | "circle"

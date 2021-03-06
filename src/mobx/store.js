// -- dependencies --
import { RouterStore } from 'mobx-router';
// -- app --
import PlayerStore from './stores/playerStore';
import GameStore from './stores/gameStore';
import PreparationStore from './stores/preparationStore';

// constants
const title = 'Battleship';
const players = ['player1', 'player2'];
export const rules = {
    boardWidth: 10,
    ships: [[5,1], [4,1], [3,1], [2,2]],
};

class RootStore{
    constructor() {
        this.players = new PlayerStore(this, ...players);
        this.game = new GameStore(this, title, rules);
        this.preparation = new PreparationStore(this, rules);
        this.router = new RouterStore();
    }
}

const rootStore = new RootStore();

export default rootStore;

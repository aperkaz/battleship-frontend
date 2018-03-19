import {observable, action} from 'mobx';

const getOpponentIndex = player => player === 0? 1: 0;

class PlayerStore {

    constructor(rootStore, player1, player2){
        this.rootStore = rootStore;
        this.list.push(player1);
        this.list.push(player2);
    }

    @observable turn = 0;
    @observable turnWait = true;
    @observable list = [];


    @action.bound
    changeTurn(){
        this.turn = getOpponentIndex(this.turn);
    }

    @action.bound
    toggleTurnWait(){
        console.log('toggle waitTurn');
        this.turnWait = !this.turnWait;
    }

    reset(){
        this.turn = 0;
        this.turnWait = true;
    }
}

export default PlayerStore;
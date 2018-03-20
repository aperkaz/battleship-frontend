import {observable, action} from 'mobx';

class PlayerStore {

    constructor(rootStore, player1, player2){
        this.rootStore = rootStore;
        this.list.push(player1);
        this.list.push(player2);
    }

    @observable turn = 0;
    @observable turnWait = true;
    @observable list = [];

    getOpponentIndex(){
        return this.turn === 0? 1: 0;
    }

    isLastPlayer(){
        return this.turn === (this.list.length-1);
    }

    @action.bound
    changeTurn(){
        this.turn = this.getOpponentIndex();
    }

    @action.bound
    toggleTurnWait(){
        this.turnWait = !this.turnWait;
    }

    reset(){
        this.turn = 0;
        this.turnWait = true;
    }
}

export default PlayerStore;
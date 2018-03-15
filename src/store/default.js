import {observable, action, computed} from 'mobx';


const boardSize = 10;

const emptyRow = Array(boardSize).fill(0);
const emptyBoard = Array(boardSize).fill(emptyRow);

const initialBoardSet = {
    boards: [[emptyBoard, emptyBoard],[emptyBoard, emptyBoard]],
};


const getContraryPlayer = player => player === 0? 1: 0;

class Store {


    @observable game = {
        stageIndex: 0,
        stages: ['preparation', 'start'],
        boards: initialBoardSet,
    };

    @action.bound
    nextGameStage(){
        this.game.stageIndex++;
    }


    @observable players = {
        turn: 0,
        list: ['player1', 'player2'],
    };

    @action.bound
    changePlayerTurn(){
        this.players.turn = getContraryPlayer(this.players.turn);
    }





    @action.bound
    setBoat(row, col, boatType){

    }

    @action.bound
    sendHit(){

    }


    @action.bound
    resetGame() {
        this.game.stageIndex = 0;
        this.players.turn = 0;
        this.game.boards = Object.assign({}, initialBoardSet);
    }
}


export default new Store();
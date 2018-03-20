import {observable, action} from 'mobx';
import axios from 'axios';
import {
    createEmptyBoard,
    CellCodes,
    isGameFinished,
    isShipCode,
    numberToCharCoordinate
} from '../../helpers';
import views from '../../config/views';


class GameStore {
    constructor(rootStore, title, rules){
        this.rootStore = rootStore;
        this.title = title;
        this.rules = rules;
        this.gameFinished = false;
        this.initGame();
        setInterval(action(function tick() {
            this.timer += 1;
        }), 1000);
    }

    initGame(){
        this.gameFinished = false;
        const boardWidth = this.rules.boardWidth;
        this.boards = [
            [createEmptyBoard(boardWidth),createEmptyBoard(boardWidth)],
            [createEmptyBoard(boardWidth),createEmptyBoard(boardWidth)]
        ];
        this.timer = 0;
    }

    @observable title = '';
    @observable rules = {};
    @observable gameFinished = false;

    @observable boards = [[null,null],[null,null]];

    @action.bound
    sendHit(row, col){

        // defer indexes
        row--;
        col--;

        const playerIndex = this.rootStore.players.turn;
        const opponentIndex = this.rootStore.players.getOpponentIndex();

        const opponentBoard = this.boards[0][opponentIndex];
        const selectedCell = opponentBoard[row][col];

        if(isShipCode(selectedCell)){
            const colInChar = numberToCharCoordinate(col);
            alert(`hit! [${row + 1},${colInChar}]`);
            this.boards[0][opponentIndex][row][col] = CellCodes.hit;
            this.boards[1][playerIndex][row][col] = CellCodes.hit;
        }else{
            const colInChar = numberToCharCoordinate(col);
            alert(`miss![${row + 1},${colInChar}]`);
            this.boards[0][opponentIndex][row][col] = CellCodes.missed;
            this.boards[1][playerIndex][row][col] = CellCodes.missed;
        }

        const board = this.boards[0][opponentIndex];
        if(isGameFinished(board)){
            console.log('game finished');
            // notify
            this.rootStore.router.goTo(views.celebration);
            // send REST call
            // TODO
            axios.post('/scores', {
                players: this.rootStore.players.list,
                winner: this.rootStore.players.list[this.rootStore.players.turn],
                gameTime: this.timer,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }else{
            // end of turn
            this.rootStore.players.toggleTurnWait();
            this.rootStore.players.changeTurn();
        }

    }

    @action.bound
    newGame(){
     this.reset();
     this.rootStore.players.reset();
     this.rootStore.preparation.reset();

     this.rootStore.router.goTo(views.start);
    }

    reset() {
        this.initGame();
    }

}

export default GameStore;
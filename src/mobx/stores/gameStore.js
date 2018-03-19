import {observable, action} from 'mobx';
import {CellCodes, getOpponent} from "../../helpers";


const createEmptyBoard = width => {
    const emptyRow = Array(width).fill(CellCodes.default);
    return Array(width).fill(emptyRow);
};

class GameStore {
    constructor(rootStore, title, rules){
        this.rootStore = rootStore;
        this.title = title;
        this.rules = rules;
        this.initBoards();
        this.initPreparation();
    }

    initBoards(){
        const boardWidth = this.rules.boardWidth;
        this.tempBoard = createEmptyBoard(boardWidth);
        this.boards = [
            [createEmptyBoard(boardWidth),createEmptyBoard(boardWidth)],
            [createEmptyBoard(boardWidth),createEmptyBoard(boardWidth)]
        ];
    }

    /*
    @action.bound
    setShipCell(row, col){
        console.log(`about to set ship cell in ${row}: ${col}`);

        const currentShipIndex = this.preparation.shipIndex;

        const shipSize = this.rules.ships[currentShipIndex][0];
        const shipCount = this.rules.ships[currentShipIndex][1];

        let board = this.preparation.board;
        let currentShip = this.preparation.current;

        // adequate board indexes
        board[row-1][col-1] = shipSize;
        this.preparation.current.placedCells++;

        //is ship complete
        if(this.preparation.current.placedCells === shipSize){
            this.preparation.current.placedCells = 0;
            this.preparation.current.count++;
            console.log('last ship-cell placed');
        }

        // is the last ship of a type
        if(this.preparation.current.count === shipCount) {
            console.log('last ship of type placed');
            this.preparation.current.count = 0;
            this.preparation.current.placedCells = 0;


            // is the last ship for the player
            if (this.preparation.shipIndex === (this.rules.ships.length -1 )){
                this.boards[0][this.rootStore.playerStore.turn] = this.preparation.board;
                this.preparation();
            }else {
                this.preparation.shipIndex++;
            }
        }
    }
*/

    @observable preparation = {};

    initPreparation(){
        this.preparation.selectCell = (row, col) => console.log(this.setShipCell(row, col));
        this.preparation.board = createEmptyBoard(this.rules.boardWidth);
        this.preparation.shipIndex = 0;
        this.preparation.current = {
            shipPieces: 0,
            shipCount: 0,
        };
        this.preparation.playerFinished = false;
        this.preparation.finished = false;
        this.preparation.reset = () => this.initPreparation();
    }

    @observable title = '';
    @observable rules = {};

    @observable boards = [[null,null],[null,null]];



    @action.bound
    resetPreparation(){
        console.log('resetting preparation');
        this.initPreparation();
    }
    /*
    @action.bound
    prepareNextPlayer(){
        this.shipPreparation.playerFinished = false;
        this.changePlayerTurn();
    }

    advancePreparation(){
        console.log('end preparation or change turn');
        if(this.players.turn === (this.players.list.length-1)){
            this.changePlayerTurn();
            this.shipPreparation.finished = true;
        }else {
            this.shipPreparation.shipIndex = 0;
            this.shipPreparation.board = emptyBoard;
            this.playerFinished = true;
        }
    }

*/


/*
    @action.bound
    sendHit(row, col){
        console.log('send hit to', row ,':', col);

        const opponentIndex = getOpponent(this.players.turn);

        // defer indexes
        row--;
        col--;

        const opponentBoard = this.boards[0][opponentIndex];
        const selectedCell = opponentBoard[row][col];

        if(cellCodes.boats.includes(selectedCell)){
            alert('hit!');
            this.boards[0][opponentIndex][row][col] = cellCodes.hit;
            this.boards[1][this.players.turn][row][col] = cellCodes.hit;
        }else{
            alert('miss!');
            this.boards[0][opponentIndex][row][col] = cellCodes.missed;
            this.boards[1][this.players.turn][row][col] = cellCodes.missed;
        }

        // TODO - sink ship ?

        // TODO - game won ?




        this.turnWait();
        this.changePlayerTurn();

    }

*/
    @action.bound
    reset() {
        this.initBoards();
        this.initPreparation();
    }

}

export default GameStore;
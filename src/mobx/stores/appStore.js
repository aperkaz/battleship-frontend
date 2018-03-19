import {observable, action} from 'mobx';
import { getOpponent, cellCodes } from '../../helpers';
/*
const boardSize = 3;

const emptyRow = Array(boardSize).fill(0);
const emptyBoard = Array(boardSize).fill(emptyRow);


const initialBoardSet = [[emptyBoard,emptyBoard],[emptyBoard,emptyBoard]];

const initialPreparation = {
    board: emptyBoard,
    shipIndex: 0,
    current: {
        placedCells: 0,
        count: 0,
    },
    finished: false,
};
*/


class AppStore {
    /*
    @observable title = 'Battleship';





    @observable rules = {
        // ships: [[5,1], [4,1], [3,1], [2,2]],
        ships: [[3,1]],
    };


    @observable boards= initialBoardSet ;

    @observable transitionBoard = emptyBoard;

    @observable shipPreparation = {
        callback: (row, col) => this.setShipCell(row, col),
        board: emptyBoard,
        shipIndex: 0,
        current: {
            placedCells: 0,
            count: 0,
        },
        playerFinished: false,
        finished: false,
        resetPreparation:() => (
            this.board = emptyBoard,
            this.shipIndex = 0,
            this.current = {
                placedCells: 0,
                count: 0,
            },
            this.finished = false,
            this.playerFinished = false
        ),
    };


    @action.bound
    resetPreparation(){
        console.log('resetting preparation');
        this.shipPreparation =  {
            callback: (row, col) => this.setShipCell(row, col),
            ...initialPreparation
        };
    }

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


    @action.bound
    setShipCell(row, col){
        console.log(`about to set ship cell in ${row}: ${col}`);

        const currentShipIndex = this.shipPreparation.shipIndex;

        const shipSize = this.rules.ships[currentShipIndex][0];
        const shipCount = this.rules.ships[currentShipIndex][1];

        let board = this.shipPreparation.board;
        let currentShip = this.shipPreparation.current;

        // adequate board indexes
        board[row-1][col-1] = shipSize;
        this.shipPreparation.current.placedCells++;

        //is ship complete
        if(this.shipPreparation.current.placedCells === shipSize){
            this.shipPreparation.current.placedCells = 0;
            this.shipPreparation.current.count++;
            console.log('last ship-cell placed');
        }

        // is the last ship of a type
        if(this.shipPreparation.current.count === shipCount) {
            console.log('last ship of type placed');
            this.shipPreparation.current.count = 0;
            this.shipPreparation.current.placedCells = 0;


            // is the last ship for the player
            if (this.shipPreparation.shipIndex === (this.rules.ships.length -1 )){
                this.boards[0][this.players.turn] = this.shipPreparation.board;
                this.advancePreparation();
            }else {
                this.shipPreparation.shipIndex++;
            }
        }
    }

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


    @action.bound
    resetGame() {
        this.game.stageIndex = 0;
        this.players.turn = 0;
        this.game.boards = Object.assign({}, initialBoardSet);
    }
    */
}


export default AppStore;
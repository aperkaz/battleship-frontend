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
        this.boards = [
            [createEmptyBoard(boardWidth),createEmptyBoard(boardWidth)],
            [createEmptyBoard(boardWidth),createEmptyBoard(boardWidth)]
        ];
    }

    initPreparation(){
        this.preparation.callback = this.prepareCell;
        this.preparation.board = createEmptyBoard(this.rules.boardWidth);
        this.preparation.shipIndex = 0;
        this.preparation.current = {
            shipPieces: 0,
            shipCount: 0,
            isComplete: false,
            isTypeComplete: false,
        };
        this.preparation.playerFinished = false;
        this.preparation.finished = false;
    }

    @observable title = '';
    @observable rules = {};

    @observable boards = [[null,null],[null,null]];

    @observable preparation = {
        callback: null,
        board: null,
        shipIndex: 0,
        current: {
            shipPieces: 0,
            shipCount: 0,
            isComplete: false,
            isTypeComplete: false,
        },
        playerFinished: false,
        finished: false,
    };

    computeShipCompletion(){
        const currentShipPieces = this.preparation.current.shipPieces;
        const completeShipPieces = this.rules.ships[this.preparation.shipIndex][0];
        this.preparation.current.isComplete = currentShipPieces === completeShipPieces;
    }

    computeShipTypeCompletion(){
        const currentShipNumber = this.preparation.current.shipCount;
        const completeShipNumber = this.rules.ships[this.preparation.shipIndex][1];
        this.preparation.current.isTypeComplete = currentShipNumber === completeShipNumber;
    }

    @action.bound
    prepareCell(row,col){
        console.log(`about to set ship cell in ${row}: ${col}`);

        // defer indexes
        row--;
        col--;

        const currentShipIndex = this.preparation.shipIndex;
        const shipSize = this.rules.ships[currentShipIndex][0];
        let shipOnPreparation = this.preparation.current;

        // set ship-piece on board-cell
        this.preparation.board[row][col] = shipSize;
        shipOnPreparation.shipPieces++;

        this.computeShipCompletion();

        // is ship complete
        if(shipOnPreparation.isComplete){
            console.log('ship is complete!');
            shipOnPreparation.shipCount++;

            shipOnPreparation.shipPieces = 0;
            shipOnPreparation.isComplete = false;
        }

        // is ship-type complete
        this.computeShipTypeCompletion();

        if(shipOnPreparation.isTypeComplete){
            console.log('ship type is complete!');
            this.preparation.shipIndex++;

            shipOnPreparation.shipCount = 0;
            shipOnPreparation.isTypeComplete = false;
        }


        // is it the last ship of the player
        if(this.preparation.shipIndex === (this.rules.ships.length)) {
            console.log('last ship of player');
            this.preparation.shipIndex = 0;

            if(this.rootStore.players.isLastPlayer()){
                console.log('last player');
                this.preparation.finished = true;
            }else {
                console.log('NOT last player');
                this.preparation.playerFinished = true;
            }
        }
    }

    @action.bound
    prepareNextPlayer(){
        const playerIndex = this.rootStore.players.turn;
        this.boards[0][playerIndex] = this.preparation.board;

        this.rootStore.players.changeTurn();
        this.resetPreparation();
    }

    @action.bound
    resetPreparation(){
        console.log('resetting preparation');
        this.initPreparation();
    }

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
import {observable, action} from 'mobx';
import {createEmptyBoard, isValidBoard} from "../../helpers";

class PreparationStore {

    constructor(rootStore, rules){
        this.rootStore = rootStore;
        this.rules = rules;
        this.initPreparation();
    }

    initPreparation(){
        this.callback = this.prepareCell;
        this.board = createEmptyBoard(this.rules.boardWidth);
        this.validBoard = false;
        this.shipIndex = 0;
        this.current = {
            shipPieces: 0,
            shipCount: 0,
            isShipComplete: false,
            isShipTypeComplete: false,
        };
        this.playerFinished = false;
        this.finished = false;
    }

    rules = {};

    @observable callback;
    @observable board = [];
    @observable validBoard = false;
    @observable shipIndex;
    @observable current = {
                shipPieces: 0,
                shipCount: 0,
                isShipComplete: false,
                isShipTypeComplete: false
        };
    @observable playerFinished = false;
    @observable finished = false;

    computeShipCompletion(){
        const currentShipPieces = this.current.shipPieces;
        const completeShipPieces = this.rootStore.game.rules.ships[this.shipIndex][0];
        this.current.isShipComplete = currentShipPieces === completeShipPieces;
    }

    computeShipTypeCompletion(){
        const currentShipNumber = this.current.shipCount;
        const completeShipNumber = this.rootStore.game.rules.ships[this.shipIndex][1];
        this.current.isShipTypeComplete = currentShipNumber === completeShipNumber;
    }

    @action.bound
    prepareCell(row,col){
        console.log(`about to set ship cell in ${row}: ${col}`);

        if(this.playerFinished){
            return;
        }

        // defer indexes
        row--;
        col--;

        const currentShipIndex = this.shipIndex;
        const shipSize = this.rootStore.game.rules.ships[currentShipIndex][0];
        let shipOnPreparation = this.current;

        // set ship-piece on board-cell
        this.board[row][col] = shipSize;
        shipOnPreparation.shipPieces++;

        this.computeShipCompletion();

        if(shipOnPreparation.isShipComplete){
            shipOnPreparation.shipCount++;

            shipOnPreparation.shipPieces = 0;
            shipOnPreparation.isShipComplete = false;
        }


        this.computeShipTypeCompletion();

        if(shipOnPreparation.isShipTypeComplete){
            this.shipIndex++;

            shipOnPreparation.shipCount = 0;
            shipOnPreparation.isShipTypeComplete = false;
        }


        // is it the last ship of the player
        if(this.shipIndex === (this.rootStore.game.rules.ships.length)) {
            this.shipIndex = 0;

            // assert validity of board
            if(isValidBoard(this.board)){
                this.validBoard = true;
            }else{
                alert('please, follow the rules for setting the board');
                return;
            }

            if(this.rootStore.players.isLastPlayer()){
                this.finished = true;
                const playerIndex = this.rootStore.players.turn;
                this.rootStore.game.boards[0][playerIndex] = this.board;
            }else {
                this.playerFinished = true;
            }
        }
    }

    @action.bound
    prepareNextPlayer(){
        if(!this.validBoard){
            alert('please, follow the rules for setting the board');
            return;
        }

        const playerIndex = this.rootStore.players.turn;
        this.rootStore.game.boards[0][playerIndex] = this.board;

        this.rootStore.players.changeTurn();
        this.reset();
    }

    @action.bound
    reset(){
        this.initPreparation();
    }
}

export default PreparationStore;
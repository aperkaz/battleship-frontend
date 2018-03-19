import { assert } from 'chai';
import {
    CellCodes,
    isShipCode,
    createEmptyBoard,
    numberToCharCoordinate,
    isGameFinished,
    isValidBoard,
    traceShip
} from '../../src/helpers';

describe('src/helpers tests', () => {
    it('should identify ship codes', () => {
        const shipCode = CellCodes.ships[0];
        assert(isShipCode(shipCode), '2 should be a ship code');
    });

    it('should identify non-ship codes', () => {
        const nonShipCode = CellCodes.hit;
        assert(!isShipCode(nonShipCode), '-1 should not be a ship code');
    });

    it('should not fail with non-numeric inputs', () => {
        assert(!isShipCode('foo'), '"foo" should not be a ship code');
    });

    it('should create a board of specified width', () => {
        const board = createEmptyBoard(5);
        assert.equal(board[0].length, 5, 'board should be x5 wide');
    });

    it('should create a board of specified height', () => {
        const board = createEmptyBoard(5);
        assert.equal(board.length, 5, 'board should be of x5 height');
    });

    it('should create a board with defined content', () => {
        let board = createEmptyBoard(5);
        assert(board.every(row =>
            row.every(cellValue => (
                cellValue === CellCodes.default
            ))
        ),'all the values inside the empty board should be CellCodes.default');
    });

    it('should translate numeric to alphanumeric coordinates (base "a")', () => {
        assert.equal(numberToCharCoordinate(1), 'b', '"1" alphanumeric (baser "a"), should equal "b"');
    });

    it('should detect finished games on empty boards', () => {
        const board = createEmptyBoard(5);
        assert.equal(isGameFinished(board), true, 'empty board should trigger finished game')
    });

    it('should detect finished games on non-ship boards', () => {
        const defCel = CellCodes.default;
        const missCel = CellCodes.missed;
        let board = [
            [defCel,defCel],
            [defCel,missCel],
        ];
        assert.equal(isGameFinished(board), true, 'empty board should trigger finished game')
    });

    it('should detect unfinished games', () => {
        const def = CellCodes.default;
        const ship = CellCodes.ships[1];
        let board = [
            [def,def],
            [def,ship],
        ];
        assert(!isGameFinished(board), 'ship-populated board should trigger not finished game')
    });

    it('should validate empty boards', () => {
        const d = CellCodes.default;

        let board = [
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        assert(isValidBoard(board), 'empty board are valid');
    });

    it('should validate correct boards', () => {
        const s1 = CellCodes.ships[0]; // x2 ship
        const s2 = CellCodes.ships[1]; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s1,d,d],
            [d,s1,d,d],
            [d,d,d,d],
            [d,s2,s2,s2]
        ];

        const isValid = isValidBoard(board);
        assert(isValid, 'validate correct board');
    });

    it('should non validate incorrect boards', () => {
        const s1 = CellCodes.ships[0]; // x2 ship
        const s2 = CellCodes.ships[1]; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s1,d,d,d],
            [d,s1,d,d,d],
            [d,d,d,d,d],
            [s2,d,s2,s2,d],
            [d,d,d,d,d],
        ];

        const isValid = isValidBoard(board);
        assert(!isValid, 'non validate incorrect board');
    });

    it('should non validate incorrect boards\'', () => {
        const s1 = CellCodes.ships[0]; // x2 ship
        const s2 = CellCodes.ships[1]; // x3 ship
        const s3 = CellCodes.ships[1]; // x4 ship
        const d = CellCodes.default;

        let board = [
            [d,s1,d,s3,d],
            [d,s1,d,s3,d],
            [d,d,d,d,d],
            [s2,s2,s2,s3,d],
            [d,d,d,d,s3],
        ];

        const isValid = isValidBoard(board);
        assert(!isValid, 'non validate incorrect board');
    });

    it('should track vertical ship on board', () => {
        const s = 3; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s,d,d],
            [d,s,d,d],
            [d,s,d,d],
            [d,d,d,d]
        ];

        let traceBoard = [
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        const isTraced = traceShip(board, traceBoard, 0, 1);

        assert(isTraced, 'vertical ship should be traced');
    });

    it('should track vertical correct ship-shape on board', () => {
        const s = 3; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s,d,d],
            [d,s,d,d],
            [d,s,d,d],
            [d,d,d,d]
        ];

        let traceBoard = [
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let expectedTraceBoard = [
            [d,1,d,d],
            [d,1,d,d],
            [d,1,d,d],
            [d,d,d,d]
        ];

        traceShip(board, traceBoard, 0, 1);

        assert.deepEqual(traceBoard,expectedTraceBoard, 'traceBoard should be update to correct shape');
    });

    it('should track vertical incorrect ship-shape on board', () => {
        const s = 3; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s,d,d],
            [d,s,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let traceBoard = [
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let expectedTraceBoard = [
            [d,1,d,d],
            [d,1,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        traceShip(board, traceBoard, 0, 1);

        assert.deepEqual(traceBoard,expectedTraceBoard, 'traceBoard should be update to incorrect shape');
    });

    it('should track horizontal ship on board', () => {
        const s = 3; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s,s,s],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let traceBoard = [
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        const isTraced = traceShip(board, traceBoard, 0, 1);
        assert(isTraced, 'horizontal ship should be traced');
    });

    it('should track horizontal correct ship-shape on board', () => {
        const s = 3; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s,s,s],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let traceBoard = [
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let expectedTraceBoard = [
            [d,1,1,1],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        traceShip(board, traceBoard, 0, 1);

        assert.deepEqual(traceBoard,expectedTraceBoard, 'traceBoard should be update to correct shape');
    });

    it('should track horizontal incorrect ship-shape on board', () => {
        const s = 3; // x3 ship
        const d = CellCodes.default;

        let board = [
            [d,s,s,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let traceBoard = [
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        let expectedTraceBoard = [
            [d,1,1,d],
            [d,d,d,d],
            [d,d,d,d],
            [d,d,d,d]
        ];

        traceShip(board, traceBoard, 0, 1);

        assert.deepEqual(traceBoard,expectedTraceBoard, 'traceBoard should be update to incorrect shape');
    });

});


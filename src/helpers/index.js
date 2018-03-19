export const CellCodes = {
    missed: -1,
    default: 0,
    hit: 1,
    ships: [2,3,4,5]
};

export const isShipCode = code => (
  CellCodes.ships.includes(code)
);

export const createEmptyBoard = width => {
    let board = [];

    for(let i=0; i<width; i++) {
        board[i] = new Array(width).fill(CellCodes.default);
    }
    return board;
};

export const numberToCharCoordinate = number => (
    String.fromCharCode("a".charCodeAt(0) + number)
);

// game finished when there are no ship in the board
export const isGameFinished = board => (
    board.every(row =>
        row.every(cellCode =>
            !isShipCode(cellCode)
        )
    )
);

// a valid board should have correct shaped ships
// only horizontal or vertical
// with correct size (ex. type 5 ship, occupy 5 cells)
export const isValidBoard = board => {
    let traceBoard = createEmptyBoard(board.length);

    return board.every((row, rowIndex) =>
        row.every((cell, colIndex)=> (
            (CellCodes.ships.includes(cell)
                && traceBoard[rowIndex][colIndex] === CellCodes.default
            )
                ? traceShip(board, traceBoard, rowIndex, colIndex)
                : true
        ))
    );
};

const getCell = (board, row, col) => {
    const boardRows = board.length;
    const boardCols = board[0].length;

    if(row >= 0 && row < boardRows && col >= 0 && col < boardCols)
        return board[row][col];

    return null;
};

const isCorrectShip = (shapeArray, shipCode) => {
    if(shapeArray.length === shipCode){
        if( shapeArray.every(el => el === shipCode))
            return true
    }
    return false;
};

// trace and flag ships
export const traceShip = (board, traceBoard, row, col) => {
    let shipSize = board[row][col];

    // trace codes
    // 0 = un tracked
    // 1 = tracked
    traceBoard[row][col] = 1;

    // is horizontal?
    let horizontalShip = [shipSize];

    for(let shipCells = 0; shipCells < shipSize ; shipCells++ ){
        let rightCel = getCell(board,row,col+shipCells);

        if(rightCel === null)
            break;

        // only look for ships on un tracked cells
        if(traceBoard[row][col+shipCells] === 0 && rightCel === shipSize) {
            traceBoard[row][col + shipCells] = 1;
            horizontalShip.push(rightCel);
        }
    }

    if(isCorrectShip(horizontalShip, shipSize)) {
        // is a horizontal shaped ship
        return true;
    }

    // is vertical?
    let verticalShip = [shipSize];

    for(let shipCells = 0; shipCells < shipSize ; shipCells++ ){
        let lowerCell = getCell(board,row+shipCells,col);

        if(lowerCell === null)
            break;

        // only look for ships on un tracked cells
        if(traceBoard[row+shipCells][col] === 0 && lowerCell === shipSize) {
            traceBoard[row+shipCells][col] = 1;
            verticalShip.push(lowerCell);
        }
    }

    if(isCorrectShip(verticalShip, shipSize)){
        // is a vertical ship
        return true;
    }

    return false;
};

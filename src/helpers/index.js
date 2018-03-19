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
    const emptyRow = Array(width).fill(CellCodes.default);
    return Array(width).fill(emptyRow);
};

export const numberToCharCoordinate = number => (
    String.fromCharCode("a".charCodeAt(0) + number)
);

export const isGameFinished = board => {
    // TODO
    console.log('isGameFinished');
    console.log(board);


    const boardRows = board[0].length;
    const boardCols = boardRows;

    for(let rowIterator = 0; rowIterator < boardRows; rowIterator++){
        //console.log('iterating row: ', rowIterator);
        for(let colIterator = 0; colIterator < boardCols; colIterator++){
            //console.log('iterating col: ', colIterator);
            const cellCode = board[rowIterator][colIterator];
            console.log('cell value: ', cellCode);
            if(isShipCode(cellCode)){
                console.log('returningi false')
                return false;
            }
        }
    }
    console.log('returningi true');
    return true;
};

export const validBoard = board => {
    // TODO - complete

    // ships can not overlap and shout be ship shaped (all vertical or all horizontal) with correct size

    const tempBoard = createEmptyBoard(this.rules.boardWidth);

    // codes:
    // 0 -> not checked
    // -1 -> checked
    // 1 -> ship part


    let rowIterator = 0;
    let colIterator = 0;

};

import React from 'react';

import Row from '../row';
import Cell from '../cell';

var charCode = "a".charCodeAt(0);
const ColHeaders = ({ cols }) => (
    <tr>
        <td></td>
        {cols.map((col, i) => (
            <td key={i}>
                <Cell>
                    {String.fromCharCode(charCode+i)}
                </Cell>
            </td>
        ))}
    </tr>
);

const MainBoard = ({board, callback}) => (
    board.map((row, i) => (
        <Row key={i} number={i+1} row={row} callback={callback} />
    ))
);

const Board = ({ board, callback = () => null }) => (
    <div>
        <table>
            <ColHeaders cols={board[0]} />
            <MainBoard board={board} callback={callback} />
        </table>
    </div>
);

export default Board;
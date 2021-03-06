import React from 'react';

import Row from '../row/index';
import Cell from '../cell/index';

var charCode = "a".charCodeAt(0);
const ColHeaders = ({ cols }) => (
    <tbody>
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
    </tbody>
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
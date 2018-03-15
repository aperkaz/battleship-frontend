import React from 'react';

import Row from '../row';
import Cell from '../cell';

var charCode = "a".charCodeAt(0);
const CollumCoordinates = ({ collums }) => (
    <tr>
        <td></td>
        {collums.map((col, i) => (
            <td key={i}>
                <Cell>
                    {String.fromCharCode(charCode+i)}
                </Cell>
            </td>
        ))}
    </tr>
);

const MainBoard = ({content}) => (
    content.map((row, i) => (
        <Row key={i} number={i+1} row={row} />
    ))
);

const Board = ({ board }) => (
    <div>
        <table>
            <CollumCoordinates collums={board.content[0]} />
            <MainBoard content={board.content} />
        </table>
    </div>
);

export default Board;
import React from 'react';
import Cell from '../cell';

const Row = ({ number, row }) => (
    <tr>
        <td>
            <Cell>
                {number}
            </Cell>
        </td>
        {row.map((cellCode, i) => (
            <td key={i}>
                <Cell col={i+1} row={row} code={cellCode} />
            </td>
        ))}
    </tr>
);

export default Row;
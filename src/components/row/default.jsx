import React from 'react';
import Cell from '../cell';

const Row = ({ number, row, callback }) => (
    <tr>
        <td>
            <Cell>
                {number}
            </Cell>
        </td>
        {row.map((cellCode, i) => (
            <td key={i}>
                <Cell code={cellCode} col={i+1} row={number} callback={callback} />
            </td>
        ))}
    </tr>
);

export default Row;
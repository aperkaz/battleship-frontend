import React from 'react';
import { storiesOf } from '@storybook/react';

import Board from './default';

const emptyRow = Array(10).fill(0);
const emptyBoard = Array(10).fill(emptyRow);

const props = {
    board: emptyBoard,
    callback: (row,col) => console.log(row+' : '+col)
};

storiesOf('board', module)
    .add('default', () => (
        <Board {...props} />
    ));
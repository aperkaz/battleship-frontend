import React from 'react';
import { storiesOf } from '@storybook/react';

import Preparation from './default';

const boardSize = 10;
const emptyRow = Array(boardSize).fill(0);
const emptyBoard = Array(boardSize).fill(emptyRow);

const store = {
    app: {
        players:{
            list: ['p1', 'p2'],
            turn: 0
        },
        rules: {
            ships: [[5,1], [4,1], [3,1], [2,2]],
        },
        shipPreparation: {
            callback: (row,col) => console.log('to set ship in: ', row, ':', col),
            board: emptyBoard,
            selectionIndex: 0,
            current:{
                count: 1,
                size: 5
            },
        },
    },
};

storiesOf('Preparation page', module)
    .add('default', () => (
        <Preparation store={store}/>
    ));
import React from 'react';
import { storiesOf } from '@storybook/react';

import Preparation from './default';

const boardSize = 10;
const emptyRow = Array(boardSize).fill(0);
const emptyBoard = Array(boardSize).fill(emptyRow);

const store = {
    players: {
        turn: 0,
        list: ['p1', 'p2'],
        turnWait: true,
    },
    game: {
        title: 'battleship',
        rules: {
            ships: [[5,1], [4,1], [3,1], [2,2]],
        },
        preparation: {
            callback: (row,col) => console.log('to set ship in: ', row, ':', col),
            board: emptyBoard,
            shipIndex: 0,
            current:{
                shipPieces: 0,
                shipCount: 0,
                isComplete: false,
                isTypeComplete: false,
            },
            playerFinished: false,
            finished: false,
        },
    },
    router: {
        foo: () => 'bar'
    },
};

storiesOf('pages/Preparation', module)
    .add('default', () => (
        <div style={{ textAlign: 'center'}}>
            <Preparation store={store}/>
        </div>
    ));
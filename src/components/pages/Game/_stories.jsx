import React from 'react';
import { storiesOf } from '@storybook/react';

import Game from './default';

const emptyRow = Array(3).fill(0);
const emptyBoard = Array(3).fill(emptyRow);

const p1Board = [
    [0,0,0],
    [0,5,0],
    [0,0,0]
];

const p2Board = [
    [5,0,5],
    [0,0,0],
    [5,0,5]
];

const store = {

        players:{
            list: ['p1', 'p2'],
            turn: 0
        },
        game: {
          boards: [
            [p1Board,p2Board],
            [emptyBoard,emptyBoard]
          ],
          sendHit: (row,col) => console.log('sendHitTo, ',row,':',col),
        },
};

storiesOf('pages/Game', module)
    .add('default', () => (
        <div style={{ textAlign: 'center' }}>
            <Game store={store} />
        </div>
    ));

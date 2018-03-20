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
    preparation: {
      callback: (row,col) => console.log('to set ship in: ', row, ':', col),
      board: emptyBoard,
      validBoard: false,
      shipIndex: 0,
      current:{
        shipPieces: 0,
        shipCount: 0,
        isShipComplete: false,
        isShipTypeComplete: false,
      },
      playerFinished: false,
      finished: false,
    },
    game: {
        title: 'battleship',
        rules: {
            ships: [[5,1], [4,1], [3,1], [2,2]],
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

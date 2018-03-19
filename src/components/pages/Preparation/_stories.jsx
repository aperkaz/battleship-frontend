import React from 'react';
import { storiesOf } from '@storybook/react';

import Preparation from './default';

const boardSize = 10;
const emptyRow = Array(boardSize).fill(0);
const emptyBoard = Array(boardSize).fill(emptyRow);

const store = {
    app: {
        players:{
            turn: 0,
            list: ['p1', 'p2'],
            waitForTurn: true,
        },
        rules: {
            ships: [[5,1], [4,1], [3,1], [2,2]],
        },
        shipPreparation: {
            callback: (row,col) => console.log('to set ship in: ', row, ':', col),
            board: emptyBoard,
            shipIndex: 0,
            current:{
                placedCells: 0,
                count: 0
            },
            finished: false,
            resetPreparation:() => (
                this.board = emptyBoard,
                    this.shipIndex = 0,
                    this.current = {
                        placedCells: 0,
                        count: 0,
                    },
                    this.finished = false
            ),
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
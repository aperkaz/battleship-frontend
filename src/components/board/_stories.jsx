import React from 'react';
import { storiesOf } from '@storybook/react';

import Board from './default';

const props = {
    board: {
        rows: 4,
        cols: 4,
        content: [
            [0,-1,0,0],
            [0,1,0,2],
            [0,1,-1,0],
            [0,5,0,0],
        ],
    },
};

storiesOf('board', module)
    .add('default', () => (
        <Board {...props} />
    ));
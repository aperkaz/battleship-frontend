import React from 'react';
import { storiesOf } from '@storybook/react';

import Celebration from './default';


const store = {
    players:{
        list: ['p1', 'p2'],
        turn: 0
    },
    game: {
        newGame: () => console.log('Start new game')
    },
};

storiesOf('pages/Celebration', module)
    .add('default', () => (
        <div style={{ textAlign: 'center' }}>
            <Celebration store={store} />
        </div>
    ));
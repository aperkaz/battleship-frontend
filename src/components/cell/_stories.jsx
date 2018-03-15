import React from 'react';
import { storiesOf } from '@storybook/react';

import Cell from './default';

// -- Cell codes --
// -1 : missed
// 0 : default
// 1 : hit
// 2-5 : boat
storiesOf('cell', module)
    .add('missed', () => (
        <Cell code={-1} />
    ))
    .add('default', () => (
        <Cell code={0} row={2} col={2} callback={(row,col) => console.log(row+' : '+col)} />
    ))
    .add('hit', () => (
        <Cell code={1} />
    ))
    .add('boat', () => (
        <Cell code={2} />
    ))
    .add('boat\'', () => (
        <Cell code={5} />
    ))
;
import React from 'react';
import { storiesOf } from '@storybook/react';

import Cell from './default';
import { cellCodes } from '../../../helpers/index';


storiesOf('cell', module)
    .add('missed', () => (
        <Cell code={cellCodes.missed} />
    ))
    .add('default', () => (
        <Cell code={cellCodes.default} row={2} col={2} callback={(row,col) => console.log(row+' : '+col)} />
    ))
    .add('hit', () => (
        <Cell code={cellCodes.hit} />
    ))
    .add('boat', () => (
        <Cell code={cellCodes.boats[0]} />
    ))
    .add('boat\'', () => (
        <Cell code={cellCodes.boats[2]} />
    ))
;
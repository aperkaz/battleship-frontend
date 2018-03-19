import React from 'react';
import { storiesOf } from '@storybook/react';

import Cell from './default';
import { CellCodes } from '../../../helpers/index';


storiesOf('cell', module)
    .add('missed', () => (
        <Cell code={CellCodes.missed} />
    ))
    .add('default', () => (
        <Cell code={CellCodes.default} row={2} col={2} callback={(row,col) => console.log(row+' : '+col)} />
    ))
    .add('hit', () => (
        <Cell code={CellCodes.hit} />
    ))
    .add('boat', () => (
        <Cell code={CellCodes.ships[0]} />
    ))
    .add('boat\'', () => (
        <Cell code={CellCodes.ships[2]} />
    ))
;
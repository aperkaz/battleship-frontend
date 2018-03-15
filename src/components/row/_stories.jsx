import React from 'react';
import { storiesOf } from '@storybook/react';

import Row from './default';

const props = {
    number: 1,
    row: [0,0,0,0,0,1,0,0,0,5,5,5,5,0],
};

storiesOf('row', module)
    .add('default', () => (
        <Row {...props} />
    ));
import React from 'react';
import { storiesOf } from '@storybook/react';

import ShipPlacement from './default';

const props = {
    count: 2,
    size: 1
};

storiesOf('shipPreparation', module)
    .add('default', () => (
        <ShipPlacement {...props} />
    ));
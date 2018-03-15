import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './default';

const props = {
    label: 'Foo Button',
    onClick: () => alert('Foo Button clicked')
};

storiesOf('button', module)
    .add('default', () => (
        <Button {...props} />
    ));
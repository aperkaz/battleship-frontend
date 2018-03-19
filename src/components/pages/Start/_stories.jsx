import React from 'react';
import { storiesOf } from '@storybook/react';

import Start from './default';

const store = {
    router: () => 'bar'
};

storiesOf('pages/Start', module)
    .add('default', () => (
        <div style={{ textAlign: 'center' }}>
            <Start store={store} />
        </div>
    ));
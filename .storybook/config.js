import { configure } from '@storybook/react';

const req = require.context("..", true, /_stories\.jsx?$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

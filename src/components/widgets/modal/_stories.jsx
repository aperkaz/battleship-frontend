import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from './default';

const defaultProps = {
  title: 'A title',
  content: 'A content'
};

const invalidProps = {
  title: 'Invalid board',
  content: 'Redo the board following the rules'
};

const hitProps = {
  title: 'Hit',
  content: 'Successful hit!'
};

const missProps = {
  title: 'Miss',
  content: 'Missed hit!'
};

storiesOf('modal', module)
    .add('default', () => (
      <div style={{ height: '300px'}}>
        <Modal {...defaultProps} />
      </div>
    ))
    .add('invalid board', () => (
      <Modal {...invalidProps} />
    ))
    .add('hit', () => (
      <Modal {...hitProps} />
    ))
    .add('miss', () => (
      <Modal {...missProps} />
    ));

import React from 'react'
import { Button, Modal } from 'semantic-ui-react';

const ModalComponent = ({title, content }) => (

  <Modal
    trigger={<Button>Show Modal</Button>}
    size='mini'
    style={{ height: '190px'}}
    header={title}
    content={content}
    actions={[
    { key: 'done', content: 'Okay', positive: true }
    ]}
  />
);

export default ModalComponent;

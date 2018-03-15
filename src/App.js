import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class Store {
    @observable foo = 'bar';
}

let store = new Store();

const TestComponent = observer(({store}) => (
    <div>testing store: {store.foo}</div>
));

class App extends Component {
  render() {
    return (
      <div>
        <h1>Battleship</h1>
        <TestComponent store={store} />
      </div>
    );
  }
}

export default App;

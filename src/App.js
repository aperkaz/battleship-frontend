import React, { Component } from 'react';

import store from './store';
import Game from './components/game';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Battleship</h1>
        <Game store={store} />
      </div>
    );
  }
}

export default App;

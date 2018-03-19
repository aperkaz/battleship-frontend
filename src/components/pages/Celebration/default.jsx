// -- dependencies --
import React from 'react';
import {inject, observer} from 'mobx-react';


const Celebration = ({store}) => {
    const {players, game} = store;
    return(
        <div>
            <br/>
            <h2>Congratulations {players.list[players.turn]}, you <b>WON !</b></h2>
           <br/>
            <button onClick={game.newGame}>New Game</button>
        </div>
    );
};

export default inject('store')(observer(Celebration));
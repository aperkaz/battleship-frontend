import React from 'react';
import {observer} from 'mobx-react';

import styled from 'styled-components';

const Div = styled.div`
    margin: 15px;
`;

const Preparation = () => <div>preparation test</div>
const Start = () => <div>game test</div>

const Game = observer(({store}) => (
    <div style={{ textAlign: 'center'}}>
        <Div>
            gameStage: {store.game.stages[store.game.stageIndex]}
        </Div>
        <Div>
            turnOfPlayer: {store.players.list[store.players.turn]}
        </Div>
        <button onClick={store.changePlayerTurn}>change player turn</button>
        {
            store.game.stageIndex === 0
                ? <Div>
                    <Preparation />
                    <button onClick={store.nextGameStage}> Start the game! </button>
                </Div>
                : <Start />
        }
        <button onClick={store.resetGame}>reset game</button>
    </div>
));

export default Game;
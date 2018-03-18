import React from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import PlayerBoard from '../board';
import OpponentBoard from '../board';
import { getOpponent } from '../../helpers';

const Div = styled.div`
     display: flex;
     justify-content: center;
`;

const PlayerBoardWrapper = styled.div`
    margin-left: 150px;
`;

const Game = ({store}) => {
    const {app: {players, boards, sendHit, endTurnWait}} = store;

    const player = players.list[players.turn];


    return(
        <div>
            <div>Game on!</div>
            <h4>Turn of: {player}</h4>
            {(store.app.players.waitForTurn)?
                <button onClick={endTurnWait}>Resume as {player}</button>
            : <div>
                    <div>{JSON.stringify(store.app.boards[0][players.turn])}</div>
                    <br/>
                    <div>{JSON.stringify(store.app.boards[1][players.turn])}</div>
                    <br/>
                    <Div>
                        <div>
                            <OpponentBoard
                                board={boards[1][players.turn]}
                                callback={sendHit}
                            />
                            <div>Opponent's board</div>
                        </div>
                        <PlayerBoardWrapper>
                            <PlayerBoard board={boards[0][players.turn]} />
                            <div>My board</div>
                        </PlayerBoardWrapper>
                    </Div>
                    <br/>
                    <div>Select square to attack</div>
                </div>
            }

        </div>
    );
};

export default inject('store')(observer(Game));
import React from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import PlayerBoard from '../../widgets/board/index';
import OpponentBoard from '../../widgets/board/index';

const Div = styled.div`
     display: flex;
     justify-content: center;
`;

const PlayerBoardWrapper = styled.div`
    margin-left: 150px;
`;

const BoardLabel = styled.div`
    margin: 20px;
`;

const Game = ({store}) => {
    const {players, game} = store;

    return(
        <div>
            <div>Game on!</div>
            <h4>Turn of: {players.list[players.turn]}</h4>
            <br/>
            {(players.turnWait)?
                <Button primary onClick={players.toggleTurnWait}>Resume as {players.list[players.turn]}</Button>
            : <div>
                    <Div>
                        <div>
                            <OpponentBoard
                                board={game.boards[1][players.turn]}
                                callback={game.sendHit}
                            />
                            <BoardLabel>Opponent's board</BoardLabel>
                        </div>
                        <PlayerBoardWrapper>
                            <PlayerBoard board={game.boards[0][players.turn]} />
                            <BoardLabel>My board</BoardLabel>
                        </PlayerBoardWrapper>
                    </Div>
                    <br/>
                    <div>Select square on the opponent's board to attack</div>
                </div>
            }

        </div>
    );
};

export default inject('store')(observer(Game));

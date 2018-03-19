import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import styled from 'styled-components';
import views from '../../../config/views';

import PreparationBoard from '../../widgets/board/index';
import ShipPlacement from '../../widgets/shipPlacement/index';

const Div = styled.div`
     display: flex;
     justify-content: center;
`;

// TODO - remove rendering hack (board)
export const Preparation = ({ store }) => {
    const {players, game} = store;
    const {preparation} = game;


    const size  = game.rules.ships[preparation.shipIndex][0];
    const count = game.rules.ships[preparation.shipIndex][1];

    return(
        <div>
            <div>Preparation screen for</div>
            <h4>{players.list[players.turn]}</h4>
            <div style={{ visibility: 'hidden'}}>{JSON.stringify(preparation.board)}</div>
            <div>Ship count: {preparation.current.shipCount}</div>
            <div>Ship pieces: {preparation.current.shipPieces}</div>
            <Div>
                <PreparationBoard board={preparation.board} callback={preparation.callback}/>
                <ShipPlacement count={count} size={size} />
            </Div>
            <br/>
            <button onClick={game.resetPreparation}>Reset preparation board</button>
            <br/>
            {preparation.playerFinished
            ? <button onClick={store.game.prepareNextPlayer}>Switch to Next player</button>
            : null}
            <br/>
            {preparation.finished ?
                <Link view={views.game} store={store}><button>Start game</button></Link>
            : null}
        </div>
    );
};

export default inject('store')(observer(Preparation));
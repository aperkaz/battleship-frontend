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

export const Preparation = ({ store }) => {
    const {players, preparation, game} = store;

    const size  = game.rules.ships[preparation.shipIndex][0];
    const count = game.rules.ships[preparation.shipIndex][1];

    return(
        <div>
            <div>Preparation screen for</div>
            <h4>{players.list[players.turn]}</h4>
            <Div>
                <PreparationBoard board={preparation.board} callback={preparation.callback}/>
                <ShipPlacement count={count} size={size} />
            </Div>
            <br/>
            <button onClick={preparation.reset}>Reset board</button>
            <br/>
            <br/>
            {preparation.playerFinished
            ? <button onClick={preparation.prepareNextPlayer}>Switch to next player</button>
            : null}
            {preparation.finished ?
                <Link view={views.game} store={store}><button onClick={store.players.changeTurn}>Start game</button></Link>
            : null}
        </div>
    );
};

export default inject('store')(observer(Preparation));
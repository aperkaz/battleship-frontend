import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import styled from 'styled-components';
import views from '../../config/views';

import PreparationBoard from '../board';
import ShipPlacement from '../shipPlacement';

const Div = styled.div`
     display: flex;
     justify-content: center;
`;


// TODO - remove rendering hack (board)
export const Preparation = ({ store }) => {
    const {app: {players, shipPreparation, rules}} = store;

    const size  = rules.ships[store.app.shipPreparation.shipIndex][0];
    const count = rules.ships[store.app.shipPreparation.shipIndex][1];

    return(
        <div>
            <div>Preparation screen for</div>
            <h4>{players.list[players.turn]}</h4>
            <div style={{ visibility: 'hidden'}}>{JSON.stringify(store.app.shipPreparation.board)}</div>
            <Div>
                <PreparationBoard board={shipPreparation.board} callback={shipPreparation.callback}/>
                <ShipPlacement count={count} size={size} />
            </Div>
            <button onClick={store.app.resetPreparation}>Reset board</button>
            <br/>
            {shipPreparation.finished?
                <Link view={views.game} store={store}><button>Start game</button></Link>
            : null}
        </div>
    );
};

export default inject('store')(observer(Preparation));
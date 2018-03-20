import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import { Button } from 'semantic-ui-react';
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
            <Button onClick={preparation.reset}>Reset board</Button>
            <br/>
            <br/>
            {preparation.playerFinished
            ? <Button primary onClick={preparation.prepareNextPlayer}>Switch to next player</Button>
            : null}
            {preparation.finished ?
                <Link view={views.game} store={store}><Button primary onClick={store.players.changeTurn}>Start game</Button></Link>
            : null}
        </div>
    );
};

export default inject('store')(observer(Preparation));

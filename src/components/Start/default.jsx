import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import styled from 'styled-components';
import views from '../../config/views';

const Ol = styled.ol`
    text-align: justify;
    display: inline-block;
`;

export const Start = ({ store }) => {

    const {app: {players}} = store;
    const player = players.list[players.turn];

    return (
        <div>
            <p>Welcome to a two player Battleship game!</p>
            <br/>
            <p>
                Build following the rules for the "1990 Milton Bradley" version, presented
                <a href="https://en.wikipedia.org/wiki/Battleship_(game)#Variations">HERE</a>.
            </p>
            <br/>
            <div>
                <Ol>
                    <li>Each player arranges their ships</li>
                    <li>Start playing</li>
                    <li>The player how sinks the sinks of the other player first, wins!</li>
                </Ol>
            </div>
            <Link view={views.preparation} params={{player}} store={store}>
                <button>Go to player-ship preparation</button>
            </Link>
        </div>
    );
};


export default inject('store')(observer(Start));
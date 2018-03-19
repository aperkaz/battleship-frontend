// -- dependencies --
import React from 'react';
import {Route} from 'mobx-router';
// -- app --
import Start from '../components/pages/Start';
/*import Preparation from '../components/pages/Preparation';
import Game from '../components/pages/Game';*/


// TODO - remove and change
const Preparation = () => <div>Preparation</div>;
const Game = () => <div>Game</div>;
const Scoreboard = () => <div>Scoreboard</div>;

const views = {
    start: new Route({
       path: '/',
       component: <Start />,
       beforeEnter: (route, params, store) => {
          console.log('entering / route');
       },
    }),
    preparation: new Route({
        path: '/preparation',
        component: <Preparation />,
        onEnter: (route, params, store) => {
          console.log('entering /preparation route');
        },
    }),
    game: new Route({
        path: '/game',
        component: <Game/>,
        beforeEnter: (route, params, store) => {
            console.log('entering /game route');
        },
    }),
    scoreboard: new Route({
        path: '/scoreboard',
        component: <Scoreboard/>,
        beforeEnter: (route, params, store) => {
            console.log('entering /scoreboard route');
        },
    }),
};

export default views;
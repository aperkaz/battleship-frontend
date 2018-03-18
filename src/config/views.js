import React from 'react';
import {Route} from 'mobx-router';

// components
import Start from '../components/Start';
import Preparation from '../components/Preparation';
import Game from '../components/Game';


// TODO - remove and change
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
          console.log('entering /preparation route for player: ');
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
    })

};

export default views;
// -- dependencies --
import React from 'react';
import {Route} from 'mobx-router';
// -- app --
import Start from '../components/pages/Start';
import Preparation from '../components/pages/Preparation';
import Game from '../components/pages/Game';
import Celebration from '../components/pages/Celebration';

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
    celebration: new Route({
        path: '/celebration',
        component: <Celebration/>,
        beforeEnter: (route, params, store) => {
            console.log('entering /celebration route');
        },
    }),
};

export default views;
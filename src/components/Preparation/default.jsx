import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import styled from 'styled-components';
import views from '../../config/views';



export const Preparation = ({ store }) => {

    const {app: {players}} = store;

    return(
        <div>
            <p>Preparation screen: {players.list[players.turn]}</p>

            <Link view={views.game} store={store}><button>Start game</button></Link>
        </div>
    );
};

export default inject('store')(observer(Preparation));
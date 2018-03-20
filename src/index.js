import React from 'react';
import ReactDOM from 'react-dom';
import { MobxRouter, startRouter } from 'mobx-router';
import { Provider as MobxProvider } from 'mobx-react';
import store from './mobx/store';
import views from './config/views';
import registerServiceWorker from './registerServiceWorker';

startRouter(views, store);

ReactDOM.render(
    <MobxProvider store={store}>
        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <h1>{store.game.title}</h1>
            <MobxRouter/>
        </div>
    </MobxProvider>
    , document.getElementById('root'));
registerServiceWorker();

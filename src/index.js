import React from 'react';
import ReactDOM from 'react-dom';
import { MobxRouter, startRouter } from 'mobx-router';
import { Provider } from 'mobx-react';
import store from './mobx/store';
import views from './config/views';
import registerServiceWorker from './registerServiceWorker';

startRouter(views, store);

ReactDOM.render(
    <Provider store={store}>
        <div style={{ textAlign: 'center'}}>
            <h1>{store.game.title}</h1>
            <MobxRouter/>
        </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

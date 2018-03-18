import React  from 'react';
import { MobxRouter, startRouter } from 'mobx-router';

// mobx
import { Provider } from 'mobx-react';
import store from './mobx/store';

// router
import views from './config/views';
startRouter(views, store);

const App = () => (
    <Provider store={store}>
        <div style={{ textAlign: 'center'}}>
            <h1>{store.app.title}</h1>
            <MobxRouter/>
          </div>
    </Provider>
);

export default App;

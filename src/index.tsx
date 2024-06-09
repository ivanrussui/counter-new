import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './CounterRedux/state/store';

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);

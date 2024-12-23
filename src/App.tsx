import React, {FC} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterAdvanced} from './CounterAdvanced/CounterAdvanced';
import {CounterAdvanced2in1} from './CounterAdvanced2in1/CounterAdvanced2in1';
import {CounterRedux} from './CounterRedux/CounterRedux';
import {CounterRedux2in1} from './CounterRedux2in1/CounterRedux2in1';
import {Provider} from 'react-redux';
import {store} from './CounterRedux/state/store';
import {store2in1} from './CounterRedux2in1/state/store';
import {CounterReduxLocaleStorageThunk} from './CounterReduxLocaleStorageThunk/CounterReduxLocaleStorageThunk';
import {storeThunk} from './CounterReduxLocaleStorageThunk/state/store';
import {CounterReduxLocaleStorageStore} from './CounterReduxLocaleStorageStore/CounterReduxLocaleStorageStore';
import {storeLocaleStorage} from './CounterReduxLocaleStorageStore/state/store';

const App: FC = () => {
    return (
        <div className="App">
            <h1 className={'Title'}>Choose your Counter</h1>
            <NavLink to={'/counter'}
                     className={({isActive}) => isActive ? 'Active' : 'NavLink'}>
                Counter
            </NavLink>
            <NavLink to={'/counter-advanced'}
                     className={({isActive}) => isActive ? 'Active' : 'NavLink'}>
                Counter Advanced with Local Storage
            </NavLink>
            <NavLink to={'/counter-advanced-2-in-1'}
                     className={({isActive}) => isActive ? 'Active' : 'NavLink'}>
                Counter Advanced 2 in 1 with Local Storage
            </NavLink>
            <NavLink to={'/counter-redux'}
                     className={({isActive}) => isActive ? 'Active' : 'NavLink'}>
                Counter Redux
            </NavLink>
            <NavLink to={'/counter-redux-2-in-1'}
                     className={({isActive}) => isActive ? 'Active' : 'NavLink'}>
                Counter Redux 2 in 1
            </NavLink>
            <NavLink to={'/counter-redux-locale-storage-thunk'}
                     className={({isActive}) => isActive ? 'Active' : 'NavLink'}>
                Counter Redux with Local Storage Thunk
            </NavLink>
            <NavLink to={'/counter-redux-locale-storage-store'}
                     className={({isActive}) => isActive ? 'Active' : 'NavLink'}>
                Counter Redux with Local Storage Store
            </NavLink>
            {/*<NavLink to={'/counter-redux-2-in-1-locale-storage'}*/}
            {/*         className={({isActive}) => isActive ? 'Active' : 'NavLink'}>*/}
            {/*    Counter Redux 2 in 1 with Local Storage*/}
            {/*</NavLink>*/}
            <Routes>
                <Route path={'/counter'} element={<Counter/>}/>
                <Route path={'/counter-advanced'} element={<CounterAdvanced/>}/>
                <Route path={'/counter-advanced-2-in-1'} element={<CounterAdvanced2in1/>}/>
                <Route path={'/counter-redux'} element={
                    <Provider store={store}>
                        <CounterRedux/>
                    </Provider>
                }/>
                <Route path={'/counter-redux-2-in-1'} element={
                    <Provider store={store2in1}>
                        <CounterRedux2in1/>
                    </Provider>
                }/>
                <Route path={'/counter-redux-locale-storage-thunk'} element={
                    <Provider store={storeThunk}>
                        <CounterReduxLocaleStorageThunk/>
                    </Provider>
                }/>
                <Route path={'/counter-redux-locale-storage-store'} element={
                    <Provider store={storeLocaleStorage}>
                        <CounterReduxLocaleStorageStore/>
                    </Provider>
                }/>
                {/*<Route path={'/counter-redux-2-in-1-locale-storage'} element={*/}
                {/*    <Provider store={storeThunk2in1}>*/}
                {/*        /!*<CounterRedux2in1LocaleStorage/>*!/*/}
                {/*    </Provider>*/}
                {/*}/>*/}
                <Route path={'/*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </div>
    );
};

export default App;

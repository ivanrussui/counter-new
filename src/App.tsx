import React, {FC} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterAdvanced} from './CounterAdvanced/CounterAdvanced';
import {CounterAdvanced2in1} from './CounterAdvanced2in1/CounterAdvanced2in1';

const App: FC = () => {
    return (
        <div className="App">
            <h1 className={'Title'}>Choose your Counter</h1>
            <NavLink to={'/counter'}
                     className={({ isActive}) => isActive ? "Active" : "NavLink"}>
                Counter
            </NavLink>
            <NavLink to={'/counter-advanced'}
                     className={({ isActive}) => isActive ? "Active" : "NavLink"}>
                Counter Advanced with Local Storage
            </NavLink>
            <NavLink to={'/counter-advanced-2-in-1'}
                     className={({ isActive}) => isActive ? "Active" : "NavLink"}>
                Counter Advanced 2 in 1 with Local Storage
            </NavLink>
            <Routes>
                <Route path={'/counter'} element={<Counter/>}/>
                <Route path={'/counter-advanced'} element={<CounterAdvanced/>}/>
                <Route path={'/counter-advanced-2-in-1'} element={<CounterAdvanced2in1/>}/>
                <Route path={'/*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </div>
    );
};

export default App;

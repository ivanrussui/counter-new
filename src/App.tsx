import React, {FC} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterAdvanced} from './CounterAdvanced/CounterAdvanced';

const App: FC = () => {
    return (
        <div className="App">
            {/*<Counter/>*/}
            <CounterAdvanced/>
        </div>
    );
};

export default App;

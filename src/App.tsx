import React, {FC} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterAdvanced} from './CounterAdvanced/CounterAdvanced';
import {CounterAdvanced2in1} from './CounterAdvanced2in1/CounterAdvanced2in1';

const App: FC = () => {
    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<CounterAdvanced/>*/}
            <CounterAdvanced2in1/>
        </div>
    );
};

export default App;

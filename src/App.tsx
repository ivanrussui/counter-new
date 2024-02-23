import React, {useState} from 'react';
import './App.css';
import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';

const App = () => {
    const [count, setCount] = useState<number>(0);

    const countIncrement = () => {
        setCount(count + 1);
    };

    const countReset = () => {
        setCount(0);
    };

    const disableMin = count === 0;
    const disableMax = count === 5;

    return (
        <div className="App">
            <div className={'Counter'}>
                <div className={'MonitorWrap'}>
                    <Monitor count={count} disable={disableMax}/>
                </div>
                <div className={'ButtonsWrap'}>
                    <div className={'Buttons'}>
                        <Button name={'Increment'} disable={disableMax} callBack={countIncrement}/>
                        <Button name={'Reset'} disable={disableMin} callBack={countReset}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

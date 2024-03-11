import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import React, {FC, useState} from 'react';
import styles from './Counter.module.css';

export const Counter: FC = () => {
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
        <div className={styles.Counter}>
            <div className={styles.MonitorWrap}>
                <Monitor count={count} disable={disableMax}/>
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={styles.Buttons}>
                    <Button name={'Increment'} disable={disableMax} callBack={countIncrement}/>
                    <Button name={'Reset'} disable={disableMin} callBack={countReset}/>
                </div>
            </div>
        </div>
    );
};
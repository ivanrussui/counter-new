import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import React, {FC} from 'react';
import styles from './CounterAdvanced.module.css';

type CounterType = {
    countStart: number
    disableIncrement: boolean
    disableReset: boolean
    incorrectValue: string
    text: null | string
    countIncrement: () => void
    countReset: () => void
}

export const Counter: FC<CounterType> = ({
                                             countStart, disableIncrement, disableReset,
                                             countIncrement, countReset, text, incorrectValue
                                         }) => {
    return (
        <div className={styles.Counter}>
            <div className={styles.MonitorWrap}>
                <Monitor countStart={countStart} disable={disableIncrement} incorrectValue={incorrectValue}
                         text={text}/>
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={styles.Buttons}>
                    <Button name={'Increment'} disable={disableIncrement} callBack={countIncrement}/>
                    <Button name={'Reset'} disable={disableReset} callBack={countReset}/>
                </div>
            </div>
        </div>
    );
};
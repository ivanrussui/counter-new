import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import React from 'react';
import styles from './CounterRedux.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {CounterType, incrementCountAC, resetCountAC} from './state/counter-reducer';
import {SettingsType} from './state/settings-reducer';

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector<AppRootStateType, CounterType>
    (state => state.counter);
    const settings = useSelector<AppRootStateType, SettingsType>
    (state => state.settings);

    const {countStart, countMax, text} = count;
    const {valueStart} = settings;


    const incrementCount = () => {
        if (!disableIncrement) {
            dispatch(incrementCountAC(countStart));
        }
    };
    const resetCount = () => {
        dispatch(resetCountAC(valueStart));
    };

    const disableIncrement = countStart === countMax || text !== null;
    const disableReset = countStart === valueStart || text !== null;

    return (
        <div className={styles.Counter}>
            <div className={styles.MonitorWrap}>
                <Monitor countStart={countStart} disable={disableIncrement}/>
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={styles.Buttons}>
                    <Button name={'Increment'} disable={disableIncrement} callBack={incrementCount}/>
                    <Button name={'Reset'} disable={disableReset} callBack={resetCount}/>
                </div>
            </div>
        </div>
    );
};
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

    const incrementCount = () => {
        if (!disableIncrement) {
            dispatch(incrementCountAC(count.countStart));
        }
    };
    const resetCount = () => {
        dispatch(resetCountAC(settings.valueStart));
    };

    const disableIncrement = count.countStart === count.countMax || count.text !== null;
    const disableReset = count.countStart === settings.valueStart || count.text !== null;

    return (
        <div className={styles.Counter}>
            <div className={styles.MonitorWrap}>
                <Monitor countStart={count.countStart} disable={disableIncrement}/>
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
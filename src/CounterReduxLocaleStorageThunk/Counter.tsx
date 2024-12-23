import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import React, {useEffect} from 'react';
import styles from './CounterReduxLocaleStorageThunk.module.css';
import {CounterType, incrementCountAC, resetCountAC, setMaxCountTC, setStartCountTC} from './state/counter-reducer';
import {SettingsType} from './state/settings-reducer';
import {useAppDispatch, useAppSelector} from './hooks/hooks';

export const Counter = () => {
    const dispatch = useAppDispatch();

    const count = useAppSelector<CounterType>(state => state.counter);
    const settings = useAppSelector<SettingsType>(state => state.settings);

    const {countStart, countMax, text} = count;
    const {valueStart} = settings;

    useEffect(() => {
        dispatch(setStartCountTC());
        dispatch(setMaxCountTC());
    }, []);

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
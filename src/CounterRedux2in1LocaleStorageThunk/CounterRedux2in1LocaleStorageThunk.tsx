import React, {FC, useEffect} from 'react';
import styles from './CounterRedux2in1LocaleStorageThunk.module.css';
import {Settings} from './components/Settings/Settings';
import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import {
    changeMaxCountTC,
    changeStartCountTC,
    CounterType,
    incrementCountAC,
    resetCountAC,
    setMaxCountTC,
    setStartCountTC
} from './state/counter-reducer';
import {changeActiveModeSettingsAC, setMaxValueTC, setStartValueTC, SettingsType} from './state/settings-reducer';
import {useAppDispatch, useAppSelector} from './hooks/hooks';

export const CounterRedux2in1LocaleStorageThunk: FC = () => {
    const dispatch = useAppDispatch();

    const count = useAppSelector<CounterType>(state => state.counter);
    const settings = useAppSelector<SettingsType>(state => state.settings);

    const {countStart, countMax} = count;
    const {isActiveModeSettings, isDisableSettings, valueStart, valueMax} = settings;

    useEffect(() => {
        dispatch(setStartCountTC());
        dispatch(setMaxCountTC());
        dispatch(setStartValueTC());
        dispatch(setMaxValueTC());
    }, []);

    const incrementCount = () => {
        if (!disableIncrement) {
            dispatch(incrementCountAC(countStart));
        }
    };

    const resetCount = () => {
        dispatch(resetCountAC(valueStart));
    };

    const setHandler = () => {
        // реализация через getState
        // dispatch(changeStartCountTC());
        // dispatch(changeMaxCountTC());

        // реализация через параметры
        dispatch(changeStartCountTC(valueStart));
        dispatch(changeMaxCountTC(valueMax));

        dispatch(changeActiveModeSettingsAC(!isActiveModeSettings));
    };

    const disableIncrement = countStart === countMax;
    const disableReset = countStart === valueStart;

    return (
        <div className={styles.Counter}>
            <div className={styles.MonitorWrap}>
                {isActiveModeSettings
                    ? <Settings valueStart={valueStart} valueMax={valueMax}/>
                    : <Monitor countStart={countStart} disable={disableIncrement}/>
                }
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={`${isActiveModeSettings ? styles.ButtonOne : styles.Buttons}`}>
                    {!isActiveModeSettings &&
                        <>
                            <Button name={'Increment'} disable={disableIncrement} callBack={incrementCount}/>
                            <Button name={'Reset'} disable={disableReset} callBack={resetCount}/>
                        </>
                    }
                    <Button name={'Settings'} disable={isDisableSettings} callBack={setHandler}/>
                </div>
            </div>
        </div>
    );
};

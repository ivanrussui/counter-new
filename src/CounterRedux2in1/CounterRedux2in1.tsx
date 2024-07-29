import React, {FC} from 'react';
import styles from './CounterRedux2in1.module.css';
import {Settings} from './components/Settings/Settings';
import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {CounterType, incrementCountAC, resetCountAC, setMaxCountAC, setStartCountAC} from './state/counter-reducer';
import {changeActiveModeSettingsAC, SettingsType} from './state/settings-reducer';

export const CounterRedux2in1: FC = () => {
    const dispatch = useDispatch();
    const count = useSelector<AppRootStateType, CounterType>
    (state => state.counter);
    const settings = useSelector<AppRootStateType, SettingsType>
    (state => state.settings);

    const {countStart, countMax} = count;
    const {isActiveModeSettings, isDisableSettings, valueStart, valueMax} = settings;

    const incrementCount = () => {
        if (!disableIncrement) {
            dispatch(incrementCountAC(countStart));
        }
    };

    const resetCount = () => {
        dispatch(resetCountAC(valueStart));
    };

    const setHandler = () => {
        dispatch(setStartCountAC(valueStart));
        dispatch(setMaxCountAC(valueMax));
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

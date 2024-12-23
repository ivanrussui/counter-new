import React, {FC} from 'react';
import styles from './CounterRedux2in1LocaleStorageStore.module.css';
import {Settings} from './components/Settings/Settings';
import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType, store2in1LocaleStorage} from './state/store';
import {CounterType, incrementCountAC, resetCountAC, setMaxCountAC, setStartCountAC} from './state/counter-reducer';
import {changeActiveModeSettingsAC, SettingsType} from './state/settings-reducer';
import {saveState} from './utils/localeStorage-utils';

export const CounterRedux2in1LocaleStorageStore: FC = () => {
    const dispatch = useDispatch();
    const count = useSelector<AppRootStateType, CounterType>(state => state.counter);
    const settings = useSelector<AppRootStateType, SettingsType>(state => state.settings);

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

        // сохр изменение в Locale Storage только по клику на Settings
        // актуально если ты не сочешь сохранять по любому чиху (store.ts -> storeLocaleStorage.subscribe)
        // чтобы было как во всех остальных счетчиках
        saveState(store2in1LocaleStorage.getState());
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

import React, {ChangeEvent, FC, useEffect} from 'react';
import styles from './CounterAdvanced.module.css';
import {Button} from './components/Button/Button';
import {Setting} from './components/Setting/Setting';

type SettingsType = {
    valueStart: number
    valueMax: number
    disableSettings: boolean
    setValueStart: (valueStart: number) => void
    setValueMax: (valueMax: number) => void
    setDisableSettings: (status: boolean) => void
    setCountStart: (value: number) => void
    setCountMax: (value: number) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setText: (text: string | null) => void
    setToLocalStorage: () => void
}

export const Settings: FC<SettingsType> = ({
                                               valueStart, valueMax, setValueMax, setValueStart,
                                               setCountStart, setCountMax, disableSettings, setDisableSettings,
                                               onChangeStartValue, onChangeMaxValue, setText, setToLocalStorage
                                           }) => {

    useEffect(() => {
        const valueStartFromStorage = localStorage.getItem('countStart');
        const valueMaxFromStorage = localStorage.getItem('countMax');

        if (valueStartFromStorage) {
            setValueStart(JSON.parse(valueStartFromStorage));
        }
        if (valueMaxFromStorage) {
            setValueMax(JSON.parse(valueMaxFromStorage));
        }
    }, []);

    const setHandler = () => {
        setCountStart(valueStart);
        setCountMax(valueMax);
        setDisableSettings(true);
        setText(null);
        setToLocalStorage();
    };

    const errorValueStart = valueStart < 0 || valueStart >= valueMax;
    const errorValueMax = valueStart >= valueMax;

    return (
        <div className={styles.Settings}>
            <div className={styles.MonitorSettingsWrap}>
                <Setting title={'Start Value:'} value={valueStart} callBack={onChangeStartValue}
                         errorValue={errorValueStart}/>
                <Setting title={'Max Value:'} value={valueMax} callBack={onChangeMaxValue}
                         errorValue={errorValueMax}/>
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={`${styles.Buttons} ${styles.ButtonOne}`}>
                    <Button name={'Settings'} disable={disableSettings} callBack={setHandler}/>
                </div>
            </div>
        </div>
    );
};

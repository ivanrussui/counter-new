import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './CounterAdvanced.module.css';
import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';
import {Input} from './components/Input/Input';
import {Setting} from './components/Setting/Setting';

type SettingsType = {
    valueStart: number
    valueMax: number
    disableSettings: boolean
    setValueStart: (valueStart: number) => void
    setValueMax: (valueMax: number) => void
    // setToLocalStorage: () => void // убрали на саппорте
    setCountStart: (value: number) => void
    setCountMax: (value: number) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setText: (text: string | null) => void
}

// export type SettingsStateType = {
//     title: string
//     value: number
// }

export const Settings: FC<SettingsType> = ({
                                               valueStart, valueMax,
                                               setValueStart, setValueMax,
                                               setCountStart,
                                               setCountMax, disableSettings,
                                               onChangeStartValue, onChangeMaxValue, setText
                                           }) => {
    // const [valueStart, setValueStart] = useState<number>(countStart);
    // const [valueMax, setValueMax] = useState<number>(countMax);

    // const [settings, setSettings] = useState<SettingsStateType[]>([
    //     {title: 'Max Value:', value: valueMax},
    //     {title: 'Start Value:', value: valueStart},
    // ]);

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

    const setToLocalStorageHandler = () => {
       // setToLocalStorage(); // убрали на саппорте
        setCountStart(valueStart);
        setCountMax(valueMax);
        setText(null);
    };

    const errorValueStart = valueStart < 0 || valueStart >= valueMax;
    const errorValueMax = valueStart >= valueMax;

    return (
        <div className={styles.Settings}>
            <div className={styles.MonitorSettingsWrap}>
                {/*так наверное не получится так как оба коллбэка надо передавать внутрь а я сделал универсальным Setting*/}
                {/*{settings.map(el => {*/}
                {/*    return <Setting title={el.title}*/}
                {/*                    value={el.value}*/}
                {/*                    onChangeStartValue={onChangeStartValue}*/}
                {/*                    onChangeMaxValue={onChangeMaxValue}*/}
                {/*    />;*/}
                {/*})}*/}
                <Setting title={'Start Value:'} value={valueStart} callBack={onChangeStartValue}
                         errorValue={errorValueStart}/>
                <Setting title={'Max Value:'} value={valueMax} callBack={onChangeMaxValue}
                         errorValue={errorValueMax}/>
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={`${styles.Buttons} ${styles.ButtonOne}`}>
                    <Button name={'Settings'} disable={disableSettings} callBack={setToLocalStorageHandler}/>
                </div>
            </div>
        </div>
    );
};

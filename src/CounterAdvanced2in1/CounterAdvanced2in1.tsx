import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './CounterAdvanced2in1.module.css';
import {Settings} from './components/Settings/Settings';
import {Monitor} from './components/Monitor/Monitor';
import {Button} from './components/Button/Button';

export const CounterAdvanced2in1: FC = () => {
    const [valueStart, setValueStart] = useState<number>(0);
    const [valueMax, setValueMax] = useState<number>(5);
    const [countStart, setCountStart] = useState<number>(valueStart);
    const [countMax, setCountMax] = useState<number>(valueMax);
    const [disableSettings, setDisableSettings] = useState<boolean>(false);
    const [settings, setSettings] = useState<boolean>(false);

    useEffect(() => {
        const valueStartFromStorage = localStorage.getItem('valueStart');
        const valueMaxFromStorage = localStorage.getItem('valueMax');

        if (valueStartFromStorage) {
            setCountStart(JSON.parse(valueStartFromStorage));
            setValueStart(JSON.parse(valueStartFromStorage));
        }
        if (valueMaxFromStorage) {
            setCountMax(JSON.parse(valueMaxFromStorage));
            setValueMax(JSON.parse(valueMaxFromStorage));
        }
    }, []);

    // данный useEffect нужен чтобы значение в localStorage устанавливалось при countIncrement (иначе на 1 тормозит)
    useEffect(() => {
        setToLocalStorage();
    }, [countStart]); // тут макс не обязательно тк при клике на инкремент его не устанавливаю

    const countIncrement = () => {
        setCountStart(countStart + 1);
    };

    const countReset = () => {
        setCountStart(valueStart);
    };

    const setToLocalStorage = () => {
        localStorage.setItem('valueStart', JSON.stringify(valueStart));
        localStorage.setItem('valueMax', JSON.stringify(valueMax));
    };

    // функция чтобы не дублировать проверки внутри onChangeMaxValue и onChangeStartValue
    const checkDisableSettings = (start: number, max: number) => {
        if (start < max && start >= 0 && max > 0) {
            setDisableSettings(false);
        } else {
            setDisableSettings(true);
        }
    };

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValueStart(+e.currentTarget.value);
        checkDisableSettings(+e.currentTarget.value, valueMax);
    };

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMax(+e.currentTarget.value);
        checkDisableSettings(valueStart, +e.currentTarget.value);
    };

    const setHandler = () => {
        setCountStart(valueStart);
        setCountMax(valueMax);
        setSettings(!settings);
        setToLocalStorage();
    };

    const disableIncrement = countStart === countMax;
    const disableReset = countStart === valueStart;

    return (
        <div className={styles.Counter}>
            <div className={styles.MonitorWrap}>
                {settings
                    ? <Settings
                        valueStart={valueStart}
                        valueMax={valueMax}
                        onChangeStartValue={onChangeStartValue}
                        onChangeMaxValue={onChangeMaxValue}
                    />
                    : <Monitor countStart={countStart} disable={disableIncrement}/>
                }
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={`${settings ? styles.ButtonOne : styles.Buttons}`}>
                    {!settings &&
                        <>
                            <Button name={'Increment'} disable={disableIncrement} callBack={countIncrement}/>
                            <Button name={'Reset'} disable={disableReset} callBack={countReset}/>
                        </>
                    }
                    <Button name={'Settings'} disable={disableSettings} callBack={setHandler}/>
                </div>
            </div>
        </div>
    );
};

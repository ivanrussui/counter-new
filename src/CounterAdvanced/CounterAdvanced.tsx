import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './CounterAdvanced.module.css';
import {Counter} from './Counter';
import {Settings} from './Settings';

export const CounterAdvanced: FC = () => {
    const [countStart, setCountStart] = useState<number>(0);
    const [countMax, setCountMax] = useState<number>(5);
    const [disableSettings, setDisableSettings] = useState<boolean>(true);

    const [valueStart, setValueStart] = useState<number>(countStart);
    const [valueMax, setValueMax] = useState<number>(countMax);
    const [text, setText] = useState<string | null>(null);

    useEffect(() => {
        const valueStartFromStorage = localStorage.getItem('countStart');
        const valueMaxFromStorage = localStorage.getItem('countMax');
        if (valueStartFromStorage) {
            setCountStart(JSON.parse(valueStartFromStorage));
        }
        if (valueMaxFromStorage) {
            setCountMax(JSON.parse(valueMaxFromStorage));
        }
    }, []);

    // данный useEffect нужен чтобы значение в localStorage устанавливалось при countIncrement (иначе на 1 тормозит)
    useEffect(() => {
        setToLocalStorage();
    }, [countStart]); // тут макс не обязательно тк при клике на инкремент его не устанавливаю

    const countIncrement = () => {
        setCountStart(countStart + 1);
        setToLocalStorage();
    };

    const countReset = () => {
        setCountStart(valueStart);
    };

    const setToLocalStorage = () => {
        localStorage.setItem('countStart', JSON.stringify(countStart));
        localStorage.setItem('countMax', JSON.stringify(countMax));
    };

    // функция чтобы не дублировать проверки внутри onChangeMaxValue и onChangeStartValue
    const checkDisableSettings = (start: number, max: number) => {
        if (start < max && start >= 0 && max > 0) {
            setDisableSettings(false);
            setText(enterValues);
        } else {
            setDisableSettings(true);
            setText(incorrectValue);
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

    const enterValues = 'Enter Values and Press \'Settings\'';
    const incorrectValue = 'Incorrect Value!';
    const disableIncrement = countStart === countMax || text !== null;
    const disableReset = countStart === valueStart || text !== null;

    return (
        <div className={styles.CounterAdvanced}>
            <Settings
                valueStart={valueStart}
                valueMax={valueMax}
                disableSettings={disableSettings}
                setValueStart={setValueStart}
                setValueMax={setValueMax}
                setToLocalStorage={setToLocalStorage}
                setCountStart={setCountStart}
                setCountMax={setCountMax}
                onChangeStartValue={onChangeStartValue}
                onChangeMaxValue={onChangeMaxValue}
                setText={setText}
            />
            <Counter
                countStart={countStart}
                disableIncrement={disableIncrement}
                disableReset={disableReset}
                incorrectValue={incorrectValue}
                text={text}
                countIncrement={countIncrement}
                countReset={countReset}
            />
        </div>
    );
};
import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './CounterAdvanced.module.css';
import {Counter} from './Counter';
import {Settings} from './Settings';

export const CounterAdvanced: FC = () => {
    const [countStart, setCountStart] = useState<number>(() => {
        return +JSON.parse(localStorage.getItem('countStart') || 'null') || 0;
    });
    const [countMax, setCountMax] = useState<number>(5);
    const [disableSettings, setDisableSettings] = useState<boolean>(true); // убрать

    const [valueStart, setValueStart] = useState<number>(countStart);
    const [valueMax, setValueMax] = useState<number>(countMax); //disable/error = valueState >=countMax
    const [text, setText] = useState<string | null>(null); // убрать

    useEffect(() => {
        const valueMaxFromStorage = localStorage.getItem('countMax');

        if (valueMaxFromStorage) {
            setCountMax(JSON.parse(valueMaxFromStorage));
        }
    }, []);

    const countIncrement = () => {
        setCountStart(countStart + 1);
    };

    const countReset = () => {
        setCountStart(valueStart);
    };

    const setToLocalStorage = (key: string, value: number) => {
        localStorage.setItem(key, JSON.stringify(value));
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

    const setHandler = () => {
        setCountStart(valueStart);
        setCountMax(valueMax);
        setText(null);
        setDisableSettings(true);
        setToLocalStorage('countStart', valueStart);
        setToLocalStorage('countMax', valueMax);
    };

    // тут бы добавить функцию и чтобы в нее приходили 2 текста как я понял
    const enterValues = 'Enter Values and Press \'Settings\''; //checkTypeOfText(value1, value2...)
    const incorrectValue = 'Incorrect Value!';
    const disableIncrement = countStart === countMax || text !== null;
    const disableReset = countStart === valueStart || text !== null;

    return (
        <div className={styles.CounterAdvanced}>
            <Settings
                valueStart={valueStart}
                valueMax={valueMax}
                disableSettings={disableSettings}
                setHandler={setHandler}
                onChangeStartValue={onChangeStartValue}
                onChangeMaxValue={onChangeMaxValue}
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

import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './CounterAdvanced.module.css';
import {Counter} from './Counter';
import {Settings} from './Settings';

export const CounterAdvanced: FC = () => {
    const [valueStart, setValueStart] = useState<number>(0);
    const [valueMax, setValueMax] = useState<number>(5);
    const [countStart, setCountStart] = useState<number>(valueStart);
    const [countMax, setCountMax] = useState<number>(valueMax);
    const [disableSettings, setDisableSettings] = useState<boolean>(true);
    const [text, setText] = useState<string | null>(null);

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
                setCountStart={setCountStart}
                setCountMax={setCountMax}
                setValueStart={setValueStart}
                setValueMax={setValueMax}
                onChangeStartValue={onChangeStartValue}
                onChangeMaxValue={onChangeMaxValue}
                setDisableSettings={setDisableSettings}
                setText={setText}
                setToLocalStorage={setToLocalStorage}
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
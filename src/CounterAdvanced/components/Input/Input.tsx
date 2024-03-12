import React, {ChangeEvent, FC} from 'react';
import styles from '../../CounterAdvanced.module.css';

type InputType = {
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    errorValue: boolean
}

export const Input: FC<InputType> = ({value, callBack, errorValue}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e);
    };
    const inputClass = `${styles.Input}${errorValue ? ` ${styles.InputError}` : ''}`;

    return <input value={value} onChange={onChangeHandler} className={inputClass} type="number"/>
};

import React, {ChangeEvent, FC} from 'react';
import styles from '../../CounterAdvanced.module.css';

type InputType = {
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export const Input: FC<InputType> = ({value, callBack, error}) => {
    const inputClass = `${styles.Input} ${error ? styles.InputError : ''}`;

    return <input value={value} onChange={callBack} className={inputClass} type="number"/>
};

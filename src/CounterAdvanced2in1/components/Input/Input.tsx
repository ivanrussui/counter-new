import React, {ChangeEvent, FC} from 'react';
import styles from '../../CounterAdvanced2in1.module.css';

type InputType = {
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    errorValue: boolean
}

export const Input: FC<InputType> = ({value, callBack, errorValue}) => {
    const inputClass = `${styles.Input} ${errorValue ? styles.InputError : ''}`;

    return <input value={value} onChange={callBack} className={inputClass} type="number"/>;
};

import React, {ChangeEvent, FC} from 'react';
import styles from '../../../CounterAdvanced2in1.module.css';
import {Input} from '../../Input/Input';

type SettingType = {
    title: string
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    errorValue: boolean
}

export const Setting: FC<SettingType> = ({title, value, callBack, errorValue}) => {
    return (
        <div className={styles.Setting}>
            <h4 className={styles.Title}>{title}</h4>
            <Input value={value} callBack={callBack} errorValue={errorValue}/>
        </div>
    );
};

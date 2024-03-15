import React, {ChangeEvent, FC} from 'react';
import styles from '../../CounterAdvanced.module.css';
import {Input} from '../Input/Input';

type SettingType = {
    title: string
    value: number
    error: boolean
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Setting: FC<SettingType> = ({title, value, callBack, error}) => {
    return (
        <div className={styles.Setting}>
            <h4 className={styles.Title}>{title}</h4>
            <Input value={value} callBack={callBack} error={error}/>
        </div>
    );
};

import React, {ChangeEvent, FC} from 'react';
import styles from '../../CounterAdvanced2in1.module.css';
import {Setting} from './Setting/Setting';

type SettingsType = {
    valueStart: number
    valueMax: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Settings: FC<SettingsType> = ({
                                               valueStart, valueMax,
                                               onChangeStartValue, onChangeMaxValue
                                           }) => {
    const errorValueStart = valueStart < 0 || valueStart >= valueMax;
    const errorValueMax = valueStart >= valueMax;

    return (
        <div className={styles.Settings}>
            <Setting title={'Start Value:'} value={valueStart} callBack={onChangeStartValue}
                     errorValue={errorValueStart}/>
            <Setting title={'Max Value:'} value={valueMax} callBack={onChangeMaxValue}
                     errorValue={errorValueMax}/>
        </div>
    );
};

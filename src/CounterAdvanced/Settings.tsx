import React, {ChangeEvent, FC} from 'react';
import styles from './CounterAdvanced.module.css';
import {Button} from './components/Button/Button';
import {Setting} from './components/Setting/Setting';

type SettingsType = {
    valueStart: number
    valueMax: number
    disableSettings: boolean
    setHandler: () => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
}

type SettingStateType = {
    id: number
    title: string
    value: number
    error: boolean
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Settings: FC<SettingsType> = ({
                                               valueStart, valueMax,
                                               disableSettings,
                                               onChangeStartValue, onChangeMaxValue, setHandler
                                           }) => {
    const errorValueStart = valueStart < 0 || valueStart >= valueMax;
    const errorValueMax = valueStart >= valueMax;

    const settings: SettingStateType[] = [
        {id: 1, title: 'Max Value:', value: valueMax, error: errorValueMax, callBack: onChangeMaxValue},
        {id: 2, title: 'Start Value:', value: valueStart, error: errorValueStart, callBack: onChangeStartValue},
    ];

    return (
        <div className={styles.Settings}>
            <div className={styles.MonitorSettingsWrap}>
                {settings.map(el => {
                    return <Setting key={el.id}
                                    title={el.title}
                                    value={el.value}
                                    error={el.error}
                                    callBack={el.callBack}
                    />;
                })}
                {/*<Setting title={'Start Value:'} value={valueStart} callBack={onChangeStartValue}*/}
                {/*         errorValue={errorValueStart}/>*/}
                {/*<Setting title={'Max Value:'} value={valueMax} callBack={onChangeMaxValue}*/}
                {/*         errorValue={errorValueMax}/>*/}
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={`${styles.Buttons} ${styles.ButtonOne}`}>
                    <Button name={'Settings'} disable={disableSettings} callBack={setHandler}/>
                </div>
            </div>
        </div>
    );
};

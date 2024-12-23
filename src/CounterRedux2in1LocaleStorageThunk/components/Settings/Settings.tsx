import React, {ChangeEvent, FC} from 'react';
import styles from '../../CounterRedux2in1LocaleStorageThunk.module.css';
import {Setting} from './Setting/Setting';
import {changeDisableSettingsAC, changeMaxValueAC, changeStartValueAC,} from '../../state/settings-reducer';
import {useAppDispatch} from '../../hooks/hooks';

type SettingsType = {
    valueStart: number
    valueMax: number
}

export const Settings: FC<SettingsType> = ({valueStart, valueMax}) => {
    const dispatch = useAppDispatch();

    const errorValueStart = valueStart < 0 || valueStart >= valueMax;
    const errorValueMax = valueStart >= valueMax;

    const checkDisableSettings = (start: number, max: number) => {
        if (start >= max || start < 0 || max < 0) {
            dispatch(changeDisableSettingsAC(true));
        } else {
            dispatch(changeDisableSettingsAC(false));
        }
    };

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(+e.currentTarget.value));
        dispatch(changeDisableSettingsAC(false));
        checkDisableSettings(+e.currentTarget.value, valueMax);
    };

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(+e.currentTarget.value));
        dispatch(changeDisableSettingsAC(false));
        checkDisableSettings(valueStart, +e.currentTarget.value);
    };

    return (
        <div className={styles.Settings}>
            <Setting title={'Start Value:'} value={valueStart} callBack={onChangeStartValue}
                     errorValue={errorValueStart}/>
            <Setting title={'Max Value:'} value={valueMax} callBack={onChangeMaxValue}
                     errorValue={errorValueMax}/>
        </div>
    );
};

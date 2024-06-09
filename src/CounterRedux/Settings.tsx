import React, {ChangeEvent, FC} from 'react';
import styles from './CounterRedux.module.css';
import {Button} from './components/Button/Button';
import {Setting} from './components/Setting/Setting';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {changeDisableSettingsAC, changeMaxValueAC, changeStartValueAC, SettingsType} from './state/settings-reducer';
import {setMaxCountAC, setStartCountAC, setTextAC} from './state/counter-reducer';

export const incorrectValue = 'Incorrect Value!';

export const Settings: FC = () => {
    const dispatch = useDispatch();
    const settings = useSelector<AppRootStateType, SettingsType>
    (state => state.settings);

    const enterValues = 'Enter Values and Press \'Settings\'';
    const errorValueStart = settings.valueStart < 0 || settings.valueStart >= settings.valueMax;
    const errorValueMax = settings.valueStart >= settings.valueMax;

    const setHandler = () => {
        if (!settings.disableSettings) {
            dispatch(setStartCountAC(settings.valueStart));
            dispatch(setMaxCountAC(settings.valueMax));
            dispatch(changeDisableSettingsAC(true));
            dispatch(setTextAC(null));
        }
    };
    const checkDisableSettings = (start: number, max: number) => {
        if (start < max && start >= 0 && max > 0) {
            dispatch(changeDisableSettingsAC(false));
            dispatch(setTextAC(enterValues));
        } else {
            dispatch(changeDisableSettingsAC(true));
            dispatch(setTextAC(incorrectValue));
        }
    };
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(+e.currentTarget.value));
        dispatch(changeDisableSettingsAC(false));
        dispatch(setTextAC(enterValues));
        checkDisableSettings(+e.currentTarget.value, settings.valueMax);
    };
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(+e.currentTarget.value));
        dispatch(changeDisableSettingsAC(false));
        dispatch(setTextAC(enterValues));
        checkDisableSettings(settings.valueStart, +e.currentTarget.value);
    };

    return (
        <div className={styles.Settings}>
            <div className={styles.MonitorSettingsWrap}>
                <Setting title={'Start Value:'}
                         value={settings.valueStart}
                         callBack={onChangeStartValue}
                         errorValue={errorValueStart}
                />
                <Setting title={'Max Value:'}
                         value={settings.valueMax}
                         callBack={onChangeMaxValue}
                         errorValue={errorValueMax}
                />
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={`${styles.Buttons} ${styles.ButtonOne}`}>
                    <Button name={'Settings'} disable={settings.disableSettings} callBack={setHandler}/>
                </div>
            </div>
        </div>
    );
};

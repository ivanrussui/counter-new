import React, {ChangeEvent, FC, useEffect} from 'react';
import styles from './CounterReduxLocaleStorageThunk.module.css';
import {Button} from './components/Button/Button';
import {Setting} from './components/Setting/Setting';
import {
    changeDisableSettingsAC,
    changeMaxValueAC,
    changeStartValueAC,
    setMaxValueTC,
    setStartValueTC,
    SettingsType
} from './state/settings-reducer';
import {changeMaxCountTC, changeStartCountTC, setTextAC} from './state/counter-reducer';
import {enterValues, incorrectValue} from './consts/consts';
import {useAppDispatch, useAppSelector} from './hooks/hooks';

export const Settings: FC = () => {
    const dispatch = useAppDispatch();

    const settings = useAppSelector<SettingsType>(state => state.settings);

    const {valueStart, valueMax, isDisableSettings} = settings;

    useEffect(() => {
        dispatch(setStartValueTC());
        dispatch(setMaxValueTC());
    }, []);


    const setHandler = () => {
        // реализация через getState
        dispatch(changeStartCountTC());
        dispatch(changeMaxCountTC());

        // реализация через параметры
        // dispatch(changeStartCountTC(valueStart));
        // dispatch(changeMaxCountTC(valueMax));

        dispatch(changeDisableSettingsAC(true));
        dispatch(setTextAC(null));
    };

    const checkDisableSettings = (start: number, max: number) => {
        if (start >= max || start < 0 || max < 0) {
            dispatch(changeDisableSettingsAC(true));
            dispatch(setTextAC(incorrectValue));
        } else {
            dispatch(changeDisableSettingsAC(false));
            dispatch(setTextAC(enterValues));
        }
    };
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(+e.currentTarget.value));
        dispatch(changeDisableSettingsAC(false));
        dispatch(setTextAC(enterValues));
        checkDisableSettings(+e.currentTarget.value, valueMax);
    };
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(+e.currentTarget.value));
        dispatch(changeDisableSettingsAC(false));
        dispatch(setTextAC(enterValues));
        checkDisableSettings(valueStart, +e.currentTarget.value);
    };

    const errorValueStart = valueStart < 0 || valueStart >= valueMax;
    const errorValueMax = valueStart >= valueMax || valueMax < 0;

    return (
        <div className={styles.Settings}>
            <div className={styles.MonitorSettingsWrap}>
                <Setting title={'Start Value:'}
                         value={valueStart}
                         callBack={onChangeStartValue}
                         errorValue={errorValueStart}
                />
                <Setting title={'Max Value:'}
                         value={valueMax}
                         callBack={onChangeMaxValue}
                         errorValue={errorValueMax}
                />
            </div>
            <div className={styles.ButtonsWrap}>
                <div className={`${styles.Buttons} ${styles.ButtonOne}`}>
                    <Button name={'Settings'} disable={isDisableSettings} callBack={setHandler}/>
                </div>
            </div>
        </div>
    );
};

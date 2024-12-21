import React, {ChangeEvent, FC} from 'react';
import styles from './CounterReduxLocaleStorageSrore.module.css';
import {Button} from './components/Button/Button';
import {Setting} from './components/Setting/Setting';
import {changeDisableSettingsAC, changeMaxValueAC, changeStartValueAC, SettingsType} from './state/settings-reducer';
import {setTextAC} from './state/counter-reducer';
import {enterValues, incorrectValue} from './consts/consts';
import {setMaxCountAC, setStartCountAC} from '../CounterRedux/state/counter-reducer';
import {saveState} from './utils/localeStorage-utils';
import {storeLocaleStorage} from './state/store';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../CounterRedux/state/store';

export const Settings: FC = () => {
    const dispatch = useDispatch();

    const settings = useSelector<AppRootStateType, SettingsType>(state => state.settings);

    const {valueStart, valueMax, isDisableSettings} = settings;

    const setHandler = () => {
        dispatch(setStartCountAC(valueStart));
        dispatch(setMaxCountAC(valueMax));
        dispatch(changeDisableSettingsAC(true));
        dispatch(setTextAC(null));

        // сохр изменение в Locale Storage только по клику на Settings
        // актуально если ты не сочешь сохранять по любому чиху (store.ts -> storeLocaleStorage.subscribe)
        // чтобы было как во всех остальных счетчиках
        saveState(storeLocaleStorage.getState());
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

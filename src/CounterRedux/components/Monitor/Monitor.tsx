import React, {FC} from 'react';
import styles from '../../CounterRedux.module.css';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {CounterType} from '../../state/counter-reducer';
import {incorrectValue} from '../../Settings';

type MonitorType = {
    countStart: number
    disable: boolean
}
export const Monitor: FC<MonitorType> = ({countStart, disable}) => {
    const counter = useSelector<AppRootStateType, CounterType>
    (state => state.counter);

    const countClass = `${styles.Monitor} ${disable ? styles.MonitorError : ''}`;
    const textClass = counter.text === incorrectValue ? styles.TextError : styles.Text;

    return <>
        {counter.text
            ? <div className={textClass}>{counter.text}</div>
            : <div className={countClass}>{countStart}</div>
        }
    </>;
};

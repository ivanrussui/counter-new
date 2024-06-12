import React, {FC} from 'react';
import styles from '../../CounterRedux.module.css';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {CounterType} from '../../state/counter-reducer';
import {incorrectValue} from '../../consts';

type MonitorType = {
    countStart: number
    disable: boolean
}

export const Monitor: FC<MonitorType> = ({countStart, disable}) => {
    const counter = useSelector<AppRootStateType, CounterType>
    (state => state.counter);

    const {text} = counter;

    const countClass = `${styles.Monitor} ${disable ? styles.MonitorError : ''}`;
    const textClass = text === incorrectValue ? styles.TextError : styles.Text;

    return <>
        {text
            ? <div className={textClass}>{text}</div>
            : <div className={countClass}>{countStart}</div>
        }
    </>;
};

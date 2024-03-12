import React, {FC} from 'react';
import styles from '../../CounterAdvanced.module.css';

type MonitorType = {
    countStart: number
    disable: boolean
    incorrectValue: string
    text: null | string
}
export const Monitor: FC<MonitorType> = ({countStart, disable, text, incorrectValue}) => {
    const countClass = `${styles.Monitor}${disable ? ` ${styles.MonitorError}` : ''}`;
    const textClass = text === incorrectValue ? styles.TextError : styles.Text;

    return <>
        {text
            ? <div className={textClass}>{text}</div>
            : <div className={countClass}>{countStart}</div>
        }
    </>;
};

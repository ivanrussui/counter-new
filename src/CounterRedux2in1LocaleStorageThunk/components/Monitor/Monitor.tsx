import React, {FC} from 'react';
import styles from '../../CounterRedux2in1LocaleStorageThunk.module.css';

type MonitorType = {
    countStart: number
    disable: boolean
}
export const Monitor: FC<MonitorType> = ({countStart, disable}) => {
    const countClass = `${styles.Monitor} ${disable ? styles.MonitorError : ''}`;

    return <div className={countClass}>{countStart}</div>;
};

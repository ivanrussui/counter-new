import React, {FC} from 'react';
import styles from '../../Counter.module.css';

type MonitorType = {
    count: number
    disable: boolean
}
export const Monitor: FC<MonitorType> = ({count, disable}) => {
    const countClass = `${styles.Monitor} ${disable ? styles.MonitorError : ''}`;

    return <div className={countClass}>{count}</div>;
};

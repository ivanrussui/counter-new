import React, {FC} from 'react';
import styles from '../../Counter.module.css';

type PropsType = {
    count: number
    disable: boolean
}
export const Monitor: FC<PropsType> = ({count, disable}) => {
    const finalClass = `${styles.Monitor}${disable ? ` ${styles.Color}` : ''}`;
    // const finalClass = `${styles.Monitor}${disable ? ` ${styles.Color}` : ''}`;
    // const finalClass = `Monitor${disable ? ' Color' : ''}`;

    return <div className={finalClass}>{count}</div>;
};

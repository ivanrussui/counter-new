import React, {FC} from 'react';
import styles from './CounterRedux.module.css';
import {Counter} from './Counter';
import {Settings} from './Settings';

export const CounterRedux: FC = () => {
    return (
        <div className={styles.CounterRedux}>
            <Settings/>
            <Counter/>
        </div>
    );
};
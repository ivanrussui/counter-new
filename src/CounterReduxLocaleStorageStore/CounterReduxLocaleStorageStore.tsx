import React, {FC} from 'react';
import styles from './CounterReduxLocaleStorageSrore.module.css';
import {Counter} from './Counter';
import {Settings} from './Settings';

export const CounterReduxLocaleStorageStore: FC = () => {
    return (
        <div className={styles.CounterRedux}>
            <Settings/>
            <Counter/>
        </div>
    );
};
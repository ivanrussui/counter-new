import React, {FC} from 'react';
import styles from './CounterReduxLocaleStorageThunk.module.css';
import {Counter} from './Counter';
import {Settings} from './Settings';

export const CounterReduxLocaleStorageThunk: FC = () => {
    return (
        <div className={styles.CounterRedux}>
            <Settings/>
            <Counter/>
        </div>
    );
};
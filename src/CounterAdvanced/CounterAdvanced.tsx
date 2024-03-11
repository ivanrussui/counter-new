// import {Monitor} from './components/Monitor/Monitor';
// import {Button} from './components/Button/Button';
import React, {FC, useState} from 'react';
// import styles from './Counter.module.css';
import {Counter} from './Counter';
import {Settings} from './Settings';

export const CounterAdvanced: FC = () => {

    return (
        <div>
            <Settings/>
            <Counter/>
        </div>
    );
};
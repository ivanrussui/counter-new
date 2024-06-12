import React, {FC} from 'react';
import styles from '../../CounterRedux.module.css';

type ButtonType = {
    name: string
    callBack: () => void
    disable: boolean
}

export const Button: FC<ButtonType> = ({name, callBack, disable}) => {
    const buttonClass = `${styles.Button} ${disable ? styles.Disable : ''}`;

    return <button disabled={disable} className={buttonClass} onClick={callBack}>{name}</button>;
};

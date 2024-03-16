import React, {FC} from 'react';
import styles from '../../CounterAdvanced.module.css';

type ButtonType = {
    name: string
    callBack: () => void
    disable: boolean
}

export const Button: FC<ButtonType> = ({name, callBack, disable}) => {
    const finalClass = `${styles.Button} ${disable ? styles.Disable : ''}`;

    return <button disabled={disable} className={finalClass} onClick={callBack}>{name}</button>;
};

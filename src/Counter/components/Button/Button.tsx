import React, {FC} from 'react';
import styles from '../../Counter.module.css';

type PropsType = {
    name: string
    callBack: () => void
    disable?: boolean
}

export const Button: FC<PropsType> = ({name, callBack, disable}) => {
    const onClickHandler = () => {
        callBack();
    };

    const finalClass = `${styles.Button}${disable ? ` ${styles.Disable}` : ''}`;
    // const finalClass = `Button${disable ? ' Disable' : ''}`;

    return <button disabled={disable} className={finalClass} onClick={onClickHandler}>{name}</button>;
};

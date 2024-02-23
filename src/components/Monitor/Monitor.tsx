import React, {FC} from 'react';

type PropsType = {
    count: number
    disable: boolean
}
export const Monitor: FC<PropsType> = ({count, disable}) => {
    const finalClass = `Monitor${disable ? ' Color' : ''}`;

    return <div className={finalClass}>{count}</div>;
};

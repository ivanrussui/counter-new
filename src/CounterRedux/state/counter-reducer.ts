export type CounterType = {
    countStart: number
    countMax: number
    text: string | null
}

const initialState: CounterType = {
    countStart: 0,
    countMax: 5,
    text: null
};

export const counterReducer = (state: CounterType = initialState, action: CounterReducerType): CounterType => {
    switch (action.type) {
        case 'COUNTER/INCREMENT-COUNT':
            return {...state, countStart: action.count + 1}
        case 'COUNTER/RESET-COUNT':
            return {...state, countStart: action.count}
        case 'COUNTER/SET-START-COUNT':
            return {...state, countStart: action.count}
        case 'COUNTER/SET-MAX-COUNT':
            return {...state, countMax: action.count}
        case 'COUNTER/SET-TEXT':
            return {...state, text: action.text}
        default:
            return state;
    }
};

export type CounterReducerType = IncrementCountACType | ResetCountACType | SetStartCountACType
    | SetMaxCountACType | SetTextACType

type IncrementCountACType = ReturnType<typeof incrementCountAC>
type ResetCountACType = ReturnType<typeof resetCountAC>
type SetStartCountACType = ReturnType<typeof setStartCountAC>
type SetMaxCountACType = ReturnType<typeof setMaxCountAC>
type SetTextACType = ReturnType<typeof setTextAC>

export const incrementCountAC = (count: number) => {
    return {
        type: 'COUNTER/INCREMENT-COUNT',
        count
    } as const;
};
export const resetCountAC = (count: number) => {
    return {
        type: 'COUNTER/RESET-COUNT',
        count
    } as const;
};
export const setStartCountAC = (count: number) => {
    return {
        type: 'COUNTER/SET-START-COUNT',
        count
    } as const;
};
export const setMaxCountAC = (count: number) => {
    return {
        type: 'COUNTER/SET-MAX-COUNT',
        count
    } as const;
};
export const setTextAC = (text: string | null) => {
    return {
        type: 'COUNTER/SET-TEXT',
        text
    } as const;
};
export type CounterType = {
    countStart: number
    countMax: number
}

const initialState: CounterType = {
    countStart: 0,
    countMax: 5
};

export const counterReducer = (state: CounterType = initialState, action: CounterReducerType): CounterType => {
    switch (action.type) {
        case 'COUNTER/INCREMENT-COUNT':
            return {...state, countStart: action.count + 1};
        case 'COUNTER/RESET-COUNT':
            return {...state, countStart: action.count};
        case 'COUNTER/SET-START-COUNT':
            return {...state, countStart: action.count};
        case 'COUNTER/SET-MAX-COUNT':
            return {...state, countMax: action.count};
        default:
            return state;
    }
};

export type CounterReducerType = IncrementCountACType | ResetCountACType | SetStartCountACType | SetMaxCountACType

type IncrementCountACType = ReturnType<typeof incrementCountAC>
type ResetCountACType = ReturnType<typeof resetCountAC>
type SetStartCountACType = ReturnType<typeof setStartCountAC>
type SetMaxCountACType = ReturnType<typeof setMaxCountAC>

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

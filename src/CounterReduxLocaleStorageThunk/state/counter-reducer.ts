import {AppRootStateType, AppThunkType} from './store';

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
        case 'COUNTER/SET-START-COUNT':
            return {...state, countStart: action.count};
        case 'COUNTER/SET-MAX-COUNT':
            return {...state, countMax: action.count};
        case 'COUNTER/INCREMENT-COUNT':
            return {...state, countStart: action.count + 1};
        case 'COUNTER/RESET-COUNT':
            return {...state, countStart: action.count};
        case 'COUNTER/SET-TEXT':
            return {...state, text: action.text};
        default:
            return state;
    }
};

export type CounterReducerType =
    | SetStartCountACType
    | ResetCountACType
    | IncrementCountACType
    | SetMaxCountACType
    | SetTextACType

type SetStartCountACType = ReturnType<typeof setStartCountAC>
type SetMaxCountACType = ReturnType<typeof setMaxCountAC>
type IncrementCountACType = ReturnType<typeof incrementCountAC>
type ResetCountACType = ReturnType<typeof resetCountAC>
type SetTextACType = ReturnType<typeof setTextAC>

export const setStartCountAC = (count: number) => ({type: 'COUNTER/SET-START-COUNT', count} as const);
export const setMaxCountAC = (count: number) => ({type: 'COUNTER/SET-MAX-COUNT', count} as const);
export const incrementCountAC = (count: number) => ({type: 'COUNTER/INCREMENT-COUNT', count} as const);
export const resetCountAC = (count: number) => ({type: 'COUNTER/RESET-COUNT', count} as const);
export const setTextAC = (text: string | null) => ({type: 'COUNTER/SET-TEXT', text} as const);

// thunk
export const setStartCountTC = (): AppThunkType => dispatch => {
    const count = localStorage.getItem('valueStart');
    if (count) {
        dispatch(setStartCountAC(JSON.parse(count)));
    }
};
export const setMaxCountTC = (): AppThunkType => dispatch => {
    const count = localStorage.getItem('valueMax');
    if (count) {
        dispatch(setMaxCountAC(JSON.parse(count)));
    }
};
// реализация через getState
export const changeStartCountTC = (): AppThunkType => (dispatch, getState: () => AppRootStateType) => {
    const value = getState().settings.valueStart
    localStorage.setItem('valueStart', JSON.stringify(value));
    dispatch(setStartCountAC(value));
};
export const changeMaxCountTC = (): AppThunkType => (dispatch, getState: () => AppRootStateType) => {
    const value = getState().settings.valueMax
    localStorage.setItem('valueMax', JSON.stringify(value));
    dispatch(setMaxCountAC(value));
};
// реализация через параметры
// export const changeStartCountTC = (value: number): AppThunkType => dispatch => {
//     localStorage.setItem('valueStart', JSON.stringify(value));
//     dispatch(setStartCountAC(value));
// };
// export const changeMaxCountTC = (value: number): AppThunkType => dispatch => {
//     localStorage.setItem('valueMax', JSON.stringify(value));
//     dispatch(setMaxCountAC(value));
// };
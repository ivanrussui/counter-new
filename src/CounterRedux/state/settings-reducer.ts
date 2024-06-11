export type SettingsType = {
    valueStart: number
    valueMax: number
    disableSettings: boolean
}

const initialState: SettingsType = {
    disableSettings: true,
    valueStart: 0,
    valueMax: 5
};

export const settingsReducer = (state: SettingsType = initialState, action: SettingsReducerType): SettingsType => {
    switch (action.type) {
        case 'SETTINGS/CHANGE-DISABLE-STATUS':
            return {...state, disableSettings: action.status};
        case 'SETTINGS/CHANGE-START-VALUE':
            return {...state, valueStart: action.value};
        case 'SETTINGS/CHANGE-MAX-VALUE':
            return {...state, valueMax: action.value};
        default:
            return state;
    }
};

export type SettingsReducerType = ChangeDisableSettingsACType | ChangeStartValueACType
    | ChangeMaxValueACType

type ChangeDisableSettingsACType = ReturnType<typeof changeDisableSettingsAC>
type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>

export const changeDisableSettingsAC = (status: boolean) => {
    return {
        type: 'SETTINGS/CHANGE-DISABLE-STATUS',
        status
    } as const;
};
export const changeStartValueAC = (value: number) => {
    return {
        type: 'SETTINGS/CHANGE-START-VALUE',
        value
    } as const;
};
export const changeMaxValueAC = (value: number) => {
    return {
        type: 'SETTINGS/CHANGE-MAX-VALUE',
        value
    } as const;
};

export type SettingsType = {
    valueStart: number
    valueMax: number
    isDisableSettings: boolean
    isActiveModeSettings: boolean
}

const initialState: SettingsType = {
    isDisableSettings: false,
    isActiveModeSettings: false,
    valueStart: 0,
    valueMax: 5
};

export const settingsReducer = (state: SettingsType = initialState, action: SettingsReducerType): SettingsType => {
    switch (action.type) {
        case 'SETTINGS/CHANGE-DISABLE-STATUS':
            return {...state, isDisableSettings: action.status};
        case 'SETTINGS/CHANGE-ACTIVE-MODE':
            return {...state, isActiveModeSettings: action.activeMode};
        case 'SETTINGS/CHANGE-START-VALUE':
            return {...state, valueStart: action.value};
        case 'SETTINGS/CHANGE-MAX-VALUE':
            return {...state, valueMax: action.value};
        default:
            return state;
    }
};

export type SettingsReducerType = ChangeDisableSettingsACType | ChangeActiveModeSettingsACType |
    ChangeStartValueACType | ChangeMaxValueACType

type ChangeDisableSettingsACType = ReturnType<typeof changeDisableSettingsAC>
type ChangeActiveModeSettingsACType = ReturnType<typeof changeActiveModeSettingsAC>
type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>

export const changeDisableSettingsAC = (status: boolean) => {
    return {
        type: 'SETTINGS/CHANGE-DISABLE-STATUS',
        status
    } as const;
};
export const changeActiveModeSettingsAC = (activeMode: boolean) => {
    return {
        type: 'SETTINGS/CHANGE-ACTIVE-MODE',
        activeMode
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

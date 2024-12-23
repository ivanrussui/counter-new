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
        case 'SETTINGS/CHANGE-START-VALUE':
            return {...state, valueStart: action.value};
        case 'SETTINGS/CHANGE-MAX-VALUE':
            return {...state, valueMax: action.value};
        case 'SETTINGS/CHANGE-DISABLE-STATUS':
            return {...state, isDisableSettings: action.status};
        case 'SETTINGS/CHANGE-ACTIVE-MODE':
            return {...state, isActiveModeSettings: action.activeMode};
        default:
            return state;
    }
};

export type SettingsReducerType =
    | ChangeStartValueACType
    | ChangeMaxValueACType
    | ChangeDisableSettingsACType
    | ChangeActiveModeSettingsACType

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
type ChangeDisableSettingsACType = ReturnType<typeof changeDisableSettingsAC>
type ChangeActiveModeSettingsACType = ReturnType<typeof changeActiveModeSettingsAC>

export const changeStartValueAC = (value: number) => ({type: 'SETTINGS/CHANGE-START-VALUE', value} as const);
export const changeMaxValueAC = (value: number) => ({type: 'SETTINGS/CHANGE-MAX-VALUE', value} as const);
export const changeDisableSettingsAC = (status: boolean) => ({type: 'SETTINGS/CHANGE-DISABLE-STATUS', status} as const);
export const changeActiveModeSettingsAC = (activeMode: boolean) => ({
    type: 'SETTINGS/CHANGE-ACTIVE-MODE',
    activeMode
} as const);

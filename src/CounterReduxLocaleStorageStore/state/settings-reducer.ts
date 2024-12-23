export type SettingsType = {
    valueStart: number
    valueMax: number
    isDisableSettings: boolean
}

const initialState: SettingsType = {
    isDisableSettings: true,
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
        default:
            return state;
    }
};

export type SettingsReducerType =
    | ChangeStartValueACType
    | ChangeMaxValueACType
    | ChangeDisableSettingsACType

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
type ChangeDisableSettingsACType = ReturnType<typeof changeDisableSettingsAC>

export const changeStartValueAC = (value: number) => ({type: 'SETTINGS/CHANGE-START-VALUE', value} as const);
export const changeMaxValueAC = (value: number) => ({type: 'SETTINGS/CHANGE-MAX-VALUE', value} as const);
export const changeDisableSettingsAC = (status: boolean) => ({type: 'SETTINGS/CHANGE-DISABLE-STATUS', status} as const);

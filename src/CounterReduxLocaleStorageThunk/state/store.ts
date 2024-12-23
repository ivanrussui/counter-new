import {applyMiddleware, combineReducers, legacy_createStore, Store} from 'redux';
import {counterReducer, CounterReducerType} from './counter-reducer';
import {settingsReducer, SettingsReducerType} from './settings-reducer';
import {thunk, ThunkAction, ThunkDispatch} from 'redux-thunk';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
});

// непосредственно создаём store
export const storeThunk = legacy_createStore(rootReducer, {}, applyMiddleware(thunk));

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.storeThunk = storeThunk;

// типизация store что не писать ts-ignore над window.store = store;
declare global {
    interface Window {
        storeThunk: Store<AppRootStateType>;
    }
}

// типизация всех экшенов
export type AppActionsType = CounterReducerType | SettingsReducerType

// типизация всех санок
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

// типизация для диспатча санок
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>

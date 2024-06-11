import {combineReducers, legacy_createStore, Store} from 'redux';
import {counterReducer} from './counter-reducer';
import {settingsReducer} from './settings-reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
});

// непосредственно создаём store
export const store = legacy_createStore(rootReducer);

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.store = store;

// типизация store что не писать ts-ignore над window.store = store;
declare global {
    interface Window {
        store: Store<AppRootStateType>;
    }
}

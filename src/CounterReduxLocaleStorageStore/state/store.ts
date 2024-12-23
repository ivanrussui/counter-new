import {combineReducers, legacy_createStore, Store} from 'redux';
import {counterReducer} from './counter-reducer';
import {settingsReducer} from './settings-reducer';
import {loadState, saveState} from '../utils/localeStorage-utils';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
});

// непосредственно создаём store
export const storeLocaleStorage = legacy_createStore(rootReducer, loadState());

// подписываемся на изменения Store
// так будет любые изменения сохранять, а не по клику на Settings (Settings.tsx -> setHandler -> saveState)
// storeLocaleStorage.subscribe(() => {
//     saveState({
//         counter: storeLocaleStorage.getState().counter,
//         settings: storeLocaleStorage.getState().settings
//     })
// })

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.storeLocaleStorage = storeLocaleStorage;

// типизация store что не писать ts-ignore над window.store = store;
declare global {
    interface Window {
        storeLocaleStorage: Store<AppRootStateType>;
    }
}

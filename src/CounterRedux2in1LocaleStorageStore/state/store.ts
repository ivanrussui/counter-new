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
export const store2in1LocaleStorage = legacy_createStore(rootReducer, loadState());

// подписываемся на изменения Store
// так будет любые изменения сохранять, а не по клику на Settings (Settings.tsx -> setHandler -> saveState)
// store2in1LocaleStorage.subscribe(() => {
//     saveState({
//         counter: store2in1LocaleStorage.getState().counter,
//         settings: store2in1LocaleStorage.getState().settings
//     });
// });

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.store2in1LocaleStorage = store2in1LocaleStorage;

// типизация store что не писать ts-ignore над window.store = store;
declare global {
    interface Window {
        store2in1LocaleStorage: Store<AppRootStateType>;
    }
}

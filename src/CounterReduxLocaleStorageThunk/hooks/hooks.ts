import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatchType, AppRootStateType} from '../state/store';

// кастомные хуки поверх useDispatch & useSelector
export const useAppDispatch = useDispatch<AppDispatchType>; // 1 варинат
// export const useAppDispatch = () => useDispatch<AppDispatchType>(); // 2 вариант
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

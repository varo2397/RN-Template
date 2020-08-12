import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';

import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

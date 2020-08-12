import { ThunkAction } from 'redux-thunk';
import { RootState } from './rootReducer';
import { UserActionTypes } from '@typings/state/user';

export type AllActions = UserActionTypes;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ThunkResult<R> = ThunkAction<R, RootState, any, AllActions>;

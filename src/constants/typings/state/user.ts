import { userActions } from '../../action-types';

export interface SetUser {
  type: typeof userActions.SET_USER;
  payload: User;
}

export type UserActionTypes = SetUser;

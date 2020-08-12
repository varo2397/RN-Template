import { userActions } from '@constants';
import { UserActionTypes } from '@typings/state/user';

const initialState: UserState = {
  info: {
    name: '',
  },
};

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case userActions.SET_USER:
      return {
        ...state,
        info: action.payload,
      };
    default: {
      return state;
    }
  }
}

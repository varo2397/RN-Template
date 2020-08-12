import { userActions } from '@constants';
import { ThunkResult } from '@state/types';
import axios from 'axios';

export const setUser = (user: User) => ({
  type: userActions.SET_USER,
  payload: user,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const exampleThunk = (): ThunkResult<void> => (dispatch) => {
  axios.get<ExampleAuthResponse>('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    // eslint-disable-next-line no-console
    console.log(response.data.id);
  });
};

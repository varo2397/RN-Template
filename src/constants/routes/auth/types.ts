import * as routeNames from './routes';

export type AuthRootStackParams = {
  [routeNames.LOGIN]: Login;
};

export type Login = {
  userID: string;
};

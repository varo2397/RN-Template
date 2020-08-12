import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { authRoutes, authRouteTypes } from '@constants';
import Login from '@screens/auth/Login';

const Stack = createStackNavigator<authRouteTypes.AuthRootStackParams>();

const AuthNavigation: React.FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName={authRoutes.LOGIN}>
      <Stack.Screen name={authRoutes.LOGIN} component={Login} initialParams={{ userID: '20' }} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

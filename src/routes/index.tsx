import React from 'react';
import AuthNavigation from './auth';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigation: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;

import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Formik } from 'formik';
import { authStrings, authRouteTypes, authRoutes, authImages } from '@constants';
import { InputText, Button } from '@components';
import { setUser } from '@state/user/actions';
import { useTypedSelector } from '@state/rootReducer';
import styles from './styles';
import schema from './schema';
import { useDispatch } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

type LoginNavigationScreenProp = StackScreenProps<authRouteTypes.AuthRootStackParams, typeof authRoutes.LOGIN>;

interface Props extends LoginNavigationScreenProp {
  exampleString?: string;
  exampleNumber?: number;
  exampleBoolean?: boolean;
  exampleArray: string[];
  exampleFunction: (param: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login: React.FC<Props> = ({ exampleArray, exampleFunction, exampleBoolean, exampleNumber, exampleString, route, navigation }) => {
  const [username, setUsername] = useState('');
  const user = useTypedSelector((state) => state.user.info.name);
  const dispatch = useDispatch();

  const handleLogin = ({ username }: UserLogin) => {
    setUsername(username);
    dispatch(setUser({ name: username }));
  };

  return (
    <View style={styles.example}>
      <Text>{authStrings.LOGIN_HELLO_WORLD}</Text>
      <Image source={authImages.EXAMPLE} />
      <Text>{user}</Text>
      <Formik initialValues={{ username }} enableReinitialize onSubmit={(values) => handleLogin(values)} validationSchema={schema}>
        {(props) => (
          <View>
            <InputText onChangeText={props.handleChange('username')} value={props.values.username} error={!!props.errors.username} />
            <Button text={authStrings.LOGIN_BUTTON} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

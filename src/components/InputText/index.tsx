import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface Props {
  onChangeText: (value: string) => void;
  value: string;
  error: boolean;
}

const InputText: React.FC<Props> = ({ onChangeText, value, error }) => {
  return <TextInput value={value} onChangeText={onChangeText} style={[error ? styles.error : null]} />;
};

export default InputText;

import React from 'react';
import { Text, Pressable } from 'react-native';

interface Props {
  onPress: () => void;
  text: string;
}

const Button: React.FC<Props> = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default Button;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles.ts';

type Props = {
  title: string;
  onPress?: () => void;
  isActive?: boolean;
  stretched?: boolean;
};

export const Button: React.FC<Props> = ({
  title,
  onPress,
  isActive,
  stretched,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        stretched && styles.stretchedButton,
        isActive && styles.isButtonActive,
      ]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={[styles.title, isActive && styles.isTextActive]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

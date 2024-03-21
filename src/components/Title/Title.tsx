import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PALETTE} from '~theme';
import ArrowLeft from '../../assets/icons/left-arrow.svg';
import {styles} from './styles.ts';

type Props = {
  title: string;
  onPress?: () => void;
};

export const Title: React.FC<Props> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      {onPress && (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
          <ArrowLeft width={24} height={24} style={{color: PALETTE.white}} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

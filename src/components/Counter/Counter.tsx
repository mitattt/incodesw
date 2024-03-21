import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles.ts';

type Props = {
  title: string;
  count: number;
};

export const Counter: React.FC<Props> = ({title, count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

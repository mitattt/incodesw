import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles.ts';

type Props = {
  title: string;
};

export const NoItemsMessage: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

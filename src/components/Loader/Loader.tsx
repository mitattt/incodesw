import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles.ts';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#AAA" />
    </View>
  );
};

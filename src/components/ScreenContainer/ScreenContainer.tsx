import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getStyles} from './styles.ts';

export const ScreenContainer = ({children}: PropsWithChildren) => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return <View style={styles.screenContainer}>{children}</View>;
};

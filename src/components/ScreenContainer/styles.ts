import {EdgeInsets} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {PALETTE} from '~theme';

export const getStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingTop: insets.top + 24,
      paddingBottom: insets.bottom,
      paddingRight: insets.right + 20,
      paddingLeft: insets.left + 20,
      backgroundColor: PALETTE.white,
    },
  });

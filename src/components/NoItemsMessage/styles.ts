import {StyleSheet} from 'react-native';
import {PALETTE, TYPOGRAPHY} from '~theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...TYPOGRAPHY.h3,
    color: PALETTE.black,
  },
});

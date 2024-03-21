import {StyleSheet} from 'react-native';
import {PALETTE, TYPOGRAPHY} from '~theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: PALETTE.gray,
    backgroundColor: PALETTE.transparent,
    borderRadius: 8,
  },
  count: {
    ...TYPOGRAPHY.h3,
  },
  title: {
    ...TYPOGRAPHY.secondary,
  },
});

import {StyleSheet} from 'react-native';
import {PALETTE, TYPOGRAPHY} from '~theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: PALETTE.black,
  },
  title: {
    ...TYPOGRAPHY.h3,
    color: PALETTE.white,
    padding: 16,
  },
  isButtonActive: {
    backgroundColor: PALETTE.secondaryGray,
  },
  isTextActive: {
    color: PALETTE.black,
    fontWeight: '600',
  },
  stretchedButton: {
    flex: 1,
  },
});

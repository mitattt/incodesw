import {StyleSheet} from 'react-native';
import {PALETTE, TYPOGRAPHY} from '~theme';

export const styles = StyleSheet.create({
  viewContainer: {
    gap: 24,
    paddingBottom: 24,
  },
  container: {
    backgroundColor: PALETTE.white,
    borderRadius: 10,
  },
  buttonContainer: {
    marginBottom: 24,
  },
  featureContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  title: {
    ...TYPOGRAPHY.h2,
    marginBottom: 10,
  },
  label: {
    ...TYPOGRAPHY.secondary,
    color: PALETTE.thirtyGray,
    marginBottom: 4,
  },
  value: {
    ...TYPOGRAPHY.h3,
    marginBottom: 16,
  },
});

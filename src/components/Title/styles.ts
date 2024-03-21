import {StyleSheet} from 'react-native';
import {TYPOGRAPHY} from '~theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  title: {
    ...TYPOGRAPHY.h1,
  },
});

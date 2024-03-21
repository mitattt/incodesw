import {StyleSheet} from 'react-native';
import {PALETTE} from './PALETTE.ts';

export const TYPOGRAPHY = StyleSheet.create({
  h1: {
    fontSize: 32,
    color: PALETTE.black,
    fontWeight: '500',
  },
  h2: {
    fontSize: 24,
    color: PALETTE.black,
    fontWeight: '500',
  },
  h3: {
    fontSize: 16,
    color: PALETTE.black,
    fontWeight: '500',
  },
  secondary: {
    fontSize: 16,
    color: PALETTE.black,
    fontWeight: '400',
  },
});

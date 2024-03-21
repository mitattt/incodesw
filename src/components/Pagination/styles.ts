import {StyleSheet} from 'react-native';
import {PALETTE, TYPOGRAPHY} from '~theme';

export const getStyles = (screenWidth: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      gap: 15,
    },
    page: {
      width: screenWidth / 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: PALETTE.transparent,
    },
    text: {
      ...TYPOGRAPHY.h3,
    },
  });

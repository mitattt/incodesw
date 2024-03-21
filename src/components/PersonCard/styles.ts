import {StyleSheet} from 'react-native';
import {PALETTE, TYPOGRAPHY} from '~theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: PALETTE.gray,
    backgroundColor: PALETTE.transparent,
    padding: 16,
    borderRadius: 8,
  },
  infoContainer: {
    width: '50%',
    gap: 16,
  },
  isFavorite: {
    backgroundColor: PALETTE.secondaryGray,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    ...TYPOGRAPHY.h2,
    color: PALETTE.black,
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  descriptionTitle: {
    ...TYPOGRAPHY.secondary,
    color: PALETTE.black,
  },
  descriptionValue: {
    ...TYPOGRAPHY.h3,
    color: PALETTE.black,
  },
});

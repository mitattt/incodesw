import {StackScreenProps} from '@react-navigation/stack';
import {IFullPerson} from './APITypes.ts';

export type RootStackParamList = {
  HOME_SCREEN: undefined;
  DETAILS_SCREEN: {character: IFullPerson; isFavorite: boolean};
  FAVORITES_SCREEN: undefined;
};

export type RootStackScreenProps<ROUTE_NAME extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, ROUTE_NAME>;

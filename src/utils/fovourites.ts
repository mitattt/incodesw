import AsyncStorage from '@react-native-async-storage/async-storage';
import {IFullPerson, StorageKeys} from '~types';

export const toggleFavorite = async (person: IFullPerson): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = togglePersonFavorite(person, favorites);
    await saveFavorites(updatedFavorites);
  } catch (error: any) {
    throw new Error(error);
  }
};

const togglePersonFavorite = (
  person: IFullPerson,
  favorites: IFullPerson[],
): IFullPerson[] => {
  if (isPersonFavorite(person, favorites)) {
    return favorites.filter((f: IFullPerson) => f.url !== person.url);
  }

  return [...favorites, person];
};

export const isPersonFavorite = (
  person: IFullPerson,
  favorites: IFullPerson[],
): boolean => {
  return favorites.some((f: IFullPerson) => f.url === person.url);
};

export const getFavorites = async (): Promise<IFullPerson[]> => {
  try {
    const storedFavorites = await AsyncStorage.getItem(
      StorageKeys.FAVORITE_PERSONS,
    );
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error: any) {
    throw new Error(error);
  }
};

const saveFavorites = async (favorites: IFullPerson[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      StorageKeys.FAVORITE_PERSONS,
      JSON.stringify(favorites),
    );
  } catch (error: any) {
    throw new Error(error);
  }
};

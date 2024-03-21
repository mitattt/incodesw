import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  IFullPerson,
  RootStackScreenProps,
  ScreensEnum,
  StorageKeys,
} from '~types';
import {getFavorites, isPersonFavorite, toggleFavorite} from '~utils';
import {
  Button,
  Loader,
  NoItemsMessage,
  PersonCard,
  ScreenContainer,
  Separator,
  Title,
} from '~components';
import {styles} from './styles.ts';

export const FavoritesScreen: React.FC<
  RootStackScreenProps<ScreensEnum.FAVORITES_SCREEN>
> = ({navigation}) => {
  const [favorites, setFavorites] = useState<IFullPerson[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkFavorite = useCallback(async () => {
    setIsLoading(true);
    const favoritesData = await getFavorites();
    setFavorites(favoritesData);
    setIsLoading(false);
  }, []);

  const clearFavorites = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(StorageKeys.FAVORITE_PERSONS);
      await checkFavorite();
    } catch (error: any) {
      throw new Error(error);
    }
  }, []);

  const handleToggleFavorite = useCallback(async (character: IFullPerson) => {
    await toggleFavorite(character);
    await checkFavorite();
  }, []);

  const renderListItem = useCallback(
    ({item}: {item: IFullPerson}) => {
      const isFavorite = isPersonFavorite(item, favorites);

      return (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate(ScreensEnum.DETAILS_SCREEN, {
              character: item,
              isFavorite: isFavorite,
            });
          }}>
          <PersonCard
            person={item}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        </TouchableOpacity>
      );
    },
    [favorites],
  );

  useEffect(() => {
    checkFavorite();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScreenContainer>
      <Title
        title="Farorites"
        onPress={() => navigation.navigate(ScreensEnum.HOME_SCREEN)}
      />
      <View style={styles.title}>
        {favorites.length > 0 ? (
          <Button
            title="Clear favorites"
            stretched={true}
            onPress={clearFavorites}
          />
        ) : (
          <Button
            title="Add Favorites"
            stretched={true}
            onPress={() => navigation.navigate(ScreensEnum.HOME_SCREEN)}
          />
        )}
      </View>
      <FlatList
        data={favorites}
        contentContainerStyle={styles.listContentContainer}
        renderItem={renderListItem}
        keyExtractor={item => item.url}
        ItemSeparatorComponent={Separator(16)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <NoItemsMessage title="Your favorite characters list is empty :(" />
        }
      />
    </ScreenContainer>
  );
};

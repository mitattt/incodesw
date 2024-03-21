import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {
  IAPIResponse,
  IFullPerson,
  RootStackScreenProps,
  ScreensEnum,
  StorageKeys,
} from '~types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  Counter,
  Loader,
  NoItemsMessage,
  Pagination,
  PersonCard,
  ScreenContainer,
  Separator,
} from '~components';
import {getAllPeople} from '~api';
import {getFavorites, isPersonFavorite, toggleFavorite} from '~utils';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from './styles.ts';

interface SexCount {
  male: number;
  female: number;
  other: number;
}

export const HomeScreen: React.FC<
  RootStackScreenProps<ScreensEnum.HOME_SCREEN>
> = ({navigation}) => {
  const [people, setPeople] = useState<IAPIResponse<IFullPerson>>();
  const [favorites, setFavorites] = useState<IFullPerson[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sexCount, setSexCount] = useState<SexCount>({
    male: 0,
    female: 0,
    other: 0,
  });

  const updateSexCount = useCallback(() => {
    let maleCount = 0;
    let femaleCount = 0;
    let otherCount = 0;

    for (const character of favorites) {
      const gender = character.gender.toLowerCase();
      switch (gender) {
        case 'male':
          maleCount++;
          break;
        case 'female':
          femaleCount++;
          break;
        default:
          otherCount++;
          break;
      }
    }

    setSexCount({male: maleCount, female: femaleCount, other: otherCount});
  }, [favorites]);

  const getCharacters = useCallback(async (page: number) => {
    setIsLoading(true);
    const data = await getAllPeople(page);
    setIsLoading(false);
    setPeople(data);
  }, []);

  const checkFavorite = useCallback(async () => {
    const favoritesData = await getFavorites();
    setFavorites(favoritesData);
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
    getCharacters(currentPage);
  }, [currentPage]);

  useFocusEffect(
    useCallback(() => {
      checkFavorite();
    }, []),
  );

  useEffect(() => {
    updateSexCount();
  }, [favorites]);

  return (
    <ScreenContainer>
      <View style={styles.controlsContainer}>
        <View style={styles.buttonsContainer}>
          <Button
            title="View all Fans"
            stretched={true}
            onPress={() => navigation.navigate(ScreensEnum.FAVORITES_SCREEN)}
          />
          <Button title="Clear Fans" onPress={clearFavorites} />
        </View>
        <View style={styles.countersContainer}>
          <Counter title="Male Fans" count={sexCount.male} />
          <Counter title="Female Fans" count={sexCount.female} />
          <Counter title="Other" count={sexCount.other} />
        </View>
      </View>

      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={people?.results || []}
          renderItem={renderListItem}
          keyExtractor={item => item.url}
          ItemSeparatorComponent={Separator(16)}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <Pagination
              total={people?.count || '0'}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          }
          ListFooterComponentStyle={styles.footerListStyles}
          ListEmptyComponent={<NoItemsMessage title="Something went wrong" />}
        />
      )}
    </ScreenContainer>
  );
};

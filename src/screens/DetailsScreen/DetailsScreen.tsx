import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {RootStackScreenProps, ScreensEnum} from '~types';
import {Button, ScreenContainer, Title} from '~components';
import {toggleFavorite} from '~utils';
import {styles} from './styles.ts';

export const DetailsScreen: React.FC<
  RootStackScreenProps<ScreensEnum.DETAILS_SCREEN>
> = ({navigation, route}) => {
  const {character, isFavorite} = route.params;
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const buttonText = favoriteStatus ? 'Added to Favorites' : 'Add to Favorites';
  const handleToggleFavorite = () => {
    setFavoriteStatus(!favoriteStatus);
    toggleFavorite(character);
  };

  return (
    <ScreenContainer>
      <Title title={character.name} onPress={() => navigation.goBack()} />
      <View style={styles.buttonContainer}>
        <Button
          title={buttonText}
          onPress={handleToggleFavorite}
          isActive={favoriteStatus}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.viewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Character</Text>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{character.name}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Height:</Text>
            <Text style={styles.value}>{character.height}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Mass:</Text>
            <Text style={styles.value}>{character.mass}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Hair color:</Text>
            <Text style={styles.value}>{character.hair_color}</Text>
          </View>

          <View style={styles.featureContainer}>
            <Text style={styles.label}>Skin color:</Text>
            <Text style={styles.value}>{character.skin_color}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Eye color:</Text>
            <Text style={styles.value}>{character.eye_color}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Birth year:</Text>
            <Text style={styles.value}>{character.birth_year}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.value}>{character.gender}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Character’s Planet</Text>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{character.homeworld.name}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Rotation period:</Text>
            <Text style={styles.value}>
              {character.homeworld.rotation_period}
            </Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Orbital period:</Text>
            <Text style={styles.value}>
              {character.homeworld.orbital_period}
            </Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Diameter:</Text>
            <Text style={styles.value}>{character.homeworld.diameter}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Population:</Text>
            <Text style={styles.value}>{character.homeworld.population}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Climate:</Text>
            <Text style={styles.value}>{character.homeworld.climate}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Gravity:</Text>
            <Text style={styles.value}>{character.homeworld.gravity}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Terrain:</Text>
            <Text style={styles.value}>{character.homeworld.terrain}</Text>
          </View>
          <View style={styles.featureContainer}>
            <Text style={styles.label}>Surface water:</Text>
            <Text style={styles.value}>
              {character.homeworld.surface_water}
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

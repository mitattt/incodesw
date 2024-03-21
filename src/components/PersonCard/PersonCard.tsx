import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {IFullPerson} from '~types';
import {Button} from '~components';
import {styles} from './styles.ts';

type Props = {
  person: IFullPerson;
  favorites: IFullPerson[];
  isFavorite: boolean;
  onToggleFavorite: (character: IFullPerson) => Promise<void>;
};

export const PersonCard: React.FC<Props> = ({
  person,
  isFavorite,
  onToggleFavorite,
}) => {
  const handleToggleFavorite = useCallback(async () => {
    await onToggleFavorite(person);
  }, [person, onToggleFavorite]);

  const buttonText = isFavorite ? 'Added to Favorites' : 'Add to Favorites';

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{person.name}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.descriptionTitle}>Birth year</Text>
            <Text style={styles.descriptionValue}>{person.birth_year}</Text>
          </View>
          <View>
            <Text style={styles.descriptionTitle}>Gender</Text>
            <Text style={styles.descriptionValue}>{person.gender}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.descriptionTitle}>Home World</Text>
            <Text style={styles.descriptionValue}>
              {person.homeworld?.name || 'unknown'}
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionTitle}>Species</Text>
            <Text style={styles.descriptionValue}>
              {person.species?.name || 'unknown'}
            </Text>
          </View>
        </View>
      </View>
      <Button
        title={buttonText}
        onPress={handleToggleFavorite}
        isActive={isFavorite}
      />
    </View>
  );
};

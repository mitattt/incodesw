import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {DetailsScreen, FavoritesScreen, HomeScreen} from '~screens';
import {RootStackParamList, ScreensEnum} from '~types';

const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName={ScreensEnum.HOME_SCREEN}>
      <Stack.Screen
        name={ScreensEnum.HOME_SCREEN}
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name={ScreensEnum.DETAILS_SCREEN}
        component={DetailsScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name={ScreensEnum.FAVORITES_SCREEN}
        component={FavoritesScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

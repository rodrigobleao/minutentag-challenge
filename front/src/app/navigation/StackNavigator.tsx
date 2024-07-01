import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '@screens/stack/home/DetailsScreen';
import HomeDrawerNavigator from './DrawerNavigator';
import { HomeStackParamList } from './types/homeStackNavigationTypes';

const Stack = createStackNavigator<HomeStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeDrawerNavigation"
        component={HomeDrawerNavigator}
      />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@screens/tab/HomeScreen';
import COLORS from '@/styles/colors';

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;

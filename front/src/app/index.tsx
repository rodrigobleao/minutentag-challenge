import React from 'react';
import { SplashScreen } from 'expo-router';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

import '@/styles/global.css';

import TabNavigator from '@navigation/TabNavigator';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (fontsLoaded) SplashScreen.hideAsync();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TabNavigator />
    </>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BagIcon,
  CheckOutIcon,
  HomeIcon,
  SettingIcon,
} from '@/components/Icon/svgIcons';
import COLORS from '@/styles/colors';
import CheckoutScreen from '@screens/tab/CheckOutScreen';
import BagScreen from '@screens/tab/BagScreen';
import SettingsScreen from '@screens/tab/SettingsScreen';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarShowLabel: false,
        headerShown: false,
      }}
      safeAreaInsets={{ bottom: 0 }}
    >
      <Tab.Screen
        name="HomeStackNavigator"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CheckOutScreen"
        component={CheckoutScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CheckOutIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BagScreen"
        component={BagScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <BagIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SettingIcon size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

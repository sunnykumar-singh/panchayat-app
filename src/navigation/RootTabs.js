import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import PanchayatAIScreen from '../screens/PanchayatAIScreen';
import ContactsScreen from '../screens/ContactsScreen';
import MoreStack from './MoreStack';

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: { active: 'home', inactive: 'home-outline' },
  Events: { active: 'calendar', inactive: 'calendar-outline' },
  PanchayatAI: { active: 'chatbubble-ellipses', inactive: 'chatbubble-ellipses-outline' },
  Contacts: { active: 'people', inactive: 'people-outline' },
  More: { active: 'grid', inactive: 'grid-outline' },
};

export default function RootTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          position: 'absolute',
          left: 22,
          right: 22,
          bottom: 22,
          height: 62,
          borderRadius: 31,
          backgroundColor: COLORS.surface,
          borderTopWidth: 0,
          paddingHorizontal: 6,
          paddingTop: 8,
          paddingBottom: 8,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 14,
          shadowOffset: { width: 0, height: 6 },
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
        tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? ICONS[route.name].active : ICONS[route.name].inactive}
            size={20}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="PanchayatAI" component={PanchayatAIScreen} options={{ tabBarLabel: 'PanchayatAI' }} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="More" component={MoreStack} />
    </Tab.Navigator>
  );
}
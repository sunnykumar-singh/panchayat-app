import React from 'react';
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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

function NavTabButton({
  children,
  accessibilityLabel,
  accessibilityRole,
  accessibilityState,
  onLongPress,
  onPress,
  testID,
}) {
  const isActive = accessibilityState?.selected;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      onLongPress={onLongPress}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.tabButton,
        isActive && styles.activeTabButton,
        pressed && styles.pressedTabButton,
      ]}
    >
      {children}
    </Pressable>
  );
}

export default function RootTabs() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isCompactPhone = width <= 430;
  const barHeight = isCompactPhone ? 64 : 70;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarAllowFontScaling: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          position: 'absolute',
          left: isCompactPhone ? 12 : 18,
          right: isCompactPhone ? 12 : 18,
          width: undefined,
          bottom: Math.max(insets.bottom, 10),
          height: barHeight,
          borderRadius: barHeight / 2,
          backgroundColor: 'rgba(255,255,255,0.82)',
          borderTopWidth: 1,
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.72)',
          paddingHorizontal: 5,
          paddingVertical: 5,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.12,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
        },
        tabBarItemStyle: {
          borderRadius: 28,
          marginHorizontal: 1,
        },
        tabBarLabelStyle: {
          fontSize: isCompactPhone ? 9 : 10,
          fontWeight: '600',
          marginTop: 1,
          marginBottom: 1,
        },
        tabBarButton: (props) => <NavTabButton {...props} />,
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name={focused ? ICONS[route.name].active : ICONS[route.name].inactive}
            size={focused ? 23 : 21}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen
        name="PanchayatAI"
        component={PanchayatAIScreen}
        options={{ tabBarLabel: isCompactPhone ? 'AI' : 'PanchayatAI' }}
      />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="More" component={MoreStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  activeTabButton: {
    backgroundColor: COLORS.primaryLight,
  },
  pressedTabButton: {
    opacity: 0.72,
  },
});

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../screens/MoreScreen';
import RulesScreen from '../screens/RulesScreen';
import ComplaintsScreen from '../screens/ComplaintsScreen';

const Stack = createNativeStackNavigator();

// "More" is a tab that contains its own stack, so tapping into
// Rules or Complaints pushes a new screen with a back button,
// instead of cluttering the main bottom tab bar.
export default function MoreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoreHome" component={MoreScreen} />
      <Stack.Screen name="Rules" component={RulesScreen} />
      <Stack.Screen name="Complaints" component={ComplaintsScreen} />
    </Stack.Navigator>
  );
}

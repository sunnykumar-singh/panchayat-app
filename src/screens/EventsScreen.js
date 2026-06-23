import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleHeader } from '../components/Headers';
import { COLORS } from '../constants/theme';

// Placeholder — full Events screen comes in the next step.
export default function EventsScreen() {
  return (
    <View style={styles.screen}>
      <SimpleHeader title="Events" />
      <View style={styles.center}>
        <Text style={styles.text}>Events screen — coming in next step</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: COLORS.textSecondary },
});

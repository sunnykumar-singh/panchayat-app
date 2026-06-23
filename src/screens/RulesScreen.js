import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleHeader } from '../components/Headers';
import { COLORS } from '../constants/theme';

// Placeholder — full screen comes in a later step.
export default function RulesScreen() {
  return (
    <View style={styles.screen}>
      <SimpleHeader title="RulesScreen" />
      <View style={styles.center}>
        <Text style={styles.text}>RulesScreen — coming in next step</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: COLORS.textSecondary },
});

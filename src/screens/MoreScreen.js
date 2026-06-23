import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleHeader } from '../components/Headers';
import { COLORS } from '../constants/theme';

// Placeholder — full screen comes in a later step.
export default function MoreScreen() {
  return (
    <View style={styles.screen}>
      <SimpleHeader title="MoreScreen" />
      <View style={styles.center}>
        <Text style={styles.text}>MoreScreen — coming in next step</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: COLORS.textSecondary },
});

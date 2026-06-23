import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONT, SPACING } from '../constants/theme';

const VARIANTS = {
  green: { bg: COLORS.successBg, fg: COLORS.success },
  amber: { bg: COLORS.amberBg, fg: COLORS.amber },
  red: { bg: COLORS.redBg, fg: COLORS.red },
};

export default function Badge({ label, type = 'green', style }) {
  const v = VARIANTS[type] || VARIANTS.green;
  return (
    <View style={[styles.badge, { backgroundColor: v.bg }, style]}>
      <Text style={[styles.text, { color: v.fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.full,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: FONT.size.xs,
    fontWeight: FONT.weight.medium,
  },
});

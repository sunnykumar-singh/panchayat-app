import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS } from '../constants/theme';

const VARIANTS = {
  green: { bg: COLORS.primaryLight, fg: COLORS.success },
  amber: { bg: COLORS.amberBg, fg: COLORS.amber },
  red: { bg: COLORS.redBg, fg: COLORS.red },
  blue: { bg: COLORS.blueBg, fg: COLORS.blue },
  purple: { bg: COLORS.purpleBg, fg: COLORS.purple },
  gray: { bg: COLORS.surfaceSecondary, fg: COLORS.textSecondary },
};

export default function IconCircle({ name, color = 'green', size = 40, iconSize = 19 }) {
  const v = VARIANTS[color] || VARIANTS.green;
  return (
    <View
      style={[
        styles.wrap,
        { backgroundColor: v.bg, width: size, height: size, borderRadius: size * 0.28 },
      ]}
    >
      <Ionicons name={name} size={iconSize} color={v.fg} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
});

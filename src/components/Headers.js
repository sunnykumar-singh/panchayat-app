import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT, SPACING } from '../constants/theme';
import { SOCIETY } from '../constants/mockData';

// Full header with stats — used on Home.
export function HomeHeader() {
  return (
    <SafeAreaView edges={['top']} style={styles.bg}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.title}>🏘 Panchayat</Text>
          <Text style={styles.sub}>{SOCIETY.name}, {SOCIETY.sub}</Text>
        </View>
        <View style={styles.verifiedBadge}>
          <Ionicons name="shield-checkmark-outline" size={12} color={COLORS.white} />
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
      </View>
      <View style={styles.statsRow}>
        <Stat num={SOCIETY.members} label="Members" />
        <Stat num={SOCIETY.households} label="Households" />
        <Stat num={SOCIETY.openIssues} label="Open Issues" />
      </View>
    </SafeAreaView>
  );
}

// Simple header with a title and optional back button — used on sub-screens.
export function SimpleHeader({ title, onBack }) {
  return (
    <SafeAreaView edges={['top']} style={styles.bg}>
      <View style={styles.simpleRow}>
        {onBack ? (
          <TouchableOpacity onPress={onBack} style={styles.backBtn} accessibilityLabel="Go back">
            <Ionicons name="arrow-back" size={18} color={COLORS.white} />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.simpleTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

function Stat({ num, label }) {
  return (
    <View style={styles.statPill}>
      <Text style={styles.statNum}>{num}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.primary,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
  },
  title: {
    color: COLORS.white,
    fontSize: FONT.size.xxl,
    fontWeight: FONT.weight.medium,
  },
  sub: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: FONT.size.sm,
    marginTop: 2,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  verifiedText: {
    color: COLORS.white,
    fontSize: FONT.size.xs,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  statPill: { alignItems: 'center' },
  statNum: {
    color: COLORS.white,
    fontSize: FONT.size.xl,
    fontWeight: FONT.weight.medium,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
  },
  simpleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.lg,
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleTitle: {
    color: COLORS.white,
    fontSize: FONT.size.lg,
    fontWeight: FONT.weight.medium,
  },
});

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { HomeHeader } from '../components/Headers';
import IconCircle from '../components/IconCircle';
import Badge from '../components/Badge';
import { COLORS, SPACING, RADIUS, FONT } from '../constants/theme';
import { NOTICES, EVENTS } from '../constants/mockData';

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToEvents = () => navigation.navigate('Events');
  const goToContacts = () => navigation.navigate('Contacts');
  const goToRules = () => navigation.navigate('More', { screen: 'Rules' });
  const goToComplaints = () => navigation.navigate('More', { screen: 'Complaints' });

  return (
    <View style={styles.screen}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.body}>
        {NOTICES.map((n) => (
          <View key={n.id} style={styles.notice}>
            <Ionicons name="notifications-outline" size={16} color={COLORS.amber} />
            <Text style={styles.noticeText}>{n.text}</Text>
          </View>
        ))}

        <Text style={styles.sectionLabel}>Quick access</Text>
        <View style={styles.grid}>
          <QuickButton
            icon="calendar-outline"
            color="amber"
            label="Events"
            sub="3 upcoming"
            onPress={goToEvents}
          />
          <QuickButton
            icon="document-text-outline"
            color="blue"
            label="Rules"
            sub="Society bylaws"
            onPress={goToRules}
          />
          <QuickButton
            icon="alert-circle-outline"
            color="red"
            label="Raise Issue"
            sub="Query & complaints"
            onPress={goToComplaints}
          />
          <QuickButton
            icon="people-outline"
            color="green"
            label="Contacts"
            sub="Officials & staff"
            onPress={goToContacts}
          />
        </View>

        <Text style={styles.sectionLabel}>Recent activity</Text>
        <View style={styles.card}>
          {EVENTS.slice(0, 3).map((e, idx) => (
            <View
              key={e.id}
              style={[styles.eventRow, idx === 2 && { borderBottomWidth: 0 }]}
            >
              <View style={[styles.dateBox, e.past && { backgroundColor: COLORS.textTertiary }]}>
                <Text style={styles.dateDay}>{e.day}</Text>
                <Text style={styles.dateMon}>{e.month}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.eventTitle}>{e.title}</Text>
                <Text style={styles.eventSub}>
                  {e.location}
                  {e.time ? ` · ${e.time}` : ''}
                </Text>
                <Badge label={e.status} type={e.statusType} style={{ marginTop: 4 }} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function QuickButton({ icon, color, label, sub, onPress }) {
  return (
    <TouchableOpacity style={styles.quickBtn} onPress={onPress} activeOpacity={0.7}>
      <IconCircle name={icon} color={color} size={34} iconSize={16} />
      <Text style={styles.quickLabel}>{label}</Text>
      <Text style={styles.quickSub}>{sub}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  body: { padding: SPACING.lg, paddingBottom: 40 },

  notice: {
    flexDirection: 'row',
    gap: SPACING.sm,
    backgroundColor: COLORS.amberBg,
    borderWidth: 0.5,
    borderColor: '#FAC775',
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  noticeText: {
    flex: 1,
    color: '#633806',
    fontSize: FONT.size.sm,
    lineHeight: 18,
  },

  sectionLabel: {
    fontSize: FONT.size.xs,
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    fontWeight: FONT.weight.medium,
    marginBottom: SPACING.sm,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  quickBtn: {
    width: '47.5%',
    backgroundColor: COLORS.surface,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    gap: SPACING.sm,
  },
  quickLabel: {
    fontSize: FONT.size.base,
    fontWeight: FONT.weight.medium,
    color: COLORS.textPrimary,
  },
  quickSub: {
    fontSize: FONT.size.xs,
    color: COLORS.textSecondary,
  },

  card: {
    backgroundColor: COLORS.surface,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
  },
  eventRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    paddingVertical: SPACING.md,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.borderLight,
    alignItems: 'flex-start',
  },
  dateBox: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: 'center',
    minWidth: 44,
  },
  dateDay: { color: COLORS.white, fontSize: 18, fontWeight: '500', lineHeight: 20 },
  dateMon: { color: 'rgba(255,255,255,0.8)', fontSize: 10 },
  eventTitle: { fontSize: FONT.size.base, fontWeight: FONT.weight.medium, color: COLORS.textPrimary },
  eventSub: { fontSize: FONT.size.sm, color: COLORS.textSecondary, marginTop: 2 },
});

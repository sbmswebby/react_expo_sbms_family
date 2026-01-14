import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Bell, Search, ChevronRight } from 'lucide-react-native';

export default function EventsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const notificationCount = 3; // Example count

  const events = [
    { id: 'sima-expo', title: 'SIMA Beauty EXPO', date: '25 - 26 Jan 2026' },
    { id: 'vj-seminar', title: 'Vijayawada Seminar', date: '30th Jan 2026' },
  ];

  const quickSearches = ['Beauty', 'Seminars', 'Workshops', 'Upcoming'];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header Bar */}
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Image 
            source={require('../../assets/images/SBMS.jpg')} 
            style={styles.logo} 
          />
          <Text style={styles.headerTitle}>SBMS Family</Text>
        </View>
        
        <TouchableOpacity style={styles.notificationContainer}>
          <Bell 
            color={notificationCount > 0 ? "#FF8C00" : "white"} 
            size={24} 
          />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* 2. Search Bar */}
        <View style={styles.searchSection}>
          <Search color="#64748b" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events by name..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* 3. Quick Search Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
          {quickSearches.map((item) => (
            <TouchableOpacity key={item} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Event Buttons */}
        <View style={styles.eventList}>
          {events.map((event) => (
            <TouchableOpacity 
              key={event.id}
              style={styles.eventButton}
              onPress={() => router.push(`/events/${event.id}`)}
            >
              <View>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventSubtext}>{event.date}</Text>
              </View>
              <ChevronRight color="#cbd5e1" size={20} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },
  headerBar: {
    backgroundColor: '#000',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  notificationContainer: { position: 'relative', padding: 5 },
  badge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  content: { padding: 15 },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 15,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, height: 45 },
  chipContainer: { marginBottom: 20 },
  chip: {
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  chipText: { color: '#475569', fontWeight: '600' },
  eventList: { marginTop: 10 },
  eventButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#FF8C00',
  },
  eventTitle: { fontSize: 16, fontWeight: 'bold' },
  eventSubtext: { color: '#64748b', marginTop: 4 },
});
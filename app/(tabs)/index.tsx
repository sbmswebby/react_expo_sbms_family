import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

export default function EventsScreen() {
  const router = useRouter();

  const events = [
    {
      id: 'sima-expo',
      title: 'SIMA Beauty EXPO',
      date: '25 - 26 Jan 2026',
      color: '#6366f1',
    },
    {
      id: 'vj-seminar',
      title: 'Vijayawada Seminar',
      date: '30th Jan 2026',
      color: '#ec4899',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Upcoming Events</Text>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e293b',
  },
  eventButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#6366f1',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  eventSubtext: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});
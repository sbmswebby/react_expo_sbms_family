import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams(); // This gets 'sima-expo' or 'vj-seminar'

  return (
    <View style={styles.container}>
      {/* This updates the top header title dynamically */}
      <Stack.Screen options={{ title: 'Event Details' }} />
      
      <Text style={styles.title}>Details for: {id}</Text>
      <Text>Welcome to the specific page for this event!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
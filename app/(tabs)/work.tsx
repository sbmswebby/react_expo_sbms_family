import { View, Text, StyleSheet } from 'react-native';

export default function WorkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SBMS Work & Tasks</Text>
      {/* Your list of chores or tasks goes here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' },
});
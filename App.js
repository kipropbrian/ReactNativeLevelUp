import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.borderRed}>Hello world, my name is querty</Text>
      <Text style={styles.borderRed}>Whats up my nigga</Text>
      <Button title='Tap Me'> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderRed: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'green',
    padding: 10
  }
});

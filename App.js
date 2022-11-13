import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello! Guys</Text>
      </View>
      <Text style={styles.dummyText}>Excuse me</Text>
      <Button title="Tap dat!"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 10,
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
  },
});

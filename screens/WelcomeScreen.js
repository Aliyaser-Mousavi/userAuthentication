import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";

function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.message}>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colors.primary100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: Colors.primary800,
  },
  message: {
    fontSize: 16,
    color: Colors.primary500,
    fontWeight: "500",
  },
});

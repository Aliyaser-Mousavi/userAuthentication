import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator size="large" color={Colors.primary500} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colors.primary100,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "500",
    color: Colors.primary800,
  },
});

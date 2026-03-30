import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { Colors } from "../../constants/styles";

function FlatButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{ color: Colors.primary700 }}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
    backgroundColor: Platform.OS === "ios" ? Colors.primary700 : "transparent",
  },
  buttonText: {
    textAlign: "center",
    color: Colors.primary100,
    fontSize: 14,
    fontWeight: "500",
  },
});

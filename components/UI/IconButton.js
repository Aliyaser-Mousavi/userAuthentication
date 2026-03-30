import { Pressable, StyleSheet, Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, size, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
        android_ripple={{ color: "#ccc", borderless: true }}
      >
        <Ionicons name={icon} color={color} size={size} />
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 20,
    overflow: "hidden",
  },
  button: {
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.7 : 1,
  },
});

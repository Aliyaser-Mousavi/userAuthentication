import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { Colors } from "../../constants/styles";

function Button({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary100 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: Colors.primary500,
  },
  buttonInnerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.75 : 1,
    backgroundColor: Colors.primary700,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

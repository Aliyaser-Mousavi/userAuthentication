import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        cursorColor={Colors.primary500}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    color: "white",
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary100,
    borderRadius: 6,
    fontSize: 16,
    color: Colors.primary800,
    borderWidth: 1,
    borderColor: "transparent",
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
    borderWidth: 1,
    borderColor: Colors.error500,
  },
});

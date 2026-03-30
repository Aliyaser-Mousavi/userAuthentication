import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../UI/Button";
import Input from "./Input";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [inputs, setInputs] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    onSubmit({
      email: inputs.email,
      confirmEmail: inputs.confirmEmail,
      password: inputs.password,
      confirmPassword: inputs.confirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <Input
        label="Email Address"
        onUpdateValue={(value) => inputChangedHandler("email", value)}
        value={inputs.email}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Confirm Email Address"
          onUpdateValue={(value) => inputChangedHandler("confirmEmail", value)}
          value={inputs.confirmEmail}
          keyboardType="email-address"
          isInvalid={emailsDontMatch}
        />
      )}
      <Input
        label="Password"
        onUpdateValue={(value) => inputChangedHandler("password", value)}
        secure
        value={inputs.password}
        isInvalid={passwordIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Confirm Password"
          onUpdateValue={(value) =>
            inputChangedHandler("confirmPassword", value)
          }
          secure
          value={inputs.confirmPassword}
          isInvalid={passwordsDontMatch}
        />
      )}
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    gap: 4,
  },
  buttons: {
    marginTop: 18,
  },
});

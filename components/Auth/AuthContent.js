import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../UI/FlatButton";
import AuthForm from "./AuthForm";
import { Colors } from "../../constants/styles";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const emailIsValid = trimmedEmail.includes("@");
    const passwordIsValid = trimmedPassword.length >= 6;
    const emailsAreEqual = trimmedEmail === confirmEmail;
    const passwordsAreEqual = trimmedPassword === confirmPassword;

    const isEmailInvalid = !emailIsValid;
    const isConfirmEmailInvalid =
      !isLogin && (!emailIsValid || !emailsAreEqual);
    const isPasswordInvalid = !passwordIsValid;
    const isConfirmPasswordInvalid =
      !isLogin && (!passwordIsValid || !passwordsAreEqual);

    if (
      isEmailInvalid ||
      isPasswordInvalid ||
      isConfirmEmailInvalid ||
      isConfirmPasswordInvalid
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: isEmailInvalid,
        confirmEmail: isConfirmEmailInvalid,
        password: isPasswordInvalid,
        confirmPassword: isConfirmPasswordInvalid,
      });
      return;
    }

    onAuthenticate({ email: trimmedEmail, password: trimmedPassword });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 12,
  },
});

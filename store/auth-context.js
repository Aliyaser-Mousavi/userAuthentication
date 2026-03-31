import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  async function authenticate(token) {
    setAuthToken(token);
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.error("Failed to save token:", error);
    }
  }
  async function logout() {
    setAuthToken(null);
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.error("Failed to remove token:", error);
    }
  }
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;

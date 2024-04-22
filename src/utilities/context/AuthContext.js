import React, { createContext, useContext, useEffect, useState } from "react";
import Authentication from "../../api/Auth/Authentication";

// Create the AuthContext to hold the authentication state
const AuthContext = createContext();

// AuthProvider component to wrap the application and provide authentication state
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [loginAuth, setLoginAuth] = useState({
    access_token: "",
    refresh_token: "",
  });

  useEffect(() => {
    const storedAccessToken = sessionStorage.getItem("access_token");
    const storedRefreshToken = sessionStorage.getItem("refresh_token");
    if (storedAccessToken && storedRefreshToken) {
      setLoginAuth({
        access_token: storedAccessToken,
        refresh_token: storedRefreshToken,
      });
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (data) => {
    try {
      // Simulate login success
      const response = await Authentication.login({
        username: `${data.username}`,
        password: `${data.password}`,
      });

      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      const dataResponse = response.data.detail;

      // Store tokens in session storage
      sessionStorage.setItem("access_token", dataResponse.access_token);
      sessionStorage.setItem("refresh_token", dataResponse.refresh_token);

      setLoginAuth({
        access_token: dataResponse.access_token,
        refresh_token: dataResponse.refresh_token,
      });

      setIsLoggedIn(true);
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    // Clear tokens from session storage
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    setLoginAuth({
      access_token: "",
      refresh_token: "",
    });
    setIsLoggedIn(false);
  };

  const setEmailValue = (value) => {
    setEmail(value);
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, loginAuth, login, logout, setEmailValue, email}}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook to access authentication state and methods
export const useAuth = () => {
  return useContext(AuthContext);
};

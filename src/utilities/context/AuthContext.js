import React, { createContext, useContext, useState } from "react";
import Authentication from "../../api/Auth/Authentication";

// Create the AuthContext to hold the authentication state
const AuthContext = createContext();

// AuthProvider component to wrap the application and provide authentication state
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginAuth, setLoginAuth] = useState();

  const login = async (data) => {
    // Implement your login logic here
    console.log(data);
    try {
      // Simulate login success
      const response = await Authentication.login({ username: `${data.username}`, password: `${data.password}` });
      
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      const dataResponse = response;

      console.log(dataResponse);
      
      setIsLoggedIn(true);
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook to access authentication state and methods
export const useAuth = () => {
  return useContext(AuthContext);
};

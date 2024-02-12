import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getAuth
} from "firebase/auth";

import { auth } from "../config/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLogging, setLogging] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function register(email, password) {
    setLogging(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLogging(true));
  }

  function login(email, password) {
    setLogging(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLogging(true));
  }

  function logout() {
    setLogging(false);
    return signOut(auth);
  }

  function updateUserProfile(user, profile) {
    return updateProfile(user, profile);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      // setLogging(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    error,
    setError,
    login,
    isLogging,
    setLogging,
    register,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

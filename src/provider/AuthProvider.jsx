import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../firebase.config";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUpMethod = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInMethod = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutMethod = () => {
    return signOut(auth);
  };

  const authObserver = (curUser) => {
    onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);
    });
  };

  const authInfo = {
    user,
    signInMethod,
    signUpMethod,
    signOutMethod,
    authObserver,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

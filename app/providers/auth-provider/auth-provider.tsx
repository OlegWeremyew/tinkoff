import { createContext, FC, ReactNode, useEffect, useMemo, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Alert } from "react-native";
import { AUTH, DB, login, logout, register } from "../../firebase";

interface IContext {
  user: User | null;
  isLoading: boolean;
  isLoadingInitial: boolean;
  register: (email: string, password: string) => Promise<void>,
  login: (email: string, password: string) => Promise<void>,
  logout: () => Promise<void>,
}

interface IAuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(DB, "users"), {
        _id: user.uid,
        displayName: "No name"
      });
    } catch (error: any) {
      Alert.alert("Error registration: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert("Error login: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      Alert.alert("Error logout: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => onAuthStateChanged(AUTH, user => {
    setUser(user || null);
    setIsLoadingInitial(false);
  }), []);

  const value = useMemo(() => ({
    user,
    isLoading,
    isLoadingInitial,
    register: registerHandler,
    login: loginHandler,
    logout: logoutHandler
  }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
};
import { useState, createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks';

type LoginVariables = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
};

export type AuthContextData = {
  user?: User;
  isLogged: boolean;
  signIn: (data: LoginVariables) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const { saveLocalStorage, deleteLocalStorage, getLocalStorage } = useLocalStorage();
  const [user, setUser] = useState<User>();
  const isLogged = Boolean(user?.email)
  const signIn = ({ email, password }: LoginVariables) => {
    const user = { email: email, password: password }
    setUser(user)
    saveLocalStorage('@Flee:user', JSON.stringify(user))
  };

  const signOut = () => {
    setUser(undefined)
    deleteLocalStorage('@Flee:user')
  };

  useEffect(() => {
    const user = getLocalStorage('@Flee:user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return <AuthContext.Provider value={{ isLogged, user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

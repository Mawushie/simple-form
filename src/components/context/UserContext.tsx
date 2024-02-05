import { createContext, useState } from "react";

//this is the initial values
type AuthUser = {
  name: string;
  email: string;
};

//userContextProvider will take some children as props
//defining the type of children
type UserContextProviderProps = {
  children: React.ReactNode;
};

//the context value will also need the type
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as UserContextType);

//This is the provider function that will be wrapped around the components that need it
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

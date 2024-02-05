import { createContext } from "react";
import { theme } from "./theme";
//creating a new theme context. this is what the components that need it will call with useContext
//when they want to access the context
export const ThemeContext = createContext(theme);

//defining the type for the children
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

//the theme context provider function
//we wrap this around the components that we want to be using the Theme, hence the children props
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

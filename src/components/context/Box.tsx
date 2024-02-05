import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  //getting access to the context that was created
  const theme = useContext(ThemeContext);
  console.log(theme);
  return <div style={{ background: theme.primary.main }}>Theme Context</div>;
};

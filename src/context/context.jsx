import { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ContextWrapper(props) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

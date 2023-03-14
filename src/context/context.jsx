import { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ContextWrapper(props) {
  const [theme, setTheme] = useState("light");

  //Changes app theme
  const handleTheme = () => {
    const app = document.querySelector(".App");
    const newTheme = theme === "light" ? "dark" : "light";
    app.classList.remove(theme);
    app.classList.add(newTheme);
    setTheme(newTheme);
    const switchEl = document.querySelector(".switch");
    switchEl.classList.toggle("active");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

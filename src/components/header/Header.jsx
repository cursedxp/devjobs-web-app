import { useContext } from "react";
import { ThemeContext } from "../../context/context";

export default function Header() {
  const { handleTheme } = useContext(ThemeContext);
  return (
    <header className="">
      <div>
        <div className="brand-name"></div>
        <div className="change-theme" onClick={handleTheme}>
          <div className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </div>
        </div>
      </div>
      <div className="filter"></div>
    </header>
  );
}

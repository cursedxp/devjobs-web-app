import { useContext } from "react";
import "../header/Header.scss";
import { ThemeContext } from "../../context/context";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import searchIcon from "../../assets/mobile/searchIcon.svg";
import sunIcon from "../../assets/mobile/sunIcon.svg";
import moonIcon from "../../assets/mobile/MoonIcon.svg";

export default function Header() {
  const { handleTheme } = useContext(ThemeContext);
  return (
    <header>
      <div className="brand">
        <div className="brand-name">devjobs</div>
        <div className="flex gap-4">
          <img src={sunIcon} alt="light theme" width={"20px"} height={"20px"} />
          <div className="change-theme">
            <div className="switch" onClick={handleTheme}>
              <span className="slider"></span>
            </div>
          </div>
          <img src={moonIcon} alt="dark theme" width={"20px"} height={"20px"} />
        </div>
      </div>
      <div className="filter">
        <input type="search" />
        <button>
          <img src={filterIcon} alt="filter" width={"20px"} height={"20px"} />
        </button>
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </div>
    </header>
  );
}

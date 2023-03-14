import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import searchIcon from "../../assets/mobile/searchIcon.svg";
import sunIcon from "../../assets/mobile/sunIcon.svg";
import moonIcon from "../../assets/mobile/MoonIcon.svg";

export default function Header() {
  const { handleTheme } = useContext(ThemeContext);
  return (
    <header className="">
      <div>
        <div className="brand-name">Devjobs</div>
        <div>
          <img src={sunIcon} alt="light theme" width={"20px"} height={"20px"} />
          <div className="change-theme" onClick={handleTheme}>
            <div className="switch">
              <input type="checkbox" />
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

import { useContext } from "react";
import "./Header.scss";
import { ThemeContext } from "../../context/context";
import sunIcon from "../../assets/mobile/sunIcon.svg";
import moonIcon from "../../assets/mobile/MoonIcon.svg";
import Filter from "../Filter/Filter";
import { useLocation, useParams } from "react-router-dom";

export default function Header() {
  const { handleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const { id } = useParams();
  const hideFilter = location.pathname === `/jobs/${id}`;
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
        {hideFilter && <Filter />}
        <div className=""></div>
      </div>
    </header>
  );
}

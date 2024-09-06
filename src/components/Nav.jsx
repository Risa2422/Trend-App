import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "../App";

const Nav = ({ showType, setShowType }) => {
  const selectShowType = (type) => {
    setShowType(type);
  };

  const { isDarkMode, setDarkMode } = useContext(MyContext);

  const updateMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="nav-main">
      <ul className="show-type">
        <li
          onClick={() => selectShowType("movie")}
          className={showType === "movie" ? "selected" : ""}
        >
          Movie
        </li>
        <li
          onClick={() => selectShowType("show")}
          className={showType === "show" ? "selected" : ""}
        >
          Show
        </li>
      </ul>
      <div className="screen-mode">
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          className="mode-icon"
          onClick={updateMode}
        />
      </div>
    </div>
  );
};

export default Nav;

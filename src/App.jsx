import { useState, useEffect, createContext } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

export const MyContext = createContext(false);

function App() {
  // the type of show
  const [showType, setShowType] = useState(() => {
    const saved = localStorage.getItem("showType");
    return saved ? JSON.parse(saved) : "movie";
  });

  // theme
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("showType", JSON.stringify(showType));
  }, [showType]);

  return (
    <MyContext.Provider value={{ isDarkMode, setDarkMode }}>
      <div className={`container ${isDarkMode ? "dark-mode" : ""}`}>
        <Nav showType={showType} setShowType={setShowType} />
        <Main showType={showType} />
      </div>
    </MyContext.Provider>
  );
}

export default App;

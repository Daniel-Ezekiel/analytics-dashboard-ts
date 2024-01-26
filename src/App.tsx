import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";

function App() {
  const [theme, setTheme] = useState<string>("light");
  // console.log(currTheme);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (theme === "light") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MainLayout showDashboard={true}></MainLayout>
      </ThemeContext.Provider>
    </>
  );
}

export default App;


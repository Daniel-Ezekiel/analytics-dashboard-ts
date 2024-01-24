import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";

function App() {
  // const { theme } = useContext(ThemeContext);
  const [currTheme, setCurrTheme] = useState<string>("light");
  // console.log(currTheme);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (currTheme === "light") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }

    console.log(localStorage.theme);
  }, [currTheme]);

  return (
    <>
      <ThemeContext.Provider
        value={{ theme: currTheme, setTheme: setCurrTheme }}
      >
        <MainLayout showDashboard={true}></MainLayout>
      </ThemeContext.Provider>
    </>
  );
}

export default App;


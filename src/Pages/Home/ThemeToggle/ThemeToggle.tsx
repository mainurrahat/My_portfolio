import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? (
        <FaMoon className="text-yellow-400" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
    </div>
  );
};

export default ThemeToggle;

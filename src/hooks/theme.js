import { useEffect, useState } from "react";

/**
 * A hook to get and update the current theme for day/night mode.
 */
export const useTheme = () => {
  const storedTheme =
    typeof window !== "undefined" && window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");
  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);
  useEffect(() => {
    // let react take care of dynamic styles
    forceUpdate(1);
    // after mounting, remove the class from body
    document.body.classList.remove("dark");
  }, []);
  return [theme, toggleTheme];
};

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [bool, setBool] = useLocalStorage("darkmode", false);

  useEffect(() => {
    if (bool) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [bool]);

  return [bool, setBool];
};

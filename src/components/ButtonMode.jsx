/**
 * @copyright 2024 sanusi
 * @license Apache-2.0
 */

import { useState } from "react";

const ButtonMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        setDarkMode((prev) => !prev);
      }}
      className={`w-16 h-5 rounded-full flex items-center justify-center bg-zinc-50/20 dark:bg-sky-500/80`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-50/90 dark:bg-yellow-300 transform transition-transform duration-500 ${
          darkMode ? "translate-x-6" : "-translate-x-5"
        }`}
      >
        <span className="material-symbols-rounded text-zinc-900 dark:text-zinc-50 dark:rotate-180 transition-transform duration-300">
          {!darkMode ? "dark_mode" : "light_mode"}
        </span>
      </div>
    </button>
  );
};

export default ButtonMode;

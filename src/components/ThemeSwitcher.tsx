"use client";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const baseBtn =
    "p-2 rounded-full transition-all duration-200 shadow-md hover:scale-110 focus:outline-none";

  const activeStyles = {
    light: "bg-yellow-400 text-white ring-2 ring-yellow-500 shadow-yellow-400/50",
    dark: "bg-gray-800 text-yellow-300 ring-2 ring-gray-600 shadow-gray-700/70",
    system: "bg-blue-500 text-white ring-2 ring-blue-400 shadow-blue-400/50",
  };

  return (
    <div className="flex gap-3 items-center justify-center">
      <button
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        className={`${baseBtn} ${
          theme === "light"
            ? activeStyles.light
            : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
        }`}
        title="Light"
      >
        <Sun size={20} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        className={`${baseBtn} ${
          theme === "dark"
            ? activeStyles.dark
            : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
        }`}
        title="Dark"
      >
        <Moon size={20} />
      </button>

      <button
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
        className={`${baseBtn} ${
          theme === "system"
            ? activeStyles.system
            : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
        }`}
        title="System"
      >
        <Laptop size={20} />
      </button>
    </div>
  );
}

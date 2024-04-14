"use client";
import React, { createContext, useContext, useState } from "react";

export interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");

  const handleThemeChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    if (newMode !== mode) {
      setMode(newMode);
      document.documentElement.classList.add(newMode);
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

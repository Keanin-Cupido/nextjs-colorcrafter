"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for the theme
const ThemeContext = createContext({ theme: "system", setTheme: (theme: string) => {} });

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: React.ReactNode; attribute: string; defaultTheme: string; enableSystem: boolean; disableTransitionOnChange: boolean }> = ({ children, attribute, defaultTheme, enableSystem, disableTransitionOnChange }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // Effect to handle system theme changes
  useEffect(() => {
    if (enableSystem) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleChange);
      handleChange(); // Set initial theme based on system preference

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [enableSystem]);

  // Update the document's class based on the theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext); 
import { useEffect, useState } from "react";

export function useTheme() {
  // Estado local para saber si está modo oscuro
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Al iniciar, intentamos obtener la preferencia guardada en localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        return saved === "true";
      }
      // Si no hay preferencia, chequea si el sistema está en modo oscuro
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Efecto para aplicar o quitar la clase 'dark' en el html y guardar preferencia
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Función para cambiar el modo
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return { darkMode, toggleDarkMode };
}

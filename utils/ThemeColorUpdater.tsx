"use client"

import { useEffect } from "react"

// Updates website's themecolor after manual toggle of dark/light mode.
export default function ThemeColorUpdater({ theme }: { theme: "light" | "dark" }) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    meta.setAttribute(
      "content",
      theme === "dark" ? "black" : "#fafafa"
    );
  }, [theme]);

  return null;
}
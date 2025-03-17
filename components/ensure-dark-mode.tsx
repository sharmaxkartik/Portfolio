"use client"

import { useEffect } from "react"

export function EnsureDarkMode() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark")
    document.body.classList.add("dark")

    // Set color scheme meta tag
    const meta = document.createElement("meta")
    meta.name = "color-scheme"
    meta.content = "dark"
    document.head.appendChild(meta)

    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  return null
}


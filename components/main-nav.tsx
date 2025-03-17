"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function MainNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || ""
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="flex items-center space-x-6">
      <a href="#home" className="text-2xl font-bold tracking-tighter">
        <span className="text-primary">K</span>
        <span className="text-muted-foreground">S</span>
      </a>
      <ul className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground",
              )}
            >
              {activeSection === item.href.substring(1) && (
                <motion.span layoutId="underline" className="absolute left-0 top-full h-[2px] w-full bg-primary" />
              )}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}


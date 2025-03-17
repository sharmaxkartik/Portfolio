"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  type?: "fade" | "slide" | "scale" | "rotate"
  className?: string
  threshold?: number
}

export function ScrollAnimation({
  children,
  delay = 0,
  direction = "up",
  type = "fade",
  className = "",
  threshold = 0.1,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, threshold, 0.4], [0, 1, 1])

  // Calculate transform values based on direction
  let xDirection = 0
  let yDirection = 0

  if (direction === "up") yDirection = 50
  if (direction === "down") yDirection = -50
  if (direction === "left") xDirection = 50
  if (direction === "right") xDirection = -50

  const shouldRotate = type === "rotate"
  const shouldScale = type === "scale"

  const rotateStart = shouldRotate ? 10 : 0
  const rotateEnd = 0
  const scaleStart = shouldScale ? 0.8 : 1
  const scaleEnd = 1
  const xSlide = type === "slide" ? xDirection : 0
  const ySlide = type === "slide" ? yDirection : 0

  const rotate = useTransform(scrollYProgress, [0, threshold], [rotateStart, rotateEnd])
  const scale = useTransform(scrollYProgress, [0, threshold], [scaleStart, scaleEnd])
  const x = useTransform(scrollYProgress, [0, threshold], [xSlide, 0])
  const y = useTransform(scrollYProgress, [0, threshold], [ySlide, 0])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xSlide, y: ySlide, rotate: rotateStart, scale: scaleStart }}
      style={{
        opacity,
        x,
        y,
        rotate,
        scale,
      }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function TechReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["polygon(0 0, 0 0, 0 100%, 0% 100%)", "polygon(0 0, 100% 0, 100% 100%, 0 100%)"],
  )

  return (
    <motion.div ref={ref} style={{ clipPath }} className={className}>
      {children}
    </motion.div>
  )
}

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute left-0 top-0 z-0 text-primary/30 animate-pulse"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
      >
        {text}
      </span>
      <span
        className="absolute left-[2px] top-[2px] z-0 text-primary/20 animate-pulse"
        style={{ animationDelay: "0.2s" }}
      >
        {text}
      </span>
    </div>
  )
}


"use client"

import { useEffect, useRef } from "react"

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: { x: number; y: number; radius: number; speed: number; opacity: number; pulse: number }[] = []
    const starCount = 250
    const maxRadius = 2

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * maxRadius,
        speed: 0.1 + Math.random() * 0.3,
        opacity: 0.1 + Math.random() * 0.7,
        pulse: 0.005 + Math.random() * 0.01,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        // Pulse the opacity
        star.opacity += star.pulse
        if (star.opacity > 0.8 || star.opacity < 0.1) {
          star.pulse = -star.pulse
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Move stars
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      // Occasionally draw a "digital line" connecting some stars
      if (Math.random() > 0.97) {
        const startStar = stars[Math.floor(Math.random() * stars.length)]
        const endStar = stars[Math.floor(Math.random() * stars.length)]

        ctx.beginPath()
        ctx.moveTo(startStar.x, startStar.y)
        ctx.lineTo(endStar.x, endStar.y)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-60 dark:opacity-40" />
}


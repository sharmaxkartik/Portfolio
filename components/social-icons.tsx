import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialIconsProps {
  className?: string
  iconSize?: number
}

// Custom X (formerly Twitter) icon component
function XIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SocialIcons({ className, iconSize = 20 }: SocialIconsProps) {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <Link
        href="https://github.com/sharmaxkartik"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm transition-colors hover:bg-primary/10"
      >
        <Github size={iconSize} className="text-muted-foreground transition-colors group-hover:text-primary" />
        <span className="sr-only">GitHub</span>
        <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sharmaxkartik/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm transition-colors hover:bg-primary/10"
      >
        <Linkedin size={iconSize} className="text-muted-foreground transition-colors group-hover:text-primary" />
        <span className="sr-only">LinkedIn</span>
        <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
      <Link
        href="https://x.com/wickedkartik"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm transition-colors hover:bg-primary/10"
      >
        <XIcon size={iconSize} className="text-muted-foreground transition-colors group-hover:text-primary" />
        <span className="sr-only">X (Twitter)</span>
        <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    </div>
  )
}


import Link from "next/link"
import { cn } from "@/lib/utils"
import type React from "react"
export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center", className)} {...props}>
      <Link href="/dashboard" className="text-lg font-semibold transition-colors hover:text-primary">
        IMS
      </Link>
    </nav>
  )
}


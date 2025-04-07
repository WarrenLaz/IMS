import type { ReactNode } from "react"

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return <header className="sticky top-0 z-40 border-b bg-background">{children}</header>
}


import type { ReactNode } from "react"

import { MainNav } from "@/components/main-nav"
import { Sidebar } from "@/components/sidebar"
import { WorkspaceSelector } from "@/components/workspace-selector"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <MainNav />
            <span className="hidden text-sm text-muted-foreground md:inline-block">Inventory Management System</span>
          </div>
          <div className="flex items-center space-x-4">
            <WorkspaceSelector />
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">
          <div className="mx-auto space-y-6">{children}</div>
        </main>
      </div>
    </div>
  )
}


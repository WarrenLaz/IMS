import { Download, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { InventoryTabs } from "@/components/inventory-tabs"

export default function InventoryPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Inventory" text="Manage your inventory items">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>
      </DashboardHeader>

      <InventoryTabs />
    </DashboardShell>
  )
}


import { Download, Filter, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ItemsSoldTable } from "@/components/items-sold-table"

export default function ItemsSoldPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Items Sold" text="Track all sold items and their details">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Sale
          </Button>
        </div>
      </DashboardHeader>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input placeholder="Search by invoice #, vendor ID, or item name..." className="h-9 w-full sm:w-[300px]" />
          <Button variant="outline" size="sm" className="h-9 px-2 lg:px-3">
            <Filter className="h-4 w-4" />
            <span className="ml-2 hidden md:inline">Filter</span>
          </Button>
        </div>
      </div>

      <ItemsSoldTable />
    </DashboardShell>
  )
}


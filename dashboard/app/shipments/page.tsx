import { Download, Filter, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { WfsShipmentsTable } from "@/components/wfs-shipments-table"
import { RtsTable } from "@/components/rts-table"

export default function ShipmentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Shipments" text="Track all shipments and returns">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Shipment
          </Button>
        </div>
      </DashboardHeader>

      <Tabs defaultValue="wfs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="wfs">WFS Shipments</TabsTrigger>
          <TabsTrigger value="rts">RTS</TabsTrigger>
          <TabsTrigger value="form-submissions">Form Submissions</TabsTrigger>
          <TabsTrigger value="trackings">Trackings</TabsTrigger>
        </TabsList>

        <TabsContent value="wfs">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center space-x-2">
              <Input placeholder="Search by tracking or vendor ID..." className="h-9 w-full sm:w-[300px]" />
              <Button variant="outline" size="sm" className="h-9 px-2 lg:px-3">
                <Filter className="h-4 w-4" />
                <span className="ml-2 hidden md:inline">Filter</span>
              </Button>
            </div>
          </div>

          <WfsShipmentsTable />
        </TabsContent>

        <TabsContent value="rts">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center space-x-2">
              <Input placeholder="Search by tracking or vendor ID..." className="h-9 w-full sm:w-[300px]" />
              <Button variant="outline" size="sm" className="h-9 px-2 lg:px-3">
                <Filter className="h-4 w-4" />
                <span className="ml-2 hidden md:inline">Filter</span>
              </Button>
            </div>
          </div>

          <RtsTable />
        </TabsContent>

        <TabsContent value="form-submissions">
          <div className="h-[400px] flex items-center justify-center border rounded-md">
            <p className="text-muted-foreground">Form submissions content will appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="trackings">
          <div className="h-[400px] flex items-center justify-center border rounded-md">
            <p className="text-muted-foreground">Trackings content will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}


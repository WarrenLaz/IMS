"use client"

import { useState } from "react"
import { Filter, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function InventoryTabs() {
  const [activeTab, setActiveTab] = useState("apple")

  return (
    <Tabs defaultValue="apple" className="space-y-4" onValueChange={setActiveTab}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TabsList>
          <TabsTrigger value="apple">Apple</TabsTrigger>
          <TabsTrigger value="consoles">Consoles</TabsTrigger>
          <TabsTrigger value="phones">Phones</TabsTrigger>
          <TabsTrigger value="laptops">Laptops</TabsTrigger>
          <TabsTrigger value="streaming">Streaming</TabsTrigger>
          <TabsTrigger value="electronics">Misc. Electronics</TabsTrigger>
          <TabsTrigger value="tools">Tools/Appliances</TabsTrigger>
          <TabsTrigger value="other">Other/Custom</TabsTrigger>
        </TabsList>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input placeholder={`Search ${activeTab} inventory...`} className="h-9 w-full sm:w-[300px]" />
          <Button variant="outline" size="sm" className="h-9 px-2 lg:px-3">
            <Filter className="h-4 w-4" />
            <span className="ml-2 hidden md:inline">Filter</span>
          </Button>
        </div>
        <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <TabsContent value="apple" className="space-y-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">iPhone 14 Pro</TableCell>
                <TableCell>A2650</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$999.00</TableCell>
                <TableCell>15</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MacBook Pro 16"</TableCell>
                <TableCell>M2 Pro</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$2,499.00</TableCell>
                <TableCell>8</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">iPad Air</TableCell>
                <TableCell>5th Gen</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$599.00</TableCell>
                <TableCell>3</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Apple Watch Ultra</TableCell>
                <TableCell>1st Gen</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$799.00</TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">AirPods Pro</TableCell>
                <TableCell>2nd Gen</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$249.00</TableCell>
                <TableCell>22</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      {/* Other tab contents would follow the same pattern */}
      <TabsContent value="consoles" className="space-y-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">PlayStation 5</TableCell>
                <TableCell>Disc Edition</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$499.00</TableCell>
                <TableCell>12</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Xbox Series X</TableCell>
                <TableCell>1TB</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$499.00</TableCell>
                <TableCell>8</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Nintendo Switch OLED</TableCell>
                <TableCell>White</TableCell>
                <TableCell>New</TableCell>
                <TableCell>$349.00</TableCell>
                <TableCell>5</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      {/* Placeholder for other tabs */}
      {["phones", "laptops", "streaming", "electronics", "tools", "other"].map((tab) => (
        <TabsContent key={tab} value={tab} className="space-y-4">
          <div className="h-[400px] flex items-center justify-center border rounded-md">
            <p className="text-muted-foreground">
              {tab.charAt(0).toUpperCase() + tab.slice(1)} inventory will appear here
            </p>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}


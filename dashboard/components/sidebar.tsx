"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  Box,
  CreditCard,
  FileText,
  HandCoins,
  Home,
  Package,
  PanelLeft,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { UserBox } from "@/components/user-box"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-56">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4">
          <Button variant="outline" size="icon" className="mr-2">
            <PanelLeft className="h-4 w-4" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <span className="font-semibold">Navigation</span>
        </div>
        <ScrollArea className="flex-1 px-2">
          <div className="space-y-1 py-2">
            <h3 className="px-2 text-sm font-medium text-muted-foreground">Main</h3>
            <div className="space-y-1">
              <Button
                asChild
                variant={pathname === "/dashboard" ? "secondary" : "ghost"}
                className="w-full justify-start px-2"
              >
                <Link href="/dashboard">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-1 py-2">
            <h3 className="px-2 text-sm font-medium text-muted-foreground">Inventory</h3>
            <div className="space-y-1">
              <Button
                asChild
                variant={pathname === "/inventory" ? "secondary" : "ghost"}
                className="w-full justify-start px-2"
              >
                <Link href="/inventory">
                  <Package className="mr-2 h-4 w-4" />
                  Price List Inventory
                </Link>
              </Button>
              <Button
                asChild
                variant={pathname === "/items-sold" ? "secondary" : "ghost"}
                className="w-full justify-start px-2"
              >
                <Link href="/items-sold">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Items Sold
                </Link>
              </Button>
              <Button
                asChild
                variant={pathname === "/account-info" ? "secondary" : "ghost"}
                className="w-full justify-start px-2"
              >
                <Link href="/account-info">
                  <Users className="mr-2 h-4 w-4" />
                  Account Info
                </Link>
              </Button>
              <Button
                asChild
                variant={pathname === "/payments" ? "secondary" : "ghost"}
                className="w-full justify-start px-2"
              >
                <Link href="/payments">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payments
                </Link>
              </Button>
              <Button
                asChild
                variant={pathname === "/commits" ? "secondary" : "ghost"}
                className="w-full justify-start px-2"
              >
                <Link href="/commits">
                  <HandCoins className="mr-2 h-4 w-4" />
                  Commits
                </Link>
              </Button>
              <Button
                asChild
                variant={pathname === "/shipments" ? "secondary" : "ghost"}
                className="w-full justify-start px-2"
              >
                <Link href="/shipments">
                  <Truck className="mr-2 h-4 w-4" />
                  Shipments
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-1 py-2">
            <h3 className="px-2 text-sm font-medium text-muted-foreground">Reports</h3>
            <div className="space-y-1">
              <Button asChild variant="ghost" className="w-full justify-start px-2">
                <Link href="/reports/sales">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Sales Reports
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start px-2">
                <Link href="/reports/inventory">
                  <Box className="mr-2 h-4 w-4" />
                  Inventory Reports
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start px-2">
                <Link href="/reports/payments">
                  <FileText className="mr-2 h-4 w-4" />
                  Payment Reports
                </Link>
              </Button>
            </div>
          </div>
        </ScrollArea>

        <UserBox />
      </div>
    </div>
  )
}


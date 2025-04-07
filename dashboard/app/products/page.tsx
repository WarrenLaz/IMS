import { Download, PlusCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Header } from "@/components/header"
import { MainNav } from "@/components/main-nav"
import { Sidebar } from "@/components/sidebar"
import { UserNav } from "@/components/user-nav"
import { ProductsTableToolbar } from "@/components/products-table-toolbar"
import { ProductsTablePagination } from "@/components/products-table-pagination"
import { ProductsTableRow } from "@/components/products-table-row"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header>
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </Header>
      <div className="flex flex-1">
        <Sidebar className="hidden md:block" />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Products</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <ProductsTableToolbar />

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Image</TableHead>
                    <TableHead className="max-w-[150px]">Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <ProductsTableRow
                    id="1"
                    image="/placeholder.svg?height=40&width=40"
                    name="Premium Wireless Headphones"
                    category="Electronics"
                    price="$299.99"
                    stock={45}
                    status="Active"
                  />
                  <ProductsTableRow
                    id="2"
                    image="/placeholder.svg?height=40&width=40"
                    name="Organic Cotton T-Shirt"
                    category="Apparel"
                    price="$24.99"
                    stock={120}
                    status="Active"
                  />
                  <ProductsTableRow
                    id="3"
                    image="/placeholder.svg?height=40&width=40"
                    name="Stainless Steel Water Bottle"
                    category="Home Goods"
                    price="$19.99"
                    stock={78}
                    status="Active"
                  />
                  <ProductsTableRow
                    id="4"
                    image="/placeholder.svg?height=40&width=40"
                    name="Leather Wallet"
                    category="Accessories"
                    price="$49.99"
                    stock={12}
                    status="Low Stock"
                  />
                  <ProductsTableRow
                    id="5"
                    image="/placeholder.svg?height=40&width=40"
                    name="Smart Home Speaker"
                    category="Electronics"
                    price="$129.99"
                    stock={0}
                    status="Out of Stock"
                  />
                  <ProductsTableRow
                    id="6"
                    image="/placeholder.svg?height=40&width=40"
                    name="Yoga Mat"
                    category="Fitness"
                    price="$34.99"
                    stock={56}
                    status="Active"
                  />
                  <ProductsTableRow
                    id="7"
                    image="/placeholder.svg?height=40&width=40"
                    name="Ceramic Coffee Mug"
                    category="Home Goods"
                    price="$14.99"
                    stock={89}
                    status="Active"
                  />
                  <ProductsTableRow
                    id="8"
                    image="/placeholder.svg?height=40&width=40"
                    name="Bluetooth Earbuds"
                    category="Electronics"
                    price="$79.99"
                    stock={23}
                    status="Active"
                  />
                  <ProductsTableRow
                    id="9"
                    image="/placeholder.svg?height=40&width=40"
                    name="Leather Notebook"
                    category="Office"
                    price="$29.99"
                    stock={5}
                    status="Low Stock"
                  />
                  <ProductsTableRow
                    id="10"
                    image="/placeholder.svg?height=40&width=40"
                    name="Portable Power Bank"
                    category="Electronics"
                    price="$49.99"
                    stock={67}
                    status="Active"
                  />
                </TableBody>
              </Table>
            </div>

            <ProductsTablePagination />
          </div>
        </main>
      </div>
    </div>
  )
}


import { Edit, MoreHorizontal, Trash } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TableCell, TableRow } from "@/components/ui/table"

interface ProductsTableRowProps {
  id: string
  image: string
  name: string
  category: string
  price: string
  stock: number
  status: "Active" | "Low Stock" | "Out of Stock"
}

export function ProductsTableRow({ id, image, name, category, price, stock, status }: ProductsTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{stock}</TableCell>
      <TableCell>
        <Badge
          variant={status === "Active" ? "default" : status === "Low Stock" ? "warning" : "destructive"}
          className={
            status === "Active"
              ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
              : status === "Low Stock"
                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800"
                : "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
          }
        >
          {status}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}


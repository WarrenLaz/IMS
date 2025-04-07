import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function WfsShipmentsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Delivery Status</TableHead>
            <TableHead>Vendor ID</TableHead>
            <TableHead>Tracking</TableHead>
            <TableHead>UPC</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Delivery Date</TableHead>
            <TableHead>Item Cost</TableHead>
            <TableHead>Owed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Badge className="bg-green-100 text-green-800">Delivered</Badge>
            </TableCell>
            <TableCell>V10045</TableCell>
            <TableCell>TRK123456789</TableCell>
            <TableCell>123456789012</TableCell>
            <TableCell>iPhone 14 Pro</TableCell>
            <TableCell>New</TableCell>
            <TableCell>Warehouse A</TableCell>
            <TableCell>2023-04-01</TableCell>
            <TableCell>$950.00</TableCell>
            <TableCell>$0.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
            </TableCell>
            <TableCell>V10892</TableCell>
            <TableCell>TRK987654321</TableCell>
            <TableCell>987654321098</TableCell>
            <TableCell>MacBook Pro 16"</TableCell>
            <TableCell>Used</TableCell>
            <TableCell>Warehouse B</TableCell>
            <TableCell>2023-04-08</TableCell>
            <TableCell>$1,800.00</TableCell>
            <TableCell>$200.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Badge className="bg-green-100 text-green-800">Delivered</Badge>
            </TableCell>
            <TableCell>V11045</TableCell>
            <TableCell>TRK456789123</TableCell>
            <TableCell>456789123456</TableCell>
            <TableCell>PlayStation 5</TableCell>
            <TableCell>New</TableCell>
            <TableCell>Warehouse A</TableCell>
            <TableCell>2023-04-03</TableCell>
            <TableCell>$480.00</TableCell>
            <TableCell>$0.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
            </TableCell>
            <TableCell>V10238</TableCell>
            <TableCell>TRK789123456</TableCell>
            <TableCell>789123456789</TableCell>
            <TableCell>Samsung Galaxy S23</TableCell>
            <TableCell>Open Box</TableCell>
            <TableCell>Warehouse C</TableCell>
            <TableCell>2023-04-10</TableCell>
            <TableCell>$750.00</TableCell>
            <TableCell>$50.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Badge className="bg-green-100 text-green-800">Delivered</Badge>
            </TableCell>
            <TableCell>V10573</TableCell>
            <TableCell>TRK321654987</TableCell>
            <TableCell>321654987321</TableCell>
            <TableCell>Nintendo Switch OLED</TableCell>
            <TableCell>New</TableCell>
            <TableCell>Warehouse B</TableCell>
            <TableCell>2023-04-05</TableCell>
            <TableCell>$330.00</TableCell>
            <TableCell>$0.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


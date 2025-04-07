import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RtsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vendor ID</TableHead>
            <TableHead>Tracking</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Delivery Date</TableHead>
            <TableHead>S/N</TableHead>
            <TableHead>Item Cost</TableHead>
            <TableHead>Condition Notes</TableHead>
            <TableHead>Label + Insurance Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>V10045</TableCell>
            <TableCell>TRK123456789</TableCell>
            <TableCell>iPhone 14 Pro</TableCell>
            <TableCell>Damaged</TableCell>
            <TableCell>Warehouse A</TableCell>
            <TableCell>2023-04-01</TableCell>
            <TableCell>SN12345678</TableCell>
            <TableCell>$950.00</TableCell>
            <TableCell>Screen cracked, not powering on</TableCell>
            <TableCell>$15.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V10892</TableCell>
            <TableCell>TRK987654321</TableCell>
            <TableCell>MacBook Pro 16"</TableCell>
            <TableCell>Defective</TableCell>
            <TableCell>Warehouse B</TableCell>
            <TableCell>2023-04-02</TableCell>
            <TableCell>SN87654321</TableCell>
            <TableCell>$1,800.00</TableCell>
            <TableCell>Battery not charging, keyboard issues</TableCell>
            <TableCell>$25.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V11045</TableCell>
            <TableCell>TRK456789123</TableCell>
            <TableCell>PlayStation 5</TableCell>
            <TableCell>Wrong Item</TableCell>
            <TableCell>Warehouse A</TableCell>
            <TableCell>2023-04-03</TableCell>
            <TableCell>SN45678912</TableCell>
            <TableCell>$480.00</TableCell>
            <TableCell>Received PS4 instead of PS5</TableCell>
            <TableCell>$20.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V10238</TableCell>
            <TableCell>TRK789123456</TableCell>
            <TableCell>Samsung Galaxy S23</TableCell>
            <TableCell>Damaged</TableCell>
            <TableCell>Warehouse C</TableCell>
            <TableCell>2023-04-04</TableCell>
            <TableCell>SN78912345</TableCell>
            <TableCell>$750.00</TableCell>
            <TableCell>Camera lens cracked</TableCell>
            <TableCell>$12.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V10573</TableCell>
            <TableCell>TRK321654987</TableCell>
            <TableCell>Nintendo Switch OLED</TableCell>
            <TableCell>Defective</TableCell>
            <TableCell>Warehouse B</TableCell>
            <TableCell>2023-04-05</TableCell>
            <TableCell>SN32165498</TableCell>
            <TableCell>$330.00</TableCell>
            <TableCell>Joy-Con drift issue</TableCell>
            <TableCell>$18.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


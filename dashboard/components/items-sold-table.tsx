import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ItemsSoldTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice #</TableHead>
            <TableHead>Vendor ID</TableHead>
            <TableHead>Tracking</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Processed Date</TableHead>
            <TableHead>S/N</TableHead>
            <TableHead>Price Paid</TableHead>
            <TableHead>Owed</TableHead>
            <TableHead>Owner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV-001</TableCell>
            <TableCell>V10045</TableCell>
            <TableCell>TRK123456789</TableCell>
            <TableCell>iPhone 14 Pro</TableCell>
            <TableCell>New</TableCell>
            <TableCell>Warehouse A</TableCell>
            <TableCell>2023-04-01</TableCell>
            <TableCell>SN12345678</TableCell>
            <TableCell>$950.00</TableCell>
            <TableCell>$0.00</TableCell>
            <TableCell>V10045</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV-002</TableCell>
            <TableCell>V10892</TableCell>
            <TableCell>TRK987654321</TableCell>
            <TableCell>MacBook Pro 16"</TableCell>
            <TableCell>Used</TableCell>
            <TableCell>Warehouse B</TableCell>
            <TableCell>2023-04-02</TableCell>
            <TableCell>SN87654321</TableCell>
            <TableCell>$1,800.00</TableCell>
            <TableCell>$200.00</TableCell>
            <TableCell>V10892</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV-003</TableCell>
            <TableCell>V11045</TableCell>
            <TableCell>TRK456789123</TableCell>
            <TableCell>PlayStation 5</TableCell>
            <TableCell>New</TableCell>
            <TableCell>Warehouse A</TableCell>
            <TableCell>2023-04-03</TableCell>
            <TableCell>SN45678912</TableCell>
            <TableCell>$480.00</TableCell>
            <TableCell>$0.00</TableCell>
            <TableCell>V11045</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV-004</TableCell>
            <TableCell>V10238</TableCell>
            <TableCell>TRK789123456</TableCell>
            <TableCell>Samsung Galaxy S23</TableCell>
            <TableCell>Open Box</TableCell>
            <TableCell>Warehouse C</TableCell>
            <TableCell>2023-04-04</TableCell>
            <TableCell>SN78912345</TableCell>
            <TableCell>$750.00</TableCell>
            <TableCell>$50.00</TableCell>
            <TableCell>V10238</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV-005</TableCell>
            <TableCell>V10573</TableCell>
            <TableCell>TRK321654987</TableCell>
            <TableCell>Nintendo Switch OLED</TableCell>
            <TableCell>New</TableCell>
            <TableCell>Warehouse B</TableCell>
            <TableCell>2023-04-05</TableCell>
            <TableCell>SN32165498</TableCell>
            <TableCell>$330.00</TableCell>
            <TableCell>$0.00</TableCell>
            <TableCell>V10573</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


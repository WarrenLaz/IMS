import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CommitsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vendor ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Deal ID</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Item Name + Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>V10045</TableCell>
            <TableCell>2023-04-01</TableCell>
            <TableCell>DEAL-001</TableCell>
            <TableCell>5</TableCell>
            <TableCell>iPhone 14 Pro - $950.00 each</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V10892</TableCell>
            <TableCell>2023-04-02</TableCell>
            <TableCell>DEAL-002</TableCell>
            <TableCell>3</TableCell>
            <TableCell>MacBook Pro 16" - $1,800.00 each</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V11045</TableCell>
            <TableCell>2023-04-03</TableCell>
            <TableCell>DEAL-003</TableCell>
            <TableCell>10</TableCell>
            <TableCell>PlayStation 5 - $480.00 each</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V10238</TableCell>
            <TableCell>2023-04-04</TableCell>
            <TableCell>DEAL-004</TableCell>
            <TableCell>8</TableCell>
            <TableCell>Samsung Galaxy S23 - $750.00 each</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V10573</TableCell>
            <TableCell>2023-04-05</TableCell>
            <TableCell>DEAL-005</TableCell>
            <TableCell>15</TableCell>
            <TableCell>Nintendo Switch OLED - $330.00 each</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


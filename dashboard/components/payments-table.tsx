import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PaymentsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date Paid</TableHead>
            <TableHead>Date Received</TableHead>
            <TableHead>Vendor ID</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Amount Owed</TableHead>
            <TableHead>Amount Paid</TableHead>
            <TableHead>PID's Paid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2023-04-01</TableCell>
            <TableCell>2023-04-02</TableCell>
            <TableCell>V10045</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell>$1,999.00</TableCell>
            <TableCell>$1,999.00</TableCell>
            <TableCell>PID-001, PID-002</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-04-03</TableCell>
            <TableCell>2023-04-03</TableCell>
            <TableCell>V10892</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell>$3,500.00</TableCell>
            <TableCell>$3,500.00</TableCell>
            <TableCell>PID-003, PID-004, PID-005</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-04-05</TableCell>
            <TableCell>2023-04-06</TableCell>
            <TableCell>V11045</TableCell>
            <TableCell>Venmo</TableCell>
            <TableCell>$750.00</TableCell>
            <TableCell>$750.00</TableCell>
            <TableCell>PID-006</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-04-07</TableCell>
            <TableCell>2023-04-08</TableCell>
            <TableCell>V10238</TableCell>
            <TableCell>Zelle</TableCell>
            <TableCell>$1,200.00</TableCell>
            <TableCell>$1,000.00</TableCell>
            <TableCell>PID-007, PID-008</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-04-10</TableCell>
            <TableCell>2023-04-10</TableCell>
            <TableCell>V10573</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell>$500.00</TableCell>
            <TableCell>$500.00</TableCell>
            <TableCell>PID-009</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


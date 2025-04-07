import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function AccountInfoTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vendor ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Payment Info</TableHead>
            <TableHead>Referral</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Tier</TableHead>
            <TableHead>Total Cost Sold</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">V10045</TableCell>
            <TableCell>Olivia Martin</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell>olivia@paypal.com</TableCell>
            <TableCell>V10892</TableCell>
            <TableCell>123 Main St, Anytown, CA</TableCell>
            <TableCell>(555) 123-4567</TableCell>
            <TableCell>olivia@example.com</TableCell>
            <TableCell>
              <Badge>Gold</Badge>
            </TableCell>
            <TableCell>$52,450.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">V10892</TableCell>
            <TableCell>Jackson Lee</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell>*****1234</TableCell>
            <TableCell>-</TableCell>
            <TableCell>456 Oak Ave, Somewhere, NY</TableCell>
            <TableCell>(555) 987-6543</TableCell>
            <TableCell>jackson@example.com</TableCell>
            <TableCell>
              <Badge>Platinum</Badge>
            </TableCell>
            <TableCell>$128,750.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">V11045</TableCell>
            <TableCell>Isabella Nguyen</TableCell>
            <TableCell>Venmo</TableCell>
            <TableCell>@isabella-nguyen</TableCell>
            <TableCell>V10045</TableCell>
            <TableCell>789 Pine Rd, Elsewhere, TX</TableCell>
            <TableCell>(555) 456-7890</TableCell>
            <TableCell>isabella@example.com</TableCell>
            <TableCell>
              <Badge>Silver</Badge>
            </TableCell>
            <TableCell>$27,890.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">V10238</TableCell>
            <TableCell>William Kim</TableCell>
            <TableCell>Zelle</TableCell>
            <TableCell>william@zelle.com</TableCell>
            <TableCell>-</TableCell>
            <TableCell>321 Cedar Ln, Nowhere, FL</TableCell>
            <TableCell>(555) 789-0123</TableCell>
            <TableCell>william@example.com</TableCell>
            <TableCell>
              <Badge>Bronze</Badge>
            </TableCell>
            <TableCell>$12,450.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">V10573</TableCell>
            <TableCell>Sofia Davis</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell>sofia@paypal.com</TableCell>
            <TableCell>V10892</TableCell>
            <TableCell>987 Maple Dr, Anyplace, WA</TableCell>
            <TableCell>(555) 234-5678</TableCell>
            <TableCell>sofia@example.com</TableCell>
            <TableCell>
              <Badge>Bronze</Badge>
            </TableCell>
            <TableCell>$15,780.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


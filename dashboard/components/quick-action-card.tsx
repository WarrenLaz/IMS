import type { LucideIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface QuickActionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function QuickActionCard({ title, description, icon: Icon, href }: QuickActionCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Icon className="h-5 w-5 text-muted-foreground" />
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={href}>{title}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


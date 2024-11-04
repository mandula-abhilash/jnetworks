"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Zap, Download, Clock } from "lucide-react"

const plans = [
  { name: "JNB 250", speed: "10 Mbps", monthly: 250, halfYearly: 1375, yearly: 2500 },
  { name: "JNB 300", speed: "15 Mbps", monthly: 300, halfYearly: 1650, yearly: 3000 },
  { name: "JNB 350", speed: "20 Mbps", monthly: 350, halfYearly: 1925, yearly: 3500 },
  { name: "JNB 400", speed: "30 Mbps", monthly: 400, halfYearly: 2200, yearly: 4000 },
  { name: "JNB 500", speed: "40 Mbps", monthly: 500, halfYearly: 2750, yearly: 5000 },
  { name: "JNB 600", speed: "50 Mbps", monthly: 600, halfYearly: 3300, yearly: 6000 },
  { name: "JNB 750", speed: "75 Mbps", monthly: 750, halfYearly: 4125, yearly: 7500 },
  { name: "JNB 900", speed: "100 Mbps", monthly: 900, halfYearly: 4950, yearly: 9000 },
  { name: "JNB 1150", speed: "150 Mbps", monthly: 1150, halfYearly: 6325, yearly: 11500 },
  { name: "JNB 1500", speed: "200 Mbps", monthly: 1500, halfYearly: 8250, yearly: 15000 },
]

const features = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Experience lightning-fast speeds with our fiber network",
  },
  {
    icon: Download,
    title: "Unlimited Data",
    description: "True unlimited with 1000GB FUP on all plans",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Reliable connection with minimal downtime",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance",
  },
]

export function BroadbandPlansDetailed() {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[150px]">Plan</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead className="text-right">Monthly</TableHead>
                  <TableHead className="text-right">Half Yearly</TableHead>
                  <TableHead className="text-right">Yearly</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans.map((plan) => (
                  <TableRow key={plan.name}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-primary" />
                        {plan.name}
                      </div>
                    </TableCell>
                    <TableCell>{plan.speed}</TableCell>
                    <TableCell className="text-right">₹{plan.monthly}</TableCell>
                    <TableCell className="text-right">₹{plan.halfYearly}</TableCell>
                    <TableCell className="text-right">₹{plan.yearly}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="font-semibold">Additional Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Badge variant="secondary">FUP</Badge>
              1000GB data limit applicable for all plans
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Corporate</Badge>
              ILL & Corporate Plans available on request
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Setup</Badge>
              One-time installation and WiFi router charges apply as per location
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
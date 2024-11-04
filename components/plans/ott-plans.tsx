"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const ottPlans = [
  {
    name: "PB Basic",
    description: "17 Premium OTT Apps",
    apps: ["Sony Liv", "Zee5", "Discovery+", "Eros Now", "Hungama"],
  },
  {
    name: "PB Pulse",
    description: "17 Premium OTT Apps",
    apps: ["Sony Liv", "Zee5", "Discovery+", "Eros Now", "Hungama"],
  },
  {
    name: "PB Strom",
    description: "22 Premium OTT Apps",
    apps: ["Sony Liv", "Zee5", "Discovery+", "Eros Now", "Aha", "Hungama", "Chaupal"],
  },
]

export function OTTPlans() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {ottPlans.map((plan) => (
        <Card key={plan.name} className="relative overflow-hidden">
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plan.apps.map((app) => (
                <li key={app} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{app}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4" />
                <span className="text-sm">And more...</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
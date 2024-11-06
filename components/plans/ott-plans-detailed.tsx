"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Tv, Smartphone, Laptop, Users } from "lucide-react"

const ottPlans = [
  {
    name: "PB Basic",
    description: "17 Premium OTT Apps",
    price: "Contact for Price",
    apps: [
      "Sony Liv",
      "Zee5",
      "Discovery+",
      "Eros Now",
      "Hungama Play",
      "Epic On",
      "Shorts TV",
      "Klikk",
      "PlayBox TV",
      "Dollywood Play",
      "Chaupal",
      "Planet Marathi",
      "NammaFlix",
      "STAGE",
      "Raj Digital Plus",
      "Koode",
      "Rajtamil"
    ],
    features: [
      "Multiple device support",
      "HD content",
      "Downloads available",
    ],
  },
  {
    name: "PB Pulse",
    description: "17 Premium OTT Apps",
    price: "Contact for Price",
    apps: [
      "Sony Liv",
      "Zee5",
      "Discovery+",
      "Eros Now",
      "Hungama Play",
      "Epic On",
      "Shorts TV",
      "Klikk",
      "PlayBox TV",
      "Dollywood Play",
      "Chaupal",
      "Planet Marathi",
      "NammaFlix",
      "STAGE",
      "Raj Digital Plus",
      "Koode",
      "Rajtamil"
    ],
    features: [
      "Multiple device support",
      "HD & 4K content",
      "Priority support",
    ],
  },
  {
    name: "PB Strom",
    description: "22 Premium OTT Apps",
    price: "Contact for Price",
    apps: [
      "Sony Liv",
      "Zee5",
      "Discovery+",
      "Eros Now",
      "Aha",
      "Hungama Play",
      "Epic On",
      "Shorts TV",
      "Klikk",
      "PlayBox TV",
      "Dollywood Play",
      "Chaupal",
      "Planet Marathi",
      "NammaFlix",
      "STAGE",
      "Raj Digital Plus",
      "Koode",
      "Rajtamil",
      "Sun NXT",
      "Hoichoi",
      "Alt Balaji",
      "Voot"
    ],
    features: [
      "Multiple device support",
      "HD & 4K content",
      "Premium content access",
    ],
  },
]

const features = [
  {
    icon: Tv,
    title: "Multiple Platforms",
    description: "Access to popular OTT platforms",
  },
  {
    icon: Smartphone,
    title: "Device Compatibility",
    description: "Watch on TV, mobile, or laptop",
  },
  {
    icon: Users,
    title: "Multiple Profiles",
    description: "Create profiles for family members",
  },
  {
    icon: Laptop,
    title: "Offline Viewing",
    description: "Download content for offline access",
  },
]

export function OTTPlansDetailed() {
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

      <div className="grid md:grid-cols-3 gap-6">
        {ottPlans.map((plan) => (
          <Card key={plan.name} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Tv className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{plan.name}</CardTitle>
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Included Apps</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {plan.apps.map((app) => (
                      <div key={app} className="flex items-center gap-2">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
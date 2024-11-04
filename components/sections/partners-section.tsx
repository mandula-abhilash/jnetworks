"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const partners = [
  { 
    name: "Pioneer E Labs", 
    logo: "/assets/images/partners/pioneer.png"
  },
  { 
    name: "Access Smart Solutions", 
    logo: "/assets/images/partners/access.png"
  }
]

export function PartnersSection() {
  return (
    <div className="w-full py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            Our Technical Partners
          </h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <Card key={partner.name} className="flex items-center justify-center p-8 bg-background w-[350px] h-[200px]">
              <div className="relative w-full h-full bg-white rounded-md">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
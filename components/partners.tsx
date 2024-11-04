import Image from "next/image"
import { Card } from "@/components/ui/card"

const partners = [
  { name: "Sony Liv", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop" },
  { name: "Zee5", logo: "https://images.unsplash.com/photo-1611162616305-c69b3396004b?w=128&h=128&fit=crop" },
  { name: "Discovery+", logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=128&fit=crop" },
]

export function Partners() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <Card key={partner.name} className="flex items-center justify-center p-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
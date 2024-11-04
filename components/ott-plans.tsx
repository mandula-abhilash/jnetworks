import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ottPlans = [
  {
    name: "PB Basic",
    apps: 17,
    description: "Includes Sony Liv, Zee5, Discovery+, Eros Now, Hungama, and more",
  },
  {
    name: "PB Pulse",
    apps: 17,
    description: "Includes all Basic apps with additional premium content",
  },
  {
    name: "PB Strom",
    apps: 22,
    description: "Includes Sony Liv, Zee5, Discovery+, Eros Now, Aha, Hungama, Chaupal, and more",
  },
]

export function OttPlans() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">OTT Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ottPlans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">{plan.apps} Apps</p>
                <p className="text-gray-500 dark:text-gray-400">{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
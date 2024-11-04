import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

export function BroadbandPlans() {
  return (
    <section id="plans" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Broadband Plans</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Speed</TableHead>
                <TableHead>Monthly (₹)</TableHead>
                <TableHead>Half Yearly (₹)</TableHead>
                <TableHead>Yearly (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.name}>
                  <TableCell className="font-medium">{plan.name}</TableCell>
                  <TableCell>{plan.speed}</TableCell>
                  <TableCell>{plan.monthly}</TableCell>
                  <TableCell>{plan.halfYearly}</TableCell>
                  <TableCell>{plan.yearly}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>* FUP data limit of 1000GB is applicable for all above plans.</p>
          <p>* ILL & Corporate Plans are available on request.</p>
          <p>* One-time installation and WiFi router charges apply as per location feasibility.</p>
        </div>
      </div>
    </section>
  )
}
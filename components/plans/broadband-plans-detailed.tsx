// pages/broadband-plans.tsx
import { GetStaticProps } from 'next';
import { BroadbandPlan, getBroadbandPlans } from '@/lib/plans'; // Adjust the import path as necessary
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Zap, Download, Clock } from "lucide-react";

interface BroadbandPlansPageProps {
  broadbandPlans: BroadbandPlan[];
}

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
];

export function BroadbandPlansDetailed({ broadbandPlans }: BroadbandPlansPageProps) {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[200px]">Plan</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead className="min-w-[200px]">Description</TableHead>
                  <TableHead className="text-right">Monthly</TableHead>
                  <TableHead className="text-right">Half Yearly</TableHead>
                  <TableHead className="text-right">Yearly</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {broadbandPlans.map((plan) => (
                  <TableRow key={plan.id || plan.name}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {Wifi && <Wifi className="h-4 w-4 text-primary" />}
                        {plan.name}
                      </div>
                    </TableCell>
                    <TableCell>{plan.speed} Mbps</TableCell>
                    <TableCell>{plan.description}</TableCell>
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
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const broadbandPlans = await getBroadbandPlans();
    
    return {
      props: {
        broadbandPlans,
      },
      revalidate: 60 * 60 * 24, // Optionally revalidate every 24 hours
    };
  } catch (error) {
    console.error('Error fetching plans:', error);
    return {
      props: {
        broadbandPlans: [],
      },
    };
  }
};

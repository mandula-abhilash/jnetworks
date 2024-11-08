"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tv, Smartphone, Laptop, Users, Wifi } from "lucide-react";
import Image from "next/image";
import { ottPlansData } from '@/app/data/plans';

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
];

const durationLabels = {
  "1M": "Monthly",
  "3M": "Quarterly",
  "6M": "Half Yearly",
  "1Y": "Yearly"
};

const ottLogos = [
  "/assets/images/ott-partners/sony-liv.png",
  "/assets/images/ott-partners/zee5.png",
  "/assets/images/ott-partners/disney-hotstar.png",
  "/assets/images/ott-partners/sun-nxt.png",
  "/assets/images/ott-partners/shemaroo.png",
  "/assets/images/ott-partners/alt.png",
  "/assets/images/ott-partners/om-tv.png",
  "/assets/images/ott-partners/fancode.png",
  "/assets/images/ott-partners/aano-nxt.png",
  "/assets/images/ott-partners/gaana.png",
  "/assets/images/ott-partners/discovery.png",
  "/assets/images/ott-partners/chaupal.png",
  "/assets/images/ott-partners/itap.png",
  "/assets/images/ott-partners/one.png",
  "/assets/images/ott-partners/stage.png",
  "/assets/images/ott-partners/hungama.png",
  "/assets/images/ott-partners/distro-tv.png",
  "/assets/images/ott-partners/raj-tv.png",
  "/assets/images/ott-partners/aha.png",
  "/assets/images/ott-partners/kanccha-lannka.png",
  "/assets/images/ott-partners/hubhopper.png",
  "/assets/images/ott-partners/bongo.png",
  "/assets/images/ott-partners/etv-win.png",
];

export function OTTPlansDetailed() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="space-y-24">
      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
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
          );
        })}
      </div>

      <div className="mt-12">
        <h4 className="font-bold mb-4 text-xl text-center">Our OTT Partners</h4>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {ottLogos.map((logo, index) => (
            <div key={index} className="w-24 h-24">
              <Image
                src={logo}
                alt={`OTT Partner Logo ${index + 1}`}
                width={140}
                height={140}
                className="object-contain rounded-md h-full hover:scale-125 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {ottPlansData.map((plan) => (
          <div key={plan.name}>
            <Card 
              className="relative cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPlan(plan.name)}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Tv className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Premium Apps</h4>
                    <div className="flex flex-wrap gap-3">
                      {plan.premiumApps.map((app) => (
                        <div
                          key={app.name}
                          className="relative group"
                        >
                          <Image
                            src={app.logoPath}
                            alt={app.name}
                            width={40}
                            height={40}
                            className="object-contain rounded-md"
                          />
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {app.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Text for additional apps */}
                    <p className="mt-4 text-sm text-gray-600">
                      Plus {plan.nonPremiumApps.length} additional apps included
                    </p>
                  </div>

                  <button 
                    className="w-full py-2 px-4 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    See Plan Details & Pricing
                  </button>
                </div>
              </CardContent>
            </Card>

            <Dialog open={selectedPlan === plan.name} onOpenChange={() => setSelectedPlan(null)}>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">{plan.name}</h2>
                  
                  <div className="space-y-8">
                    {/* Broadband Plans */}
                    {Object.entries(plan.variants).map(([speed, variant]) => (
                      <div key={speed} className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Wifi className="h-5 w-5" />
                          {speed} Mbps Plans
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {variant.prices.map((price) => (
                            <div 
                              key={price.duration}
                              className="p-4 rounded-lg border bg-card hover:border-primary transition-colors"
                            >
                              <div className="text-sm text-muted-foreground">
                                {durationLabels[price.duration]}
                              </div>
                              <div className="text-2xl font-bold">₹{price.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Apps Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Premium Apps Included</h3>
                      <div className="flex flex-wrap gap-4 mb-6">
                        {plan.premiumApps.map((app) => (
                          <div key={app.name} className="flex flex-col items-center gap-2">
                            <Image
                              src={app.logoPath}
                              alt={app.name}
                              width={60}
                              height={60}
                              className="object-contain rounded-md"
                            />
                            <span className="text-xs text-center">{app.name}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold mb-4">Additional Apps Included</h3>
                      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                        {plan.nonPremiumApps.map((app) => (
                          <div key={app.name} className="flex flex-col items-center gap-2">
                            <Image
                              src={app.logoPath}
                              alt={app.name}
                              width={40}
                              height={40}
                              className="object-contain rounded-md"
                            />
                            <span className="text-xs text-center">{app.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tv, Smartphone, Laptop, Users, Plus } from "lucide-react";
import Image from "next/image";

export const ottPlansData = [
  {
    name: "PB Basic",
    premiumApps: [
      { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
      { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" }
    ],
    nonPremiumApps: [
      { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
      { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
      { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
      { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
      { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
      { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
      { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
      { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
      { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
      { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
      { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
      { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
      { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
      { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
      { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
      { name: "Tarang Plus", logoPath: "/assets/images/ott-partners/tarang-plus.png" },
      { name: "TravelXP", logoPath: "/assets/images/ott-partners/travel-xp.png" }
    ]
  },
  {
    name: "PB Standard",
    premiumApps: [
      { name: "Hotstar", logoPath: "/assets/images/ott-partners/disney-hotstar.png" },
      { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
      { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" }
    ],
    nonPremiumApps: [
      { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
      { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
      { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
      { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
      { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
      { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
      { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
      { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
      { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
      { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
      { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
      { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" }
    ]
  },
  {
    name: "PB Pulse",
    premiumApps: [
      { name: "Hotstar", logoPath: "/assets/images/ott-partners/disney-hotstar.png" },
      { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
      { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" }
    ],
    nonPremiumApps: [
      { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
      { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
      { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
      { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
      { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
      { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
      { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
      { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
      { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
      { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
      { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
      { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
      { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
      { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
      { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
      { name: "Tarang Plus", logoPath: "/assets/images/ott-partners/tarang-plus.png" }
    ]
  },
  {
    name: "PB Storm",
    premiumApps: [
      { name: "Hotstar", logoPath: "/assets/images/ott-partners/disney-hotstar.png" },
      { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
      { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" },
      { name: "Aha Telugu", logoPath: "/assets/images/ott-partners/aha.png" },
      { name: "SunNXT", logoPath: "/assets/images/ott-partners/sun-nxt.png" }
    ],
    nonPremiumApps: [
      { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
      { name: "ALTBalaji", logoPath: "/assets/images/ott-partners/alt.png" },
      { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
      { name: "Dangal Play", logoPath: "/assets/images/ott-partners/dangal-play.png" },
      { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
      { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
      { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
      { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
      { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
      { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
      { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
      { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
      { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
      { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
      { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
      { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
      { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
      { name: "Kancha Lannka", logoPath: "/assets/images/ott-partners/kanccha-lannka.png" },
      { name: "Shucae Film", logoPath: "/assets/images/ott-partners/shucae-film.png" }
    ]
  },
  {
    name: "PB Prime",
    premiumApps: [
      {
        name: "Amazon Prime Lite",
        logoPath: "/assets/images/ott-partners/amazon-prime-lite.jpg"
      },
      {
        name: "Hotstar",
        logoPath: "/assets/images/ott-partners/disney-hotstar.png"
      },
      {
        name: "SonyLIV",
        logoPath: "/assets/images/ott-partners/sony-liv.png"
      },
      {
        name: "Zee5",
        logoPath: "/assets/images/ott-partners/zee5.png"
      }
    ],
    nonPremiumApps: [
      { name: "ALTBalaji", logoPath: "/assets/images/ott-partners/alt.png" },
      { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
      { name: "Dangal Play", logoPath: "/assets/images/ott-partners/dangal-play.png" },
      { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
      { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
      { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
      { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
      { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
      { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
      { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
      { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
      { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
      { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
      { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
      { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
      { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
      { name: "Kancha Lannka", logoPath: "/assets/images/ott-partners/kanccha-lannka.png" },
      { name: "Shucae Film", logoPath: "/assets/images/ott-partners/shucae-film.png" }
    ]
  },
  {
    name: "PB Stream 365",
    premiumApps: [
      {
        name: "Amazon Prime Lite",
        logoPath: "/assets/images/ott-partners/amazon-prime-lite.jpg"
      },
      {
        name: "Hotstar",
        logoPath: "/assets/images/ott-partners/disney-hotstar.png"
      },
      {
        name: "SonyLIV",
        logoPath: "/assets/images/ott-partners/sony-liv.png"
      },
      {
        name: "Zee5",
        logoPath: "/assets/images/ott-partners/zee5.png"
      }
    ],
    nonPremiumApps: [
      { name: "ALTBalaji", logoPath: "/assets/images/ott-partners/alt.png" },
      { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
      { name: "Dangal Play", logoPath: "/assets/images/ott-partners/dangal-play.png" },
      { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
      { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
      { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
      { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
      { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
      { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
      { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
      { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
      { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
      { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
      { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
      { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
      { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
      { name: "Kancha Lannka", logoPath: "/assets/images/ott-partners/kanccha-lannka.png" },
      { name: "Shucae Film", logoPath: "/assets/images/ott-partners/shucae-film.png" }
    ]
  }
];

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
  return (
    <div className="space-y-24">
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

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {ottPlansData.map((plan) => (
          <Card key={plan.name} className="relative">
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
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                        <span>plus {plan.nonPremiumApps.length} additional apps included</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Additional Apps in {plan.name}</h3>
                        <div className="flex flex-wrap gap-4 max-h-[400px] overflow-y-auto">
                          {plan.nonPremiumApps.map((app) => (
                            <div key={app.name} className="flex flex-col items-center gap-2">
                              <Image
                                src={app.logoPath}
                                alt={app.name}
                                width={80}
                                height={80}
                                className="object-contain rounded-md"
                              />
                              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {app.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
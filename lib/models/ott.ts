export interface OTTApp {
    name: string;
    logoPath: string;
  }
  
  export interface PlanPrice {
    duration: '1M' | '3M' | '6M' | '1Y';
    price: number;
  }
  
  export interface BroadbandVariant {
    speed: string;
    prices: PlanPrice[];
  }
  
  export interface OTTPlan {
    id?: string;
    name: string;
    premiumApps: OTTApp[];
    nonPremiumApps: OTTApp[];
    variants: BroadbandVariant[];
  }
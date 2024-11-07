import { BroadbandPlan, getBroadbandPlans } from '@/lib/plans'; 
import { Navbar } from "@/components/navbar";
import { BroadbandPlansDetailed } from "@/components/plans/broadband-plans-detailed";

// Revalidate every 24 hours as a fallback
export const revalidate = 60 * 60 * 24;

export default async function BroadbandPlansPage() {
  try {
    // Fetch broadband plans data
    const broadbandPlans: BroadbandPlan[] = await getBroadbandPlans();

    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container py-16 px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Broadband Plans
              </h1>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Choose from our range of high-speed internet plans with unlimited data
              </p>
            </div>
            <BroadbandPlansDetailed broadbandPlans={broadbandPlans} />
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching plans:", error);
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container py-16 px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Broadband Plans
              </h1>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Failed to load plans. Please try again later.
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
}

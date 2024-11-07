"use client"

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { BroadbandPlansDetailed } from "@/components/plans/broadband-plans-detailed";
import { BroadbandPlan, getBroadbandPlans } from "@/lib/plans"; // Adjust the import path as necessary

export default function BroadbandPlansPage() {
  const [broadbandPlans, setBroadbandPlans] = useState<BroadbandPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlans() {
      try {
        setLoading(true);
        const plans = await getBroadbandPlans();
        setBroadbandPlans(plans);
        setError(null);
      } catch (error) {
        console.error("Error fetching plans:", error);
        setError("Failed to load plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []);

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
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <BroadbandPlansDetailed broadbandPlans={broadbandPlans} />
          )}
        </div>
      </main>
    </>
  );
}

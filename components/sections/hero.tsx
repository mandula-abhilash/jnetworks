import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              High-Speed Internet for Sangareddy
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experience lightning-fast internet with unlimited data and exceptional service quality.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/#plans">
                View Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
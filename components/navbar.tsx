"use client"

import Link from "next/link"
import { Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Wifi className="h-6 w-6" />
          <span className="font-bold">JNB Networks</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="#plans" className="text-sm font-medium">
            Plans
          </Link>
          <Link href="#contact" className="text-sm font-medium">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
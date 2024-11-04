"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-2 sm:px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2 bg-white p-1.5 rounded-md">
          <Image
            src="/assets/images/logo.svg" 
            alt="JNB Networks Logo"
            width={120}
            height={30} 
            className="object-contain" 
          />
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
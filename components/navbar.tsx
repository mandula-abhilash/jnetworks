"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import Logo from "./logo";

export function Navbar() {
  return (
    <header className="sticky top-0 border-b z-50 w-full bg-white dark:bg-white dark:text-gray-900">
      <div className="container flex h-16 items-center justify-between px-2 sm:px-4 md:px-8">
        {false && (
          <Link href="/" className="flex items-center space-x-2 p-1.5 rounded-md transition-colors">
            <Logo />
          </Link>
        )}
        <Link href="/" className="flex items-center space-x-2 p-1.5 rounded-md">
          <Image
            src="/assets/images/logo.png" 
            alt="JNB Networks Logo"
            width={100}
            height={25} 
            className="object-contain" 
          />
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/#plans" className="text-sm font-medium">
            Plans
          </Link>
          <Link href="/#contact" className="text-sm font-medium">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

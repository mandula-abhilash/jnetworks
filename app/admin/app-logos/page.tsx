"use client"

import { AppLogosManager } from "@/components/admin/app-logos-manager"
import { Navbar } from "@/components/navbar"

export default function AppLogosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background max-w-7xl mx-auto">
        <div className="py-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">App Logos Manager</h1>
            <p className="text-muted-foreground pt-2">Manage app logos for OTT plans</p>
          </div>
          <AppLogosManager />
        </div>
      </main>
    </>
  )
}
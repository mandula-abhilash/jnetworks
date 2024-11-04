"use client"

import { useState } from "react"
import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BroadbandPlansManager } from "./broadband-plans-manager"
import { OTTPlansManager } from "./ott-plans-manager"

export function AdminDashboard() {
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="broadband" className="space-y-4">
          <TabsList>
            <TabsTrigger value="broadband">Broadband Plans</TabsTrigger>
            <TabsTrigger value="ott">OTT Plans</TabsTrigger>
          </TabsList>
          <TabsContent value="broadband">
            <BroadbandPlansManager />
          </TabsContent>
          <TabsContent value="ott">
            <OTTPlansManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
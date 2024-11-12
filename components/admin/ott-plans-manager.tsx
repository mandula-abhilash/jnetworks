"use client"

import { useState, useEffect } from "react"
import { OTTPlan } from "@/lib/models/ott"
import { getOTTPlans, addOTTPlan, updateOTTPlan, deleteOTTPlan } from "@/lib/firebase/ott"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OTTPlansForm } from "./ott-plans-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Loader2, Plus, Pencil, Trash2, Tv, Wifi } from "lucide-react"
import Image from "next/image"

export function OTTPlansManager() {
  const [plans, setPlans] = useState<OTTPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingPlan, setEditingPlan] = useState<OTTPlan | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPlans()
  }, [])

  const fetchPlans = async () => {
    try {
      setLoading(true)
      const plansData = await getOTTPlans()
      setPlans(plansData)
      setError(null)
    } catch (err) {
      setError("Failed to fetch plans")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddPlan = async (planData: Omit<OTTPlan, 'id'>) => {
    try {
      setSaving(true)
      await addOTTPlan(planData)
      await fetchPlans()
      setShowForm(false)
      setError(null)
    } catch (err) {
      setError("Failed to add plan")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const handleUpdatePlan = async (planData: Omit<OTTPlan, 'id'>) => {
    if (!editingPlan?.id) return

    try {
      setSaving(true)
      await updateOTTPlan(editingPlan.id, planData)
      await fetchPlans()
      setEditingPlan(null)
      setShowForm(false)
      setError(null)
    } catch (err) {
      setError("Failed to update plan")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const handleDeletePlan = async (id: string) => {
    try {
      setSaving(true)
      await deleteOTTPlan(id)
      await fetchPlans()
      setError(null)
    } catch (err) {
      setError("Failed to delete plan")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (showForm || editingPlan) {
    return (
      <OTTPlansForm
        initialData={editingPlan || undefined}
        onSubmit={editingPlan ? handleUpdatePlan : handleAddPlan}
        onCancel={() => {
          setShowForm(false)
          setEditingPlan(null)
        }}
        isLoading={saving}
      />
    )
  }

  return (
    <div className="space-y-8">
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Plan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id} className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-5 w-5" />
                  {plan.name}
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingPlan(plan)}
                    disabled={saving}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={saving}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Plan</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this plan? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => plan.id && handleDeletePlan(plan.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Premium Apps */}
              <div>
                <h3 className="font-semibold mb-2">Premium Apps</h3>
                <div className="flex flex-wrap gap-2">
                  {plan.premiumApps.map((app, index) => (
                    <div
                      key={index}
                      className="relative w-8 h-8 rounded-md overflow-hidden group"
                      title={app.name}
                    >
                      <Image
                        src={app.logoPath}
                        alt={app.name}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs text-white text-center px-1">
                          {app.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Premium Apps */}
              <div>
                <h3 className="font-semibold mb-2">Non-Premium Apps</h3>
                <div className="flex flex-wrap gap-2">
                  {plan.nonPremiumApps.map((app, index) => (
                    <div
                      key={index}
                      className="relative w-8 h-8 rounded-md overflow-hidden group"
                      title={app.name}
                    >
                      <Image
                        src={app.logoPath}
                        alt={app.name}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs text-white text-center px-1">
                          {app.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speed Variants */}
              <div>
                <h3 className="font-semibold mb-2">Speed Variants</h3>
                <div className="space-y-3">
                  {plan.variants.map((variant, index) => (
                    <div key={index} className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Wifi className="h-4 w-4" />
                        <span className="font-medium">{variant.speed} Mbps</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {variant.prices.map((price) => (
                          <div key={price.duration} className="flex justify-between">
                            <span className="text-muted-foreground">
                              {price.duration === '1M' ? 'Monthly' :
                               price.duration === '3M' ? 'Quarterly' :
                               price.duration === '6M' ? 'Half Yearly' : 'Yearly'}:
                            </span>
                            <span>                                
                              {price.price && price.price > 0 ? `₹${price.price}` : "NA"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
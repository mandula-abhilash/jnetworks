"use client"

import { useState, useEffect } from "react"
import { OTTPlan, getOTTPlans, addOTTPlan, updateOTTPlan, deleteOTTPlan } from "@/lib/plans"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
import { Loader2 } from "lucide-react"

export function OTTPlansManager() {
  const [plans, setPlans] = useState<OTTPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingPlan, setEditingPlan] = useState<OTTPlan | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [newPlan, setNewPlan] = useState<Omit<OTTPlan, 'id'>>({
    name: "",
    description: "",
    apps: [],
    features: [],
  })

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

  const handleAddPlan = async () => {
    try {
      setSaving(true)
      await addOTTPlan(newPlan)
      await fetchPlans()
      setNewPlan({
        name: "",
        description: "",
        apps: [],
        features: [],
      })
      setError(null)
    } catch (err) {
      setError("Failed to add plan")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const handleUpdatePlan = async () => {
    if (!editingPlan?.id) return

    try {
      setSaving(true)
      const { id, ...planData } = editingPlan
      await updateOTTPlan(id, planData)
      await fetchPlans()
      setEditingPlan(null)
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

  return (
    <div className="space-y-8">
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      )}

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-4">
            <Input
              placeholder="Plan Name"
              value={editingPlan?.name ?? newPlan.name}
              onChange={(e) =>
                editingPlan
                  ? setEditingPlan({ ...editingPlan, name: e.target.value })
                  : setNewPlan({ ...newPlan, name: e.target.value })
              }
            />
            <Textarea
              placeholder="Description"
              value={editingPlan?.description ?? newPlan.description}
              onChange={(e) =>
                editingPlan
                  ? setEditingPlan({ ...editingPlan, description: e.target.value })
                  : setNewPlan({ ...newPlan, description: e.target.value })
              }
            />
            <Textarea
              placeholder="Apps (one per line)"
              value={editingPlan?.apps.join('\n') ?? newPlan.apps.join('\n')}
              onChange={(e) => {
                const apps = e.target.value.split('\n').filter(app => app.trim())
                editingPlan
                  ? setEditingPlan({ ...editingPlan, apps })
                  : setNewPlan({ ...newPlan, apps })
              }}
            />
            <Textarea
              placeholder="Features (one per line)"
              value={editingPlan?.features.join('\n') ?? newPlan.features.join('\n')}
              onChange={(e) => {
                const features = e.target.value.split('\n').filter(feature => feature.trim())
                editingPlan
                  ? setEditingPlan({ ...editingPlan, features })
                  : setNewPlan({ ...newPlan, features })
              }}
            />
          </div>
          <div className="flex gap-2 mt-4">
            {editingPlan ? (
              <>
                <Button
                  onClick={handleUpdatePlan}
                  disabled={saving}
                >
                  {saving ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : null}
                  Update Plan
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setEditingPlan(null)}
                  disabled={saving}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                onClick={handleAddPlan}
                disabled={saving}
              >
                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : null}
                Add Plan
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Apps</TableHead>
                <TableHead>Features</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell>{plan.name}</TableCell>
                  <TableCell>{plan.description}</TableCell>
                  <TableCell>{plan.apps.join(", ")}</TableCell>
                  <TableCell>{plan.features.join(", ")}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingPlan(plan)}
                        disabled={saving}
                      >
                        Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            disabled={saving}
                          >
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Delete Plan
                            </AlertDialogTitle>
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import { BroadbandPlan, getBroadbandPlans, addBroadbandPlan, updateBroadbandPlan, deleteBroadbandPlan } from "@/lib/plans"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

export function BroadbandPlansManager() {
  const [plans, setPlans] = useState<BroadbandPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingPlan, setEditingPlan] = useState<BroadbandPlan | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [newPlan, setNewPlan] = useState<Omit<BroadbandPlan, 'id'>>({
    name: "",
    description: "",
    speed: 0,
    monthly: 0,
    halfYearly: 0,
    yearly: 0,
  })

   // Firebase Authentication Check
   useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchPlans();
      } else {
        setError("User is not authenticated. Please log in to access this page.");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true)
      const plansData = await getBroadbandPlans()
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
      await addBroadbandPlan(newPlan)
      await fetchPlans()
      setNewPlan({
        name: "",
        description: "",
        speed: 0,
        monthly: 0,
        halfYearly: 0,
        yearly: 0,
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
      await updateBroadbandPlan(id, planData)
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
      await deleteBroadbandPlan(id)
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Input
              placeholder="Name"
              value={editingPlan?.name ?? newPlan.name}
              onChange={(e) =>
                editingPlan
                  ? setEditingPlan({ ...editingPlan, name: e.target.value })
                  : setNewPlan({ ...newPlan, name: e.target.value })
              }
            />
            <Input
              placeholder="Speed"
              value={editingPlan?.speed ?? newPlan.speed}
              onChange={(e) =>
                editingPlan
                  ? setEditingPlan({ ...editingPlan, speed: Number(e.target.value) })
                  : setNewPlan({ ...newPlan, speed: Number(e.target.value) })
              }
            />
            <Input
              type="number"
              placeholder="Monthly Price"
              value={editingPlan?.monthly ?? newPlan.monthly}
              onChange={(e) =>
                editingPlan
                  ? setEditingPlan({
                      ...editingPlan,
                      monthly: Number(e.target.value),
                    })
                  : setNewPlan({ ...newPlan, monthly: Number(e.target.value) })
              }
            />
            <Input
              type="number"
              placeholder="Half Yearly Price"
              value={editingPlan?.halfYearly ?? newPlan.halfYearly}
              onChange={(e) =>
                editingPlan
                  ? setEditingPlan({
                      ...editingPlan,
                      halfYearly: Number(e.target.value),
                    })
                  : setNewPlan({
                      ...newPlan,
                      halfYearly: Number(e.target.value),
                    })
              }
            />
            <Input
              type="number"
              placeholder="Yearly Price"
              value={editingPlan?.yearly ?? newPlan.yearly}
              onChange={(e) =>
                editingPlan
                  ? setEditingPlan({
                      ...editingPlan,
                      yearly: Number(e.target.value),
                    })
                  : setNewPlan({ ...newPlan, yearly: Number(e.target.value) })
              }
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
                <TableHead>Speed</TableHead>
                <TableHead>Monthly</TableHead>
                <TableHead>Half Yearly</TableHead>
                <TableHead>Yearly</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell>{plan.name}</TableCell>
                  <TableCell>{plan.speed}</TableCell>
                  <TableCell>₹{plan.monthly}</TableCell>
                  <TableCell>₹{plan.halfYearly}</TableCell>
                  <TableCell>₹{plan.yearly}</TableCell>
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
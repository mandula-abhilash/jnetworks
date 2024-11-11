"use client"

import { useState, useEffect } from "react"
import { AppLogo } from "@/lib/models/app-logo"
import { getAppLogos, addAppLogo, updateAppLogo, deleteAppLogo } from "@/lib/firebase/app-logos"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

export function AppLogosManager() {
  const [logos, setLogos] = useState<AppLogo[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingLogo, setEditingLogo] = useState<AppLogo | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [newLogo, setNewLogo] = useState<Omit<AppLogo, 'id'>>({
    name: '',
    logoPath: '',
    category: 'ott',
  })

  useEffect(() => {
    fetchLogos()
  }, [])

  const fetchLogos = async () => {
    try {
      setLoading(true)
      const logosData = await getAppLogos()
      setLogos(logosData)
      setError(null)
    } catch (err) {
      setError("Failed to fetch logos")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddLogo = async () => {
    try {
      setSaving(true)
      await addAppLogo(newLogo)
      await fetchLogos()
      setNewLogo({
        name: '',
        logoPath: '',
        category: 'ott',
      })
      setError(null)
    } catch (err) {
      setError("Failed to add logo")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const handleUpdateLogo = async () => {
    if (!editingLogo?.id) return

    try {
      setSaving(true)
      const { id, ...logoData } = editingLogo
      await updateAppLogo(id, logoData)
      await fetchLogos()
      setEditingLogo(null)
      setError(null)
    } catch (err) {
      setError("Failed to update logo")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteLogo = async (id: string) => {
    try {
      setSaving(true)
      await deleteAppLogo(id)
      await fetchLogos()
      setError(null)
    } catch (err) {
      setError("Failed to delete logo")
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
        <CardHeader>
          <CardTitle>{editingLogo ? 'Edit Logo' : 'Add New Logo'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="App Name"
                value={editingLogo?.name ?? newLogo.name}
                onChange={(e) =>
                  editingLogo
                    ? setEditingLogo({ ...editingLogo, name: e.target.value })
                    : setNewLogo({ ...newLogo, name: e.target.value })
                }
              />
              <Select
                value={editingLogo?.category ?? newLogo.category}
                onValueChange={(value: 'ott' | 'streaming' | 'music' | 'other') =>
                  editingLogo
                    ? setEditingLogo({ ...editingLogo, category: value })
                    : setNewLogo({ ...newLogo, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ott">OTT</SelectItem>
                  <SelectItem value="streaming">Streaming</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Logo Path (e.g., /assets/images/ott-partners/logo.png)"
              value={editingLogo?.logoPath ?? newLogo.logoPath}
              onChange={(e) =>
                editingLogo
                  ? setEditingLogo({ ...editingLogo, logoPath: e.target.value })
                  : setNewLogo({ ...newLogo, logoPath: e.target.value })
              }
            />
            <div className="flex justify-end gap-2">
              {editingLogo ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setEditingLogo(null)}
                    disabled={saving}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUpdateLogo}
                    disabled={saving}
                  >
                    {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Update Logo
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleAddLogo}
                  disabled={saving}
                >
                  {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  <Plus className="h-4 w-4 mr-2" />
                  Add Logo
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Path</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logos.map((logo) => (
                <TableRow key={logo.id}>
                  <TableCell>
                    <div className="relative w-10 h-10">
                      <Image
                        src={logo.logoPath}
                        alt={logo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{logo.name}</TableCell>
                  <TableCell className="capitalize">{logo.category}</TableCell>
                  <TableCell className="font-mono text-sm">{logo.logoPath}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setEditingLogo(logo)}
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
                            <AlertDialogTitle>Delete Logo</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this logo? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => logo.id && handleDeleteLogo(logo.id)}
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
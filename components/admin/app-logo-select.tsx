"use client"

import { useEffect, useState } from "react"
import { AppLogo } from "@/lib/models/app-logo"
import { getAppLogos } from "@/lib/firebase/app-logos"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import Image from "next/image"

interface AppLogoSelectProps {
  value: string
  onChange: (value: string) => void
  category?: 'ott' | 'streaming' | 'music' | 'other'
}

export function AppLogoSelect({ value, onChange, category }: AppLogoSelectProps) {
  const [logos, setLogos] = useState<AppLogo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLogos() {
      try {
        const logosData = await getAppLogos()
        setLogos(category ? logosData.filter(logo => logo.category === category) : logosData)
      } catch (error) {
        console.error('Failed to fetch logos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLogos()
  }, [category])

  if (loading) {
    return <Loader2 className="h-4 w-4 animate-spin" />
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue>
          {value ? (
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src={logos.find(logo => logo.logoPath === value)?.logoPath || ''}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span>{logos.find(logo => logo.logoPath === value)?.name}</span>
            </div>
          ) : (
            "Select an app"
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {logos.map((logo) => (
          <SelectItem key={logo.id} value={logo.logoPath}>
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src={logo.logoPath}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span>{logo.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
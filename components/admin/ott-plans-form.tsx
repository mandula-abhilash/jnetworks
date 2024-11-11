"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { OTTPlan, OTTApp, PlanPrice, BroadbandVariant } from '@/lib/models/ott';
import { AppLogoSelect } from './app-logo-select';

interface OTTPlansFormProps {
  initialData?: OTTPlan;
  onSubmit: (data: Omit<OTTPlan, 'id'>) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

const DEFAULT_PRICES: PlanPrice[] = [
  { duration: '1M', price: 0 },
  { duration: '3M', price: 0 },
  { duration: '6M', price: 0 },
  { duration: '1Y', price: 0 },
];

export function OTTPlansForm({ initialData, onSubmit, onCancel, isLoading }: OTTPlansFormProps) {
  const [formData, setFormData] = useState<Omit<OTTPlan, 'id'>>(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      return rest;
    }
    return {
      name: '',
      premiumApps: [],
      nonPremiumApps: [],
      variants: [
        {
          speed: '40',
          prices: [...DEFAULT_PRICES],
        },
      ],
    };
  });

  const handleAddApp = (type: 'premium' | 'nonPremium') => {
    const newApp: OTTApp = { name: '', logoPath: '' };
    if (type === 'premium') {
      setFormData(prev => ({
        ...prev,
        premiumApps: [...prev.premiumApps, newApp],
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        nonPremiumApps: [...prev.nonPremiumApps, newApp],
      }));
    }
  };

  const handleRemoveApp = (index: number, type: 'premium' | 'nonPremium') => {
    setFormData(prev => ({
      ...prev,
      [type === 'premium' ? 'premiumApps' : 'nonPremiumApps']: 
        prev[type === 'premium' ? 'premiumApps' : 'nonPremiumApps'].filter((_, i) => i !== index),
    }));
  };

  const handleUpdateApp = (
    index: number,
    field: keyof OTTApp,
    value: string,
    type: 'premium' | 'nonPremium'
  ) => {
    setFormData(prev => ({
      ...prev,
      [type === 'premium' ? 'premiumApps' : 'nonPremiumApps']: 
        prev[type === 'premium' ? 'premiumApps' : 'nonPremiumApps'].map((app, i) =>
          i === index ? { ...app, [field]: value } : app
        ),
    }));
  };

  const handleAddVariant = () => {
    setFormData(prev => ({
      ...prev,
      variants: [
        ...prev.variants,
        {
          speed: '',
          prices: [...DEFAULT_PRICES],
        },
      ],
    }));
  };

  const handleRemoveVariant = (index: number) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
    }));
  };

  const handleUpdateVariant = (index: number, field: keyof BroadbandVariant, value: any) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.map((variant, i) =>
        i === index ? { ...variant, [field]: value } : variant
      ),
    }));
  };

  const handleUpdatePrice = (
    variantIndex: number,
    duration: '1M' | '3M' | '6M' | '1Y',
    price: number
  ) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.map((variant, i) =>
        i === variantIndex
          ? {
              ...variant,
              prices: variant.prices.map(p =>
                p.duration === duration ? { ...p, price } : p
              ),
            }
          : variant
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Plan Name"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mb-4"
          />
        </CardContent>
      </Card>

      {/* Premium Apps */}
      <Card>
        <CardHeader>
          <CardTitle>Premium Apps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {formData.premiumApps.map((app, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-1">
                  <AppLogoSelect
                    value={app.logoPath}
                    onChange={(value) => handleUpdateApp(index, 'logoPath', value, 'premium')}
                    category="ott"
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveApp(index, 'premium')}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => handleAddApp('premium')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Premium App
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Non-Premium Apps */}
      <Card>
        <CardHeader>
          <CardTitle>Non-Premium Apps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {formData.nonPremiumApps.map((app, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-1">
                  <AppLogoSelect
                    value={app.logoPath}
                    onChange={(value) => handleUpdateApp(index, 'logoPath', value, 'nonPremium')}
                    category="ott"
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveApp(index, 'nonPremium')}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => handleAddApp('nonPremium')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Non-Premium App
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Broadband Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Broadband Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {formData.variants.map((variant, variantIndex) => (
              <div key={variantIndex} className="space-y-4 p-4 border rounded-lg relative">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={() => handleRemoveVariant(variantIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                
                <div className="mb-6">
                  <label className="text-sm font-medium mb-1 block">Speed (Mbps)</label>
                  <Input
                    value={variant.speed}
                    onChange={e => handleUpdateVariant(variantIndex, 'speed', e.target.value)}
                    placeholder="Enter speed (e.g., 40)"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {variant.prices.map(price => (
                    <div key={price.duration}>
                      <label className="text-sm font-medium mb-1 block">
                        {price.duration === '1M' ? 'Monthly' :
                         price.duration === '3M' ? 'Quarterly' :
                         price.duration === '6M' ? 'Half Yearly' : 'Yearly'}
                      </label>
                      <Input
                        type="number"
                        value={price.price}
                        onChange={e => handleUpdatePrice(variantIndex, price.duration, Number(e.target.value))}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={handleAddVariant}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Speed Variant
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData ? 'Update' : 'Create'} Plan
        </Button>
      </div>
    </form>
  );
}
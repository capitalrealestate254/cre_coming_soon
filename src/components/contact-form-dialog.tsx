'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export type ContactFormDialogProps = {
  children: React.ReactNode
  className?: string
}

export default function ContactFormDialog({ children, className }: ContactFormDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interested: '',
    visitShowhouse: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="w-full max-w-[92vw] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[360px] mx-auto p-4">
        <DialogHeader>
          <DialogTitle className="text-center text-base font-semibold">Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="e.g Jane Smith"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g jane@gmail.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone">Phone No.</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g +254 712 345 678"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="interested">Interested in?</Label>
            <Select onValueChange={(value) => handleInputChange('interested', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="capital-vista-kilimani">Capital VISTA - Kilimani</SelectItem>
                <SelectItem value="capital-heights-westlands">
                  Capital HEIGHTS - Westlands
                </SelectItem>
                <SelectItem value="capital-garden-kilimani">Capital Garden - Kilimani</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="visit-showhouse">Would you like to visit our show-house?</Label>
            <Select onValueChange={(value) => handleInputChange('visitShowhouse', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1e293b] text-white hover:bg-[#334155] rounded-lg py-2 text-sm"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

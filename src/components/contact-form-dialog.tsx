'use client'

import React, { useEffect, useState } from 'react'
import { useActionState } from 'react'
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
import { sendContactEmail } from '@/app/actions/brevo'

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

  const [result, formAction, isPending] = useActionState(sendContactEmail, null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!result) return
    if ((result as { success?: boolean }).success) {
      setFormData({ name: '', email: '', phone: '', interested: '', visitShowhouse: '' })
      setSubmitted(true)
    }
  }, [result])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="w-full max-w-[92vw] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[360px] mx-auto p-4">
        <DialogHeader>
          <DialogTitle className="text-center text-base font-semibold">
            {submitted ? 'Request Sent' : 'Book Your Unit'}
          </DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div className="space-y-4 py-2 text-center">
            <p className="text-sm text-gray-700">
              Thanks! Your request has been sent. Well get back to you shortly.
            </p>
            <Button
              type="button"
              className="w-full bg-[#1e293b] text-white hover:bg-[#334155] rounded-lg py-2 text-sm"
              onClick={() => setSubmitted(false)}
            >
              Send another request
            </Button>
          </div>
        ) : (
          <form
            action={(fd) => {
              // Ensure Select values are present in the submitted FormData
              fd.set('interested', formData.interested || '')
              fd.set('visitShowhouse', formData.visitShowhouse || '')
              return (formAction as unknown as (fd: FormData) => void)(fd)
            }}
            className="space-y-3"
          >
            <div className="space-y-1">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
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
                name="email"
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
                name="phone"
                placeholder="e.g +254 712 345 678"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="interested">Interested in?</Label>
              <Select
                value={formData.interested}
                onValueChange={(value) => handleInputChange('interested', value)}
              >
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
              <input type="hidden" name="interested" value={formData.interested} required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="visit-showhouse">Would you like to visit our show-house?</Label>
              <Select
                value={formData.visitShowhouse}
                onValueChange={(value) => handleInputChange('visitShowhouse', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="visitShowhouse" value={formData.visitShowhouse} required />
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#1e293b] text-white hover:bg-[#334155] rounded-lg py-2 text-sm"
            >
              {isPending ? 'Sending…' : 'Submit'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

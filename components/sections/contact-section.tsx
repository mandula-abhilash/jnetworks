"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFeedbackMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFeedbackMessage("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", message: "" }) 
      } else {
        setFeedbackMessage("Failed to send message. Please try again.")
      }
    } catch (error) {
      setFeedbackMessage("An error occurred. Please try again later.")

    } finally {
      setTimeout(() => setFeedbackMessage(""), 5000)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {feedbackMessage && <p className="text-center mt-4">{feedbackMessage}</p>}
            </form>
          </Card>
          <Card className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <p>11-5, Pothireddypally X Road, Sangareddy, Telangana 502295</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p>+91 9849532155</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p>jnetworksbroadband@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <p>WhatsApp: +91 9849532155</p>
              </div>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=J Networks Broadband&ie=UTF8&t=&z=18&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
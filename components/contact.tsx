"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    challenge: "",
    budget: "",
    timeline: "",
    message: "",
    website: "", // Honeypot field
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      if (!formData.name || !formData.email || !formData.company) {
        throw new Error("Please fill in all required fields")
      }

      if (formData.website) {
        console.log("[v0] Honeypot triggered - spam detected")
        setSubmitted(true)
        return
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          industry: formData.industry,
          challenge: formData.challenge,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to send message")
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          industry: "",
          challenge: "",
          budget: "",
          timeline: "",
          message: "",
          website: "",
        })
      }, 3000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred. Please try again."
      setError(errorMessage)
      console.error(" Form submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30 accent-line"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Let's Transform Your Business</h2>
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Ready to harness the power of AI? Our team of experts is here to help you navigate your AI journey and
              unlock unprecedented growth.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-accent-sm">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/60">beyondhorizonais@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-accent-sm">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground/60">+254 706 833-609</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-accent-sm">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/60">Nyeri, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 glow-accent">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-accent">
                    <CheckCircle className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-foreground/60">
                    We'll be in touch shortly to discuss your AI transformation journey.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                    <p className="text-red-500 text-sm">{error}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  />
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  >
                    <option value="">Select Industry</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <select
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                >
                  <option value="">What's Your Primary Challenge?</option>
                  <option value="efficiency">Improving Operational Efficiency</option>
                  <option value="customer">Enhancing Customer Experience</option>
                  <option value="revenue">Increasing Revenue</option>
                  <option value="innovation">Driving Innovation</option>
                  <option value="other">Other</option>
                </select>

                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  >
                    <option value="">Budget Range</option>
                    <option value="50k">Ksh30K - Ksh50K</option>
                    <option value="100k">Ksh50K - Ksh80K</option>
                    <option value="250k">Ksh80K - Ksh120K</option>
                    <option value="500k">Ksh200K+</option>
                  </select>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
                  >
                    <option value="">Timeline</option>
                    <option value="immediate">Immediate (0-3 months)</option>
                    <option value="short">Short-term (3-6 months)</option>
                    <option value="medium">Medium-term (6-12 months)</option>
                    <option value="long">Long-term (12+ months)</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project and goals..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition resize-none"
                />

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold button-glow"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

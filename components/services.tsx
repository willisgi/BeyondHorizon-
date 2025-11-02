"use client"

import Link from "next/link"
import { Brain, Zap, Shield, BarChart3, Cpu, Lightbulb } from "lucide-react"

const services = [
  {
    id: "ai-strategy",
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Develop a comprehensive AI roadmap tailored to your business goals and competitive landscape.",
  },
  {
    id: "custom-solutions",
    icon: Cpu,
    title: "Custom AI Solutions",
    description: "Build bespoke AI systems and models designed specifically for your unique business challenges.",
  },
  {
    id: "implementation",
    icon: Zap,
    title: "Implementation & Integration",
    description: "Seamlessly integrate AI into your existing infrastructure with minimal disruption.",
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable intelligence that drives strategic decisions.",
  },
  {
    id: "governance",
    icon: Shield,
    title: "AI Governance & Ethics",
    description: "Ensure responsible AI deployment with robust governance frameworks and ethical guidelines.",
  },
  {
    id: "training",
    icon: Lightbulb,
    title: "Team Training & Enablement",
    description: "Upskill your workforce to effectively leverage AI tools and technologies.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background accent-line">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive AI consulting services designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition group cursor-pointer h-full hover:shadow-lg hover:shadow-accent/10 button-glow">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition glow-accent-sm">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

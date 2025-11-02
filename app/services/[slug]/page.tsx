"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, Zap, Shield, BarChart3, Cpu, Lightbulb } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import  { handleScheduleConsultation } from "@/components/hero"


const serviceDetails = {
  "ai-strategy": {
    title: "AI Strategy & Consulting",
    icon: Brain,
    description:
      "Develop a comprehensive AI roadmap tailored to your business goals and competitive landscape.",
    overview:
      "In today's rapidly evolving business landscape, having a clear AI strategy is essential. Our AI Strategy & Consulting service helps you navigate the complex world of artificial intelligence and identify opportunities that align with your business objectives.",
    benefits: [
      "Comprehensive AI readiness assessment",
      "Customized AI roadmap aligned with business goals",
      "Competitive landscape analysis",
      "ROI projections and business case development",
      "Risk assessment and mitigation strategies",
      "Executive alignment and change management",
    ],
    process: [
      "Discovery & Assessment: We conduct a thorough analysis of your current state, business challenges, and AI opportunities.",
      "Strategy Development: Our experts develop a tailored AI strategy that aligns with your business vision.",
      "Roadmap Creation: We create a detailed implementation roadmap with clear milestones and success metrics.",
      "Executive Alignment: We work with your leadership team to ensure buy-in and organizational readiness.",
      "Ongoing Support: We provide continuous guidance as you execute your AI strategy.",
    ],
    ideal:
      "Enterprise organizations looking to establish a clear AI vision and strategy before implementation.",
  },
  "custom-solutions": {
    title: "Custom AI Solutions",
    icon: Cpu,
    description:
      "Build bespoke AI systems and models designed specifically for your unique business challenges.",
    overview:
      "Off-the-shelf solutions rarely fit perfectly. Our Custom AI Solutions service delivers purpose-built AI systems engineered specifically for your unique business challenges and requirements.",
    benefits: [
      "Tailored AI models for your specific use cases",
      "Integration with existing business systems",
      "Scalable architecture for future growth",
      "Proprietary algorithms and competitive advantage",
      "Continuous model optimization and improvement",
      "Full ownership and control of your AI assets",
    ],
    process: [
      "Requirements Analysis: We deeply understand your business needs and technical constraints.",
      "Solution Design: Our team designs a custom AI solution architecture.",
      "Development & Training: We build and train your AI models using your data.",
      "Testing & Validation: Rigorous testing ensures performance and reliability.",
      "Deployment & Monitoring: We deploy your solution and monitor performance continuously.",
    ],
    ideal:
      "Organizations with unique business challenges that require specialized AI solutions beyond standard offerings.",
  },
  implementation: {
    title: "Implementation & Integration",
    icon: Zap,
    description:
      "Seamlessly integrate AI into your existing infrastructure with minimal disruption.",
    overview:
      "Implementing AI is more than just deploying models. Our Implementation & Integration service ensures your AI solutions are seamlessly integrated into your existing infrastructure with minimal disruption to operations.",
    benefits: [
      "Minimal business disruption during deployment",
      "Seamless integration with legacy systems",
      "Scalable infrastructure setup",
      "Performance optimization and monitoring",
      "Security and compliance implementation",
      "Staff training and knowledge transfer",
    ],
    process: [
      "Infrastructure Assessment: We evaluate your current systems and infrastructure.",
      "Integration Planning: We develop a detailed integration plan.",
      "Phased Deployment: We implement in phases to minimize disruption.",
      "Testing & Validation: Comprehensive testing before full rollout.",
      "Monitoring & Support: Ongoing monitoring and optimization post-deployment.",
    ],
    ideal:
      "Organizations ready to deploy AI solutions and need expert guidance on integration and implementation.",
  },
  "data-analytics": {
    title: "Data Analytics & Insights",
    icon: BarChart3,
    description:
      "Transform raw data into actionable intelligence that drives strategic decisions.",
    overview:
      "Data is your most valuable asset. Our Data Analytics & Insights service transforms raw data into actionable intelligence that drives strategic business decisions and uncovers hidden opportunities.",
    benefits: [
      "Advanced data analysis and visualization",
      "Predictive analytics for forecasting",
      "Customer behavior and market insights",
      "Operational efficiency identification",
      "Real-time dashboards and reporting",
      "Data-driven decision making framework",
    ],
    process: [
      "Data Assessment: We audit your data sources and quality.",
      "Analytics Framework: We design analytics solutions tailored to your needs.",
      "Implementation: We build dashboards and analytics pipelines.",
      "Insights Generation: We extract actionable insights from your data.",
      "Continuous Improvement: We refine analytics based on business outcomes.",
    ],
    ideal:
      "Organizations sitting on valuable data but lacking the insights to leverage it for competitive advantage.",
  },
  governance: {
    title: "AI Governance & Ethics",
    icon: Shield,
    description:
      "Ensure responsible AI deployment with robust governance frameworks and ethical guidelines.",
    overview:
      "As AI becomes more prevalent, governance and ethics are critical. Our AI Governance & Ethics service ensures your AI systems are deployed responsibly, ethically, and in compliance with regulations.",
    benefits: [
      "Comprehensive AI governance framework",
      "Ethical AI principles and guidelines",
      "Regulatory compliance (GDPR, AI Act, etc.)",
      "Bias detection and mitigation",
      "Transparency and explainability standards",
      "Risk management and audit trails",
    ],
    process: [
      "Governance Assessment: We evaluate your current governance maturity.",
      "Framework Development: We create a tailored governance framework.",
      "Policy Creation: We develop AI ethics and governance policies.",
      "Implementation: We implement governance controls and monitoring.",
      "Continuous Oversight: We provide ongoing governance support and updates.",
    ],
    ideal:
      "Organizations prioritizing responsible AI deployment and regulatory compliance.",
  },
  training: {
    title: "Team Training & Enablement",
    icon: Lightbulb,
    description:
      "Upskill your workforce to effectively leverage AI tools and technologies.",
    overview:
      "Technology is only as effective as the people using it. Our Team Training & Enablement service upskills your workforce to effectively leverage AI tools and technologies, ensuring adoption and maximizing ROI.",
    benefits: [
      "Customized training programs for all skill levels",
      "Hands-on workshops and practical exercises",
      "AI literacy and awareness programs",
      "Advanced technical training for data teams",
      "Change management and adoption support",
      "Ongoing learning and development resources",
    ],
    process: [
      "Skills Assessment: We assess your team's current AI knowledge.",
      "Program Design: We design customized training programs.",
      "Delivery: We deliver engaging training through workshops and sessions.",
      "Hands-on Practice: Teams work on real-world AI projects.",
      "Continuous Support: We provide ongoing learning resources and support.",
    ],
    ideal:
      "Organizations wanting to build internal AI capabilities and ensure successful adoption across teams.",
  },
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceDetails[slug as keyof typeof serviceDetails]

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition mb-8"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Service Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="text-accent" size={32} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{service.title}</h1>
              <p className="text-xl text-foreground/60">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">{service.overview}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-4 bg-background rounded-lg border border-border">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Process</h2>
          <div className="space-y-6">
            {service.process.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center font-semibold text-accent">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && <div className="w-1 h-12 bg-accent/20 mt-2" />}
                </div>
                <div className="pb-6">
                  <p className="text-lg text-foreground font-semibold mb-2">{step.split(":")[0]}</p>
                  <p className="text-foreground/70">{step.split(":")[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ideal For</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">{service.ideal}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-foreground mb-6">
    Ready to Get Started?
  </h2>
  <p className="text-lg text-foreground/60 mb-8">
    Let's discuss how this service can transform your business.
  </p>

  {/* Centered button */}
  <div className="flex justify-center">
    <Link href="/#contact" className="inline-block">
      <button
        className={`
          px-8 py-4 bg-primary text-primary-foreground
          rounded-lg hover:bg-primary/90 transition font-semibold
          flex items-center justify-center gap-2 group button-glow
        `}
      >
        Schedule a Consultation
        <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
      </button>
    </Link>
  </div>
</div>

      </section>

      <Footer />
    </main>
  )
}

"use client"

import { ArrowRight } from "lucide-react"

// ✅ Exported so other files can import it
export const handleScheduleConsultation = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

export const handleLearnMore = () => {
  const servicesSection = document.getElementById("services")
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50 accent-line">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Transforming Ideas Into{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Intelligent Realities
            <p className="text-base sm:text-xl text-foreground/70 mb-8 px-0 w-full leading-relaxed text-left"> For too long, the global conversation around AI has been fueled by hype, buzzwords, and unfulfilled promises. At BeyondHorizon, we take a different path, one grounded in tangible results, not speculation. We don’t just integrate AI; 
            we engineer intelligent operating systems that redefine how organizations think, work, and scale. Our mission is to empower teams with systems that unlock measurable efficiency, sharpen decision-making, and sustain long-term competitive advantage. We believe that AI is not a distant future—it’s a present reality waiting to be harnessed responsibly and effectively. At BeyondHorizon, we start by understanding the core DNA of
             your organization—your workflows, culture, and aspirations. From there, we design and deploy AI-driven ecosystems that enhance human capability rather than replace it. Whether it’s automating complex operations, accelerating product innovation, or transforming data into foresight, our approach ensures that every solution we build delivers real business impact, not just technological novelty.
              We partner with forward-thinking developers who recognize that true transformation doesn’t come from adopting tools; it comes from adopting a new way of operating. That’s why our AI operating systems are built to adapt, learn, and evolve with your business, ensuring that progress isn’t a one-time leap but a continuous journey of improvement. In a world where technological evolution waits for no one, every company faces a pivotal choice:
               accelerate or be left behind. BeyondHorizon is your catalyst for meaningful transformation—helping you move from passive observation to active innovation, and from potential to performance. <br /> <br /> Because at BeyondHorizon, we don’t just imagine the
                future of AI. We build it today. </p>
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={handleScheduleConsultation}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold flex items-center justify-center gap-2 group button-glow"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>

          <button
            onClick={handleLearnMore}
            className="px-8 py-4 border border-border text-foreground rounded-lg hover:bg-foreground/5 transition font-semibold button-glow"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

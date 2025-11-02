"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border accent-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center glow-accent-sm">
                <span className="text-background font-bold text-lg">BH</span>
              </div>
              <span className="text-lg font-bold text-foreground">BeyondHorizon</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Transforming businesses through intelligent AI solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/services/ai-strategy" className="hover:text-accent transition">
                  AI Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/custom-solutions" className="hover:text-accent transition">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/implementation" className="hover:text-accent transition">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:text-accent transition">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/#services" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Careers
                </Link>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className="hover:text-accent transition text-left md:text-inherit"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="mailto:hello@beyondhorizon.ai"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-foreground/60 hover:text-accent transition button-glow"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/wilson-mbachi-a01975346"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-foreground/60 hover:text-accent transition button-glow"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-foreground/60 hover:text-accent transition button-glow"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Updated bottom section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm text-foreground/60 text-center">
          <p>&copy; 2025 BeyondHorizon. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-accent transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

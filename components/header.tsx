"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 accent-line">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center glow-accent-sm">
            <span className="text-background font-bold text-lg">BH</span>
          </div>
          <span className="text-xl font-bold text-foreground">BeyondHorizon</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground/70 hover:text-accent transition">
            Services
          </Link>
          <Link href="#contact" className="text-foreground/70 hover:text-accent transition">
            Contact
          </Link>
          <button
            onClick={handleGetStarted}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium button-glow"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="#services"
                className="text-foreground/70 hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-foreground/70 hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={handleGetStarted}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium button-glow w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

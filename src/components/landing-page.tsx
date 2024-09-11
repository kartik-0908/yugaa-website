'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, MessageCircle, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Montserrat_Alternates } from 'next/font/google'
import AnimatedGridBackground from "./grid"
import Navigation from "./nav"
import AdditionalFeaturesSection from "./feature"
import PricingSection from "./price"
import ContactSection from "./contact"
import Footer from "./footer"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const handleSignUp = () => {
    // Replace this URL with your actual Google Calendar booking link
    window.open('https://app.yugaa.tech/sign-up', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Floating Navbar with Curved Edges */}
      <header
        className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-50 w-[100%] md:w-[80%] transition-all duration-300 ease-in-out
                    ${scrolled ? 'bg-neutral-900 shadow-md' : 'bg-transparent'}
                    rounded-full`}
      >
        <Navigation scrolled={scrolled} />
      </header>

      <main className="flex-grow">
        {/* Grid Background with Moving Lines */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-moving-lines"></div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-black text-white min-h-screen flex pt-32 md:pt-64 ">
          <AnimatedGridBackground />
          <div className="container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Handle Your Customer Support with AI Agent</h1>
            <p className="text-xl mb-8">Yugaa AI provides intelligent agents to handle your customer queries 24/7</p>
            <Button onClick={handleSignUp} size="lg" variant="secondary" className="rounded-full bg-white text-indigo-600 hover:bg-indigo-100">
              Start Free Trial
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <AdditionalFeaturesSection />

        <PricingSection />

        {/* Call-to-Action Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer/>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(79, 70, 229, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .bg-moving-lines {
          background: linear-gradient(
            to right,
            rgba(79, 70, 229, 0) 0%,
            rgba(79, 70, 229, 0.05) 50%,
            rgba(79, 70, 229, 0) 100%
          );
          background-size: 200% 100%;
          animation: movingLines 3s linear infinite;
        }

        @keyframes movingLines {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-moving-lines {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
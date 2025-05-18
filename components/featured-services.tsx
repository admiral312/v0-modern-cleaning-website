"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, BrushIcon as Broom, Building, Bug, Sparkles } from "lucide-react"

// Register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Comprehensive cleaning services for homes of all sizes. Regular maintenance, deep cleaning, and specialized services.",
    icon: Broom,
    image: "/placeholder.svg?height=400&width=500",
    link: "/services/residential-cleaning",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning solutions for offices, retail spaces, and commercial properties. Tailored to your business needs.",
    icon: Building,
    image: "/placeholder.svg?height=400&width=500",
    link: "/services/commercial-cleaning",
  },
  {
    title: "Pest Control",
    description:
      "Effective pest management services to eliminate and prevent infestations. Safe for families, pets, and the environment.",
    icon: Bug,
    image: "/placeholder.svg?height=400&width=500",
    link: "/services/pest-control",
  },
  {
    title: "Deep Cleaning",
    description:
      "Intensive cleaning services for those areas that need extra attention. Perfect for move-ins, move-outs, or seasonal cleaning.",
    icon: Sparkles,
    image: "/placeholder.svg?height=400&width=500",
    link: "/services/deep-cleaning",
  },
]

export default function FeaturedServices() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (servicesRef.current) {
      // Staggered animation for service cards
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div key={service.title} className="service-card group relative overflow-hidden rounded-xl shadow-xl">
          <div className="relative h-[450px] w-full">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

            <div className="absolute top-6 left-6 bg-white/95 p-4 rounded-full shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
              <service.icon className="h-8 w-8 text-[#1e5b84]" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <h3 className="text-white text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/90 text-base mb-6 line-clamp-3">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-white font-medium bg-[#1e5b84]/90 hover:bg-[#1e5b84] py-3 px-6 rounded-lg transition-all duration-300 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

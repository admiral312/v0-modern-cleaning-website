"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Sydney, NSW",
    rating: 5,
    text: "Harbour Sparkle transformed my home! Their attention to detail is incredible, and they use eco-friendly products which was important to me. The team was professional, punctual, and thorough.",
    service: "Residential Cleaning",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Melbourne, VIC",
    rating: 5,
    text: "As a business owner, I needed reliable commercial cleaning services. Harbour Sparkle has exceeded my expectations. Their team is consistent, thorough, and always accommodating to our schedule.",
    service: "Commercial Cleaning",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Brisbane, QLD",
    rating: 5,
    text: "We had a serious pest problem that other companies couldn't solve. Harbour Sparkle's pest control team identified the issue immediately and implemented an effective solution.",
    service: "Pest Control",
    date: "2 months ago",
  },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const trustBadgesRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline()
    heroTl.fromTo(".hero-content", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    heroTl.fromTo(".hero-mascot", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "-=0.5")

    // Scroll animations for sections
    const sections = [
      { ref: servicesRef, class: ".services-title" },
      { ref: trustBadgesRef, class: ".trust-title" },
      { ref: reviewsRef, class: ".reviews-title" },
      { ref: ctaRef, class: ".cta-content" },
    ]

    sections.forEach((section) => {
      if (section.ref.current) {
        gsap.fromTo(
          section.class,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section.ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }
    })

    // Service cards animation
    if (servicesRef.current) {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 30 },
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

    // Trust badges animation
    if (trustBadgesRef.current) {
      gsap.fromTo(
        ".trust-badge",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trustBadgesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    // Reviews animation
    if (reviewsRef.current) {
      gsap.fromTo(
        ".reviews-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 80%",
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
    <>
      {/* Hero Section - Positioned below navbar with proper spacing */}
      <section
        ref={heroRef}
        className="pt-16 pb-16 md:pt-16 md:pb-24 bg-gradient-to-r from-[#f8f9fa] to-[#e9f0f8] overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e5b84]/5 clip-path-hero z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content - Always first on mobile */}
            <div className="hero-content z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#1e5b84] text-sm font-medium mb-6 border border-blue-100">
                <Star className="h-4 w-4 mr-2 text-[#1e5b84]" />
                <span>Sydney's Premier Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional <span className="text-[#1e5b84]">Cleaning & Pest Control</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Expert cleaning and pest management solutions for homes and businesses across Australia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#1e5b84] hover:bg-[#164569] rounded-md text-base h-12 px-6 font-medium shadow-md"
                  asChild
                >
                  <Link href="/booking">Book a Service</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1e5b84] text-[#1e5b84] rounded-md text-base h-12 px-6 font-medium hover:bg-blue-50"
                  asChild
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="bg-green-50 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">100% Satisfaction</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-green-50 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* Mascot Image - Improved mobile display */}
            <div className="hero-mascot relative flex justify-center items-center">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-[#1e5b84]/10 rounded-full blur-3xl transform scale-75 translate-y-10"></div>
                <div className="relative z-10">
                  <Image
                    src="/images/cleaning-mascot.png"
                    alt="Harbour Sparkle Cleaning Mascot"
                    width={400}
                    height={400}
                    className="object-contain mx-auto"
                    priority
                  />
                </div>
                {/* Rating badge - repositioned for better mobile display */}
                <div className="absolute -bottom-4 md:right-0 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 bg-white p-3 rounded-lg shadow-lg z-20">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium text-gray-900">5-Star Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Made smaller */}
      <section ref={servicesRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 services-title">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <div className="w-16 h-1 bg-[#1e5b84] mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Professional cleaning and pest control services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cleaning Services Card */}
            <Card className="service-card border-0 shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Residential cleaning services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Cleaning</h3>
                <p className="text-gray-600 mb-3 text-sm">Comprehensive cleaning solutions for homes of all sizes.</p>
                <Link
                  href="/services/residential-cleaning"
                  className="inline-flex items-center text-[#1e5b84] text-sm font-medium hover:underline"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Commercial Cleaning Card */}
            <Card className="service-card border-0 shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Commercial cleaning services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Cleaning</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Professional cleaning solutions for businesses and offices.
                </p>
                <Link
                  href="/services/commercial-cleaning"
                  className="inline-flex items-center text-[#1e5b84] text-sm font-medium hover:underline"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Pest Control Card */}
            <Card className="service-card border-0 shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Pest control services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pest Control</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Effective pest management solutions to keep your property pest-free.
                </p>
                <Link
                  href="/services/pest-control"
                  className="inline-flex items-center text-[#1e5b84] text-sm font-medium hover:underline"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#1e5b84] text-[#1e5b84]" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section ref={trustBadgesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 trust-title">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <div className="w-16 h-1 bg-[#1e5b84] mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional cleaning and pest control services with a commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="trust-badge border-0 shadow-sm rounded-lg overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-[#1e5b84]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">
                  Fully licensed professionals with comprehensive insurance for your peace of mind
                </p>
              </CardContent>
            </Card>

            <Card className="trust-badge border-0 shadow-sm rounded-lg overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-[#1e5b84]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600 text-sm">
                  If you're not completely satisfied, we'll return to address any concerns at no cost
                </p>
              </CardContent>
            </Card>

            <Card className="trust-badge border-0 shadow-sm rounded-lg overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-[#1e5b84]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Premium quality services at fair, transparent prices with no hidden fees
                </p>
              </CardContent>
            </Card>

            <Card className="trust-badge border-0 shadow-sm rounded-lg overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-[#1e5b84]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Safe & Eco-Friendly</h3>
                <p className="text-gray-600 text-sm">
                  We use environmentally responsible products that are safe for your family and pets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned with Google logo and modern slider in a single row */}
      <section ref={reviewsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 reviews-title">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-[#1e5b84] mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              We take pride in our 5-star rating and the positive feedback from our satisfied clients
            </p>
          </div>

          <div className="reviews-content bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
              {/* Google Reviews Logo and Rating - Left Side */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start lg:border-r lg:border-gray-200 lg:pr-8">
                <Image src="/images/google-reviews.png" alt="Google Reviews" width={180} height={80} className="mb-4" />

                <div className="flex items-center gap-2 mb-4">
                  <div className="text-3xl font-bold text-gray-900">4.9</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 text-center lg:text-left">Based on 127 verified reviews</p>

                <div className="w-full space-y-2 max-w-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700 w-8">5★</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-yellow-400 h-2 rounded-full w-[92%]"></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">92%</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700 w-8">4★</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-yellow-400 h-2 rounded-full w-[6%]"></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">6%</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700 w-8">3★</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full">
                      <div className="bg-yellow-400 h-2 rounded-full w-[2%]"></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">2%</span>
                  </div>
                </div>

                <Button className="mt-6 bg-[#1e5b84] w-full max-w-xs" asChild>
                  <Link href="https://g.page/r/harbour-sparkle/review" target="_blank">
                    Write a Review
                  </Link>
                </Button>
              </div>

              {/* Testimonial Slider - Right Side */}
              <div className="w-full lg:w-2/3 relative">
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full"
                    >
                      <Card className="border-0 shadow-md rounded-lg overflow-hidden bg-white">
                        <CardContent className="p-6">
                          <div className="flex flex-col">
                            <div className="mb-4">
                              <Quote className="h-8 w-8 text-[#1e5b84]/20" />
                            </div>

                            <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                              "{testimonials[current].text}"
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="font-medium text-[#1e5b84]">
                                  {testimonials[current].name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                                <div className="flex items-center gap-2 text-sm">
                                  <p className="text-gray-500">{testimonials[current].date}</p>
                                  <span className="text-gray-300">•</span>
                                  <p className="text-[#1e5b84]">{testimonials[current].service}</p>
                                </div>
                              </div>
                              <div className="flex ml-auto">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex justify-center mt-6 gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 p-0 border-gray-200 bg-white shadow-sm"
                    onClick={() => {
                      prev()
                      setAutoplay(false)
                    }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous testimonial</span>
                  </Button>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`rounded-full h-2.5 w-2.5 p-0 border-0 ${
                          current === index ? "bg-[#1e5b84]" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                        onClick={() => {
                          setCurrent(index)
                          setAutoplay(false)
                        }}
                      >
                        <span className="sr-only">Go to slide {index + 1}</span>
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 p-0 border-gray-200 bg-white shadow-sm"
                    onClick={() => {
                      next()
                      setAutoplay(false)
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next testimonial</span>
                  </Button>
                </div>

                <div className="text-center mt-4">
                  <Button variant="outline" className="border-[#1e5b84] text-[#1e5b84]" asChild>
                    <Link href="https://g.page/r/harbour-sparkle" target="_blank">
                      View All Reviews on Google
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-[#1e5b84]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center cta-content">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Book our professional cleaning or pest control services today and enjoy a cleaner, healthier
                environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#1e5b84] hover:bg-gray-100 rounded-md text-base h-12 px-6 font-medium shadow-md"
                  asChild
                >
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 rounded-md text-base h-12 px-6 font-medium"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-lg rounded-lg overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                      />
                    </div>
                    <div>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                      />
                    </div>
                    <div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Your phone"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                      />
                    </div>
                    <div>
                      <select
                        id="service"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="pest">Pest Control</option>
                        <option value="deep">Deep Cleaning</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#1e5b84] hover:bg-[#164569] rounded-md text-base h-12 shadow-md"
                    >
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

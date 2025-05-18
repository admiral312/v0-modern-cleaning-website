"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Sydney, NSW",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Harbour Sparkle transformed my home! Their attention to detail is incredible, and they use eco-friendly products which was important to me. The team was professional, punctual, and thorough.",
    service: "Residential Cleaning",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Melbourne, VIC",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a business owner, I needed reliable commercial cleaning services. Harbour Sparkle has exceeded my expectations. Their team is consistent, thorough, and always accommodating to our schedule.",
    service: "Commercial Cleaning",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Brisbane, QLD",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "We had a serious pest problem that other companies couldn't solve. Harbour Sparkle's pest control team identified the issue immediately and implemented an effective solution.",
    service: "Pest Control",
    date: "2 months ago",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

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

  return (
    <div className="relative">
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
    </div>
  )
}

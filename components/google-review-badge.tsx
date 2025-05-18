"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GoogleReviewBadge() {
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <div ref={badgeRef} className="bg-white rounded-xl shadow-xl p-10 max-w-sm mx-auto text-center card-hover">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Image src="/placeholder.svg?height=32&width=32" alt="Google" width={32} height={32} className="rounded-full" />
        <span className="font-bold text-gray-900 text-lg">Google Reviews</span>
      </div>
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-10 w-10 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-5xl font-bold text-gray-900 mb-3">5.0</p>
      <p className="text-gray-600 mb-8 text-lg">Based on 127 reviews</p>
      <div className="p-4 bg-gray-50 rounded-lg mb-6">
        <p className="text-gray-700 italic">"The best cleaning service we've ever used!"</p>
      </div>
      <Link
        href="https://g.page/r/harbour-sparkle/review"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1e5b84] font-medium hover:underline text-lg animated-underline inline-block"
      >
        See all reviews
      </Link>
    </div>
  )
}

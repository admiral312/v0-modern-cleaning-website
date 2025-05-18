"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// Register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (footerRef.current) {
      // Footer animation
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Staggered animation for footer columns
      gsap.fromTo(
        ".footer-column",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      ref={footerRef}
      className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="footer-content">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Company info and social - 4 columns on desktop */}
            <div className="footer-column md:col-span-4 space-y-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loll.jpg-I1dOARvPiHkuFUkIkmxQN40lNmu5YE.jpeg"
                alt="Harbour Sparkle"
                width={180}
                height={60}
                className="h-auto bg-white p-2 rounded-lg shadow-sm mb-6"
              />
              <p className="text-gray-600 leading-relaxed">
                Harbour Sparkle provides premium cleaning and pest control services for homes and businesses across
                Australia. With over 15 years of experience, we deliver exceptional results.
              </p>
              <div className="flex space-x-3 pt-2">
                <Link
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors duration-300 bg-gray-100 p-2 rounded-full hover:bg-[#1e5b84]"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors duration-300 bg-gray-100 p-2 rounded-full hover:bg-[#1e5b84]"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors duration-300 bg-gray-100 p-2 rounded-full hover:bg-[#1e5b84]"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors duration-300 bg-gray-100 p-2 rounded-full hover:bg-[#1e5b84]"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>

            {/* Services - 3 columns on desktop */}
            <div className="footer-column md:col-span-3">
              <h3 className="text-base font-semibold mb-5 text-gray-900 border-b border-gray-200 pb-2">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/residential-cleaning"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Residential Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/commercial-cleaning"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pest-control"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Pest Control
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/deep-cleaning"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/move-out-cleaning"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Move-out Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links - 2 columns on desktop */}
            <div className="footer-column md:col-span-2">
              <h3 className="text-base font-semibold mb-5 text-gray-900 border-b border-gray-200 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Book a Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/staff-login"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Staff Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 hover:text-[#1e5b84] transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1 h-1 bg-[#1e5b84] rounded-full mr-2"></span>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact - 3 columns on desktop */}
            <div className="footer-column md:col-span-3">
              <h3 className="text-base font-semibold mb-5 text-gray-900 border-b border-gray-200 pb-2">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#1e5b84] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">123 Harbour Street, Sydney, NSW 2000, Australia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#1e5b84] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">1300 SPARKLE</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#1e5b84] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">info@harboursparkle.com.au</span>
                </li>
              </ul>

              <div className="mt-6">
                <Button
                  className="bg-[#1e5b84] hover:bg-[#164569] rounded-md text-sm h-10 px-4 shadow-sm hover:shadow-md transition-all duration-300 text-white"
                  asChild
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright and links */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Harbour Sparkle. All rights reserved.</p>

            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-[#1e5b84] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-[#1e5b84] transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-[#1e5b84] transition-colors duration-300 text-sm"
              >
                Sitemap
              </Link>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 text-gray-500 hover:text-white hover:border-[#1e5b84] hover:bg-[#1e5b84] transition-colors duration-300 h-8 w-8"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

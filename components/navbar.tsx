"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUp, ChevronDown, LogIn, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    dropdown: true,
    items: [
      { name: "Residential Cleaning", path: "/services/residential-cleaning" },
      { name: "Commercial Cleaning", path: "/services/commercial-cleaning" },
      { name: "Pest Control", path: "/services/pest-control" },
      { name: "Deep Cleaning", path: "/services/deep-cleaning" },
      { name: "Move-out Cleaning", path: "/services/move-out-cleaning" },
    ],
  },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Animation for navbar items
    const navLinks = document.querySelectorAll(".nav-link")
    gsap.fromTo(
      navLinks,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out", delay: 0.2 },
    )

    // Animation for logo
    gsap.fromTo(".nav-logo", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })

    // Animation for CTA button
    gsap.fromTo(
      ".nav-cta",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 },
    )
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white ${
          isScrolled ? "shadow-lg py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="nav-logo relative z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loll.jpg-I1dOARvPiHkuFUkIkmxQN40lNmu5YE.jpeg"
                alt="Harbour Sparkle"
                width={160}
                height={53}
                priority
                className="h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <nav className="flex gap-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative nav-link">
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          className={`flex items-center gap-1 text-base font-medium transition-all duration-300 hover:text-[#1e5b84] ${
                            pathname.startsWith(item.path) ? "text-[#1e5b84]" : "text-gray-800"
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-white shadow-xl overflow-hidden z-50"
                            >
                              <div className="py-2">
                                {item.items?.map((subItem, index) => (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                  >
                                    <Link
                                      href={subItem.path}
                                      className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1e5b84] transition-colors duration-200"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className={`text-base font-medium transition-all duration-300 hover:text-[#1e5b84] relative group ${
                          pathname === item.path ? "text-[#1e5b84]" : "text-gray-800"
                        }`}
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e5b84] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 nav-link">
                <Phone className="h-4 w-4 text-[#1e5b84]" />
                <span className="text-sm font-medium">1300 SPARKLE</span>
              </div>

              <Button
                className="bg-[#1e5b84] hover:bg-[#164569] rounded-md nav-cta relative overflow-hidden group"
                asChild
              >
                <Link href="/booking">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-[#1e5b84] text-[#1e5b84] rounded-md nav-link hover:bg-blue-50 transition-colors duration-300"
                asChild
              >
                <Link href="/staff-login">
                  <LogIn className="h-4 w-4" />
                  <span className="sr-only">Staff Login</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="nav-link">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full bg-gradient-to-b from-white to-blue-50">
                  <div className="flex items-center justify-between p-6 border-b">
                    <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loll.jpg-I1dOARvPiHkuFUkIkmxQN40lNmu5YE.jpeg"
                        alt="Harbour Sparkle"
                        width={140}
                        height={47}
                        className="h-auto"
                      />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-blue-50">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <div className="flex flex-col flex-grow p-6 overflow-auto">
                    <nav className="flex flex-col gap-5 mb-8">
                      {navItems.map((item) => (
                        <div key={item.name} className="flex flex-col">
                          {item.dropdown ? (
                            <>
                              <div
                                className={`text-lg font-medium transition-colors hover:text-[#1e5b84] cursor-pointer ${
                                  pathname.startsWith(item.path) ? "text-[#1e5b84]" : "text-gray-800"
                                }`}
                                onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{item.name}</span>
                                  <ChevronDown
                                    className={`h-5 w-5 transition-transform duration-300 ${
                                      openDropdown === item.name ? "rotate-180" : ""
                                    }`}
                                  />
                                </div>
                              </div>
                              <AnimatePresence>
                                {openDropdown === item.name && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="ml-4 mt-3 flex flex-col gap-3">
                                      {item.items?.map((subItem, index) => (
                                        <motion.div
                                          key={subItem.name}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.2, delay: index * 0.05 }}
                                        >
                                          <Link
                                            href={subItem.path}
                                            className="text-base text-gray-700 hover:text-[#1e5b84] transition-colors duration-200"
                                            onClick={() => {
                                              setOpenDropdown(null)
                                              setIsOpen(false)
                                            }}
                                          >
                                            {subItem.name}
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link
                              href={item.path}
                              className={`text-lg font-medium transition-colors hover:text-[#1e5b84] ${
                                pathname === item.path ? "text-[#1e5b84]" : "text-gray-800"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                      <Link
                        href="/staff-login"
                        className="text-lg font-medium text-[#1e5b84] flex items-center gap-2 mt-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <LogIn className="h-5 w-5" />
                        Staff Login
                      </Link>
                    </nav>
                  </div>
                  <div className="p-6 border-t">
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="h-5 w-5 text-[#1e5b84]" />
                      <span className="text-base font-medium">1300 SPARKLE</span>
                    </div>
                    <Button
                      className="w-full bg-[#1e5b84] hover:bg-[#164569] relative overflow-hidden group"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/booking">
                        <span className="relative z-10">Book Now</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 right-8 z-50 bg-[#1e5b84] text-white p-3 rounded-full shadow-lg hover:bg-[#164569] transition-colors duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

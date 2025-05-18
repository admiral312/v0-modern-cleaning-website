"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, LogIn, Menu, Phone, X } from "lucide-react"

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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loll.jpg-I1dOARvPiHkuFUkIkmxQN40lNmu5YE.jpeg"
              alt="Harbour Sparkle"
              width={160}
              height={53}
              priority
              className="h-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#1e5b84] ${
                          pathname.startsWith(item.path) ? "text-[#1e5b84]" : "text-gray-800"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-64 rounded-md bg-white shadow-lg overflow-hidden z-50">
                          <div className="py-1">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#1e5b84]"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`text-sm font-medium transition-colors hover:text-[#1e5b84] ${
                        pathname === item.path ? "text-[#1e5b84]" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#1e5b84]" />
                <span className="text-sm font-medium">1300 SPARKLE</span>
              </div>

              <Button className="bg-[#1e5b84] hover:bg-[#164569] rounded-md" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>

              <Button variant="outline" size="icon" className="border-[#1e5b84] text-[#1e5b84] rounded-md" asChild>
                <Link href="/staff-login">
                  <LogIn className="h-4 w-4" />
                  <span className="sr-only">Staff Login</span>
                </Link>
              </Button>
            </div>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loll.jpg-I1dOARvPiHkuFUkIkmxQN40lNmu5YE.jpeg"
                      alt="Harbour Sparkle"
                      width={140}
                      height={47}
                      className="h-auto"
                    />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      {item.dropdown ? (
                        <>
                          <div
                            className={`text-base font-medium transition-colors hover:text-[#1e5b84] cursor-pointer ${
                              pathname.startsWith(item.path) ? "text-[#1e5b84]" : "text-gray-800"
                            }`}
                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.name}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                              />
                            </div>
                          </div>
                          {openDropdown === item.name && (
                            <div className="ml-4 mt-2 flex flex-col gap-2">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className="text-sm text-gray-700 hover:text-[#1e5b84]"
                                  onClick={() => {
                                    setOpenDropdown(null)
                                    setIsOpen(false)
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.path}
                          className={`text-base font-medium transition-colors hover:text-[#1e5b84] ${
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
                    className="text-base font-medium text-[#1e5b84] flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="h-4 w-4" />
                    Staff Login
                  </Link>
                </nav>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#1e5b84]" />
                    <span className="text-sm font-medium">1300 SPARKLE</span>
                  </div>
                  <Button className="bg-[#1e5b84] hover:bg-[#164569] w-full" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

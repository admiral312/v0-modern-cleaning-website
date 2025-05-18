import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Residential Cleaning Services | Harbour Sparkle",
  description:
    "Professional residential cleaning services for homes of all sizes. Our expert cleaners deliver spotless results with eco-friendly products.",
  keywords:
    "residential cleaning, home cleaning, house cleaning, professional cleaners, eco-friendly cleaning, Sydney cleaning services",
}

export default function ResidentialCleaningPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-[#1e5b84] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e5b84] to-[#164569] opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Residential Cleaning Services
            </h1>
            <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional cleaning solutions for homes of all sizes, delivering spotless results and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
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
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Professional Home Cleaning Services You Can Trust
              </h2>
              <p className="text-gray-600 mb-6">
                At Harbour Sparkle, we understand that your home is your sanctuary. Our residential cleaning services
                are designed to give you a spotlessly clean home without the hassle. Whether you need a regular cleaning
                service or a one-time deep clean, our professional team delivers exceptional results every time.
              </p>
              <p className="text-gray-600 mb-6">
                We use eco-friendly cleaning products and state-of-the-art equipment to ensure your home is not only
                clean but also healthy for your family and pets. Our trained professionals pay attention to every
                detail, from dusting ceiling fans to scrubbing baseboards.
              </p>
              <div className="flex items-center gap-2 text-[#1e5b84] font-medium">
                <Shield className="h-5 w-5" />
                <span>All our cleaning professionals are fully insured and background-checked</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Professional residential cleaning"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What's Included in Our Residential Cleaning
            </h2>
            <div className="w-16 h-1 bg-[#1e5b84] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive residential cleaning services cover all aspects of home cleaning to ensure your space is
              immaculate from top to bottom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#1e5b84]" /> Kitchen Cleaning
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Countertops, sinks, and backsplashes sanitized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Appliance exteriors cleaned and polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cabinet fronts wiped down</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Floors swept and mopped</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#1e5b84]" /> Bathroom Cleaning
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Toilets, showers, and tubs thoroughly cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Sinks and countertops sanitized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Mirrors and fixtures polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Floors sanitized and mopped</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#1e5b84]" /> Living Areas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Dusting of all surfaces and furniture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Vacuuming of carpets and upholstery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Hardwood floors cleaned and polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Window sills and blinds dusted</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#1e5b84]" /> Bedrooms
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Dusting of furniture and fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Vacuuming of carpets and rugs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Changing of linens (upon request)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Organizing and tidying</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#1e5b84]" /> General Areas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Dusting of ceiling fans and light fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Baseboards and door frames wiped down</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cobweb removal from corners and ceilings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Emptying of trash bins</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#1e5b84]" /> Add-On Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Interior window cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Refrigerator and oven interior cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Laundry and ironing services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">Carpet deep cleaning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Residential Cleaning Process</h2>
            <div className="w-16 h-1 bg-[#1e5b84] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure consistent, high-quality cleaning results for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-[#1e5b84] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gray-200"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Assessment</h3>
              <p className="text-gray-600">
                We begin with a thorough assessment of your home to understand your specific cleaning needs and
                preferences.
              </p>
            </div>

            <div className="relative">
              <div className="bg-[#1e5b84] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gray-200"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Plan</h3>
              <p className="text-gray-600">
                We create a tailored cleaning plan based on your home's layout, your priorities, and any special
                requirements.
              </p>
            </div>

            <div className="relative">
              <div className="bg-[#1e5b84] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gray-200"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Cleaning</h3>
              <p className="text-gray-600">
                Our trained cleaning team executes the plan using eco-friendly products and professional equipment.
              </p>
            </div>

            <div className="relative">
              <div className="bg-[#1e5b84] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Check</h3>
              <p className="text-gray-600">
                We conduct a final inspection to ensure everything meets our high standards and your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Benefits of Professional Residential Cleaning
            </h2>
            <div className="w-16 h-1 bg-[#1e5b84] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why homeowners across Sydney trust Harbour Sparkle for their residential cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time and Energy</h3>
                <p className="text-gray-600">
                  Reclaim your free time and focus on what matters most to you while we handle the cleaning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthier Living Environment</h3>
                <p className="text-gray-600">
                  Our thorough cleaning reduces allergens, dust, and bacteria, creating a healthier home for your
                  family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Sparkles className="h-7 w-7 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consistent Quality</h3>
                <p className="text-gray-600">
                  Enjoy the same high standard of cleaning with every visit from our trained professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Cleaning</h3>
                <p className="text-gray-600">
                  We tailor our services to your specific needs, focusing on the areas that matter most to you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly Products</h3>
                <p className="text-gray-600">
                  We use environmentally responsible cleaning products that are safe for your family, pets, and the
                  planet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Choose from one-time, weekly, bi-weekly, or monthly cleaning services to suit your lifestyle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e5b84]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Cleaner, Healthier Home?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book our professional residential cleaning services today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
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
        </div>
      </section>
    </>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BrushIcon as Broom, Building, Bug, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FAQ from "@/components/faq"

export const metadata = {
  title: "Services | Harbour Sparkle",
  description: "Professional cleaning and pest control services for homes and businesses across Australia.",
}

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Comprehensive cleaning services for homes of all sizes. Regular maintenance, deep cleaning, and specialized services.",
    icon: Broom,
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/residential-cleaning",
    features: [
      "Regular maintenance cleaning",
      "Deep cleaning services",
      "Window and blind cleaning",
      "Carpet and upholstery cleaning",
      "Kitchen and bathroom sanitization",
    ],
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning solutions for offices, retail spaces, and commercial properties. Tailored to your business needs.",
    icon: Building,
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/commercial-cleaning",
    features: [
      "Office cleaning",
      "Retail space maintenance",
      "Medical facility sanitization",
      "Industrial cleaning",
      "Post-construction cleanup",
    ],
  },
  {
    title: "Pest Control",
    description:
      "Effective pest management services to eliminate and prevent infestations. Safe for families, pets, and the environment.",
    icon: Bug,
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/pest-control",
    features: [
      "Termite inspection and treatment",
      "Rodent control",
      "Cockroach elimination",
      "Spider and ant management",
      "Preventative pest programs",
    ],
  },
  {
    title: "Deep Cleaning",
    description:
      "Intensive cleaning services for those areas that need extra attention. Perfect for move-ins, move-outs, or seasonal cleaning.",
    icon: Sparkles,
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/deep-cleaning",
    features: [
      "Move-in/move-out cleaning",
      "Spring cleaning services",
      "Post-renovation cleanup",
      "Appliance deep cleaning",
      "Disinfection services",
    ],
  },
]

const specializedServices = [
  {
    title: "Move-Out Cleaning",
    description:
      "End of lease cleaning services to ensure you get your bond back. We clean according to real estate standards.",
    link: "/services/move-out-cleaning",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Professional carpet cleaning services to remove stains, odors, and allergens, extending the life of your carpets.",
    link: "/services/carpet-cleaning",
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal clear windows inside and out. We use professional equipment to reach even the highest windows safely.",
    link: "/services/window-cleaning",
  },
  {
    title: "Upholstery Cleaning",
    description: "Refresh and sanitize your furniture with our professional upholstery cleaning services.",
    link: "/services/upholstery-cleaning",
  },
  {
    title: "Tile & Grout Cleaning",
    description: "Restore the original appearance of your tiles and grout with our specialized cleaning services.",
    link: "/services/tile-grout-cleaning",
  },
  {
    title: "Eco-Friendly Cleaning",
    description:
      "Environmentally responsible cleaning services using green products that are safe for your family and pets.",
    link: "/services/eco-friendly-cleaning",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] pt-32 pb-20 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Our Services</h1>
            <div className="w-20 h-1.5 bg-[#1e5b84] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">Comprehensive cleaning and pest control solutions for every need</p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[#1e5b84] text-sm font-medium mb-6">
                    <service.icon className="h-4 w-4 mr-2" />
                    <span>{service.title}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-[#1e5b84] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#1e5b84] hover:bg-[#164569] rounded-md text-base h-12 px-6" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Specialized Services</h2>
            <div className="w-20 h-1.5 bg-[#1e5b84] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">Additional services to meet your specific needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service) => (
              <Card key={service.title} className="border-0 shadow-md rounded-xl overflow-hidden h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button variant="outline" className="border-[#1e5b84] text-[#1e5b84] mt-auto" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-[#1e5b84] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e5b84] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Harbour Sparkle Difference?</h2>
            <p className="text-xl text-blue-100 mb-8">Book your service today or contact us for a custom quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#1e5b84] hover:bg-gray-100 rounded-md text-base h-12 px-8 font-medium"
                asChild
              >
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-[#164569] rounded-md text-base h-12 px-8 font-medium"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

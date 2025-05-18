import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Sydney NSW | Harbour Sparkle",
  description:
    "Professional commercial cleaning services in Sydney, NSW. Office cleaning, retail spaces, medical facilities, and more. Trusted local experts serving all of NSW.",
  keywords:
    "commercial cleaning Sydney, office cleaning NSW, business cleaning services Sydney, retail cleaning NSW, medical facility cleaning Sydney, industrial cleaning NSW",
  alternates: {
    canonical: "https://harboursparkle.com.au/services/commercial-cleaning",
  },
  openGraph: {
    title: "Commercial Cleaning Services Sydney NSW | Harbour Sparkle",
    description:
      "Professional commercial cleaning services in Sydney, NSW. Office cleaning, retail spaces, medical facilities, and more. Trusted local experts serving all of NSW.",
    url: "https://harboursparkle.com.au/services/commercial-cleaning",
    siteName: "Harbour Sparkle",
    locale: "en_AU",
    type: "website",
  },
}

export default function CommercialCleaningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-green-50 pt-32 pb-20 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Commercial cleaning in Sydney NSW"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm">
                <span>Sydney & NSW Commercial Services</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Commercial Cleaning Services Sydney</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Professional cleaning solutions for businesses across Sydney and NSW. Create a clean, healthy
                  environment for your employees and customers with our trusted local service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mr-0">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Commercial cleaning service in Sydney NSW"
                width={550}
                height={550}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sydney & NSW Service Area */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Serving All Sydney & NSW Areas</h2>
            <p className="text-gray-500 max-w-[700px]">
              Our commercial cleaning services are available throughout Sydney and across New South Wales. From CBD
              offices to suburban retail spaces and regional industrial facilities, we provide consistent, high-quality
              cleaning services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Sydney CBD</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">North Sydney</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Parramatta</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Eastern Suburbs</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Inner West</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Western Sydney</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Northern Beaches</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Sutherland Shire</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Newcastle</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Wollongong</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">Central Coast</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="font-medium">All NSW Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Commercial Cleaning Services in Sydney
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive cleaning solutions tailored to your Sydney business needs
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Office Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Regular cleaning services for Sydney office spaces of all sizes, from small startups to large
                  corporate environments.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reception areas and common spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Workstations and meeting rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Kitchen and break areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Restroom sanitization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Retail Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Specialized cleaning for retail spaces across NSW to maintain a pristine shopping environment for your
                  customers.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sales floor and display areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fitting rooms and customer areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Entrance and window cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stockroom and staff areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Medical Facility Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Specialized cleaning and sanitization for Sydney medical offices, clinics, and healthcare facilities.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Waiting rooms and reception areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Examination rooms and treatment areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Medical-grade sanitization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Compliance with NSW healthcare regulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Industrial Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Heavy-duty cleaning services for warehouses, factories, and industrial facilities throughout NSW.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Production areas and machinery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Warehouse floors and storage areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Loading docks and shipping areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Staff facilities and break rooms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Restaurant & Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Specialized cleaning for Sydney restaurants, cafes, hotels, and other hospitality businesses.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dining areas and guest spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Kitchen and food preparation areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Restrooms and public facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Compliance with NSW health regulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Educational Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive cleaning services for schools, universities, and educational institutions across NSW.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Classrooms and lecture halls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Common areas and cafeterias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Administrative offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Gymnasiums and recreational areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-900/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Benefits of Professional Commercial Cleaning in Sydney
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Why Sydney businesses choose Harbour Sparkle for their cleaning needs
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Healthier Work Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Regular professional cleaning reduces allergens, germs, and bacteria, creating a healthier environment
                  for employees and customers, reducing sick days and improving productivity in your Sydney workplace.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Enhanced Professional Image</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A clean, well-maintained business space creates a positive first impression for clients, customers,
                  and visitors, enhancing your company's professional image and reputation in the competitive Sydney
                  market.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Increased Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Employees work more efficiently in clean, organized environments. Professional cleaning allows your
                  NSW staff to focus on their core responsibilities rather than cleaning tasks.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Extended Facility Lifespan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Regular professional cleaning helps maintain and extend the life of your flooring, furnishings, and
                  equipment, protecting your Sydney business investments and reducing replacement costs.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Customized Cleaning Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We develop tailored cleaning programs specific to your Sydney business needs, schedule, and budget,
                  ensuring you receive exactly the services your facility requires.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Compliance & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our professional cleaning services help ensure your business meets NSW health and safety regulations,
                  reducing liability and creating a safer environment for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Sydney Commercial Cleaning Process
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How we deliver exceptional cleaning services for your Sydney business
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                  <p className="text-gray-500">
                    We begin with a thorough assessment of your Sydney facility to understand your specific cleaning
                    needs, challenges, and expectations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customized Proposal</h3>
                  <p className="text-gray-500">
                    Based on our assessment, we develop a tailored cleaning plan and proposal that outlines services,
                    frequency, and pricing specific to your NSW business needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Service Implementation</h3>
                  <p className="text-gray-500">
                    Once approved, we schedule and implement your cleaning program with our trained Sydney professionals
                    using industry-leading equipment and products.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                  <p className="text-gray-500">
                    We conduct regular inspections and check-ins to ensure our services consistently meet or exceed your
                    expectations across all your NSW locations.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Commercial cleaning process in Sydney"
                width={500}
                height={600}
                className="rounded-xl object-cover shadow-lg h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="font-medium text-center">
                  "Harbour Sparkle transformed our Sydney office environment. Their attention to detail and
                  professionalism is unmatched."
                </p>
                <p className="text-sm text-center text-gray-500 mt-2">— Michael Chen, Sydney Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industries We Serve Across NSW</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized commercial cleaning for various business sectors in Sydney and throughout NSW
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="text-center shadow-md border-0">
              <CardHeader className="pb-2">
                <CardTitle>Corporate Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Corporate Offices in Sydney"
                  width={80}
                  height={80}
                  className="mx-auto mb-2"
                />
              </CardContent>
            </Card>
            <Card className="text-center shadow-md border-0">
              <CardHeader className="pb-2">
                <CardTitle>Retail Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Retail Stores in NSW"
                  width={80}
                  height={80}
                  className="mx-auto mb-2"
                />
              </CardContent>
            </Card>
            <Card className="text-center shadow-md border-0">
              <CardHeader className="pb-2">
                <CardTitle>Medical Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Medical Facilities in Sydney"
                  width={80}
                  height={80}
                  className="mx-auto mb-2"
                />
              </CardContent>
            </Card>
            <Card className="text-center shadow-md border-0">
              <CardHeader className="pb-2">
                <CardTitle>Restaurants</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Restaurants in NSW"
                  width={80}
                  height={80}
                  className="mx-auto mb-2"
                />
              </CardContent>
            </Card>
            <Card className="text-center shadow-md border-0">
              <CardHeader className="pb-2">
                <CardTitle>Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Schools in Sydney"
                  width={80}
                  height={80}
                  className="mx-auto mb-2"
                />
              </CardContent>
            </Card>
            <Card className="text-center shadow-md border-0">
              <CardHeader className="pb-2">
                <CardTitle>Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Industrial facilities in NSW"
                  width={80}
                  height={80}
                  className="mx-auto mb-2"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Business Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Sydney's Trusted Commercial Cleaning Service</h2>
              <p className="text-gray-500 mb-6">
                As a locally owned and operated business, we understand the unique cleaning needs of Sydney businesses.
                Our team of professional cleaners are all local residents who take pride in maintaining the cleanliness
                and hygiene standards of our community's workplaces.
              </p>
              <p className="text-gray-500 mb-6">
                We service all areas across Sydney and New South Wales, from the bustling CBD to suburban business parks
                and regional commercial centers. Our local knowledge allows us to provide responsive, reliable service
                tailored to the specific needs of your location.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Locally owned and operated in Sydney</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Fully insured and police-checked staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Eco-friendly cleaning options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Flexible scheduling for Sydney businesses</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Sydney commercial cleaning team"
                width={600}
                height={600}
                className="rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <p className="font-medium text-sm">
                  "We've been serving Sydney businesses since 2010, providing exceptional commercial cleaning services
                  across NSW."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Sydney-specific questions */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our commercial cleaning services in Sydney
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Do you service all areas of Sydney and NSW?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Yes, we provide commercial cleaning services throughout Sydney and across New South Wales. From the
                  Sydney CBD to North Sydney, Parramatta, Eastern Suburbs, Western Sydney, and all regional areas of
                  NSW, our team can meet your cleaning needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are your cleaning products safe and environmentally friendly?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Yes, we prioritize the use of eco-friendly, non-toxic cleaning products that are safe for your
                  employees, customers, and the environment. We can also accommodate specific requests for green
                  cleaning solutions while maintaining the highest standards of cleanliness.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can you clean outside of business hours in Sydney?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Absolutely. We understand that many Sydney businesses prefer cleaning to be done outside of operating
                  hours to minimize disruption. We offer flexible scheduling including early mornings, evenings, and
                  weekends to accommodate your business needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are your cleaners insured and police checked?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Yes, all our cleaning staff are fully insured and have undergone police background checks. We maintain
                  comprehensive public liability insurance and workers' compensation coverage for complete peace of mind
                  for our Sydney clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Sydney Business Space?
              </h2>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and customized commercial cleaning quote for your NSW business
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-blue-700"
                asChild
              >
                <Link href="/booking">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { CheckCircle, Bug, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pest Control Services Sydney NSW | Harbour Sparkle",
  description:
    "Professional pest control services in Sydney and across NSW. Safe, effective solutions for all types of pest problems. Local experts serving Sydney homes and businesses.",
  keywords:
    "pest control Sydney, pest management NSW, termite control Sydney, cockroach control NSW, rodent control Sydney, bed bug treatment NSW, spider control Sydney",
  alternates: {
    canonical: "https://harboursparkle.com.au/services/pest-control",
  },
  openGraph: {
    title: "Pest Control Services Sydney NSW | Harbour Sparkle",
    description:
      "Professional pest control services in Sydney and across NSW. Safe, effective solutions for all types of pest problems. Local experts serving Sydney homes and businesses.",
    url: "https://harboursparkle.com.au/services/pest-control",
    siteName: "Harbour Sparkle",
    locale: "en_AU",
    type: "website",
  },
}

export default function PestControlPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-green-50 pt-32 pb-20 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Pest control in Sydney NSW"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-sm">
                <Bug className="h-4 w-4" />
                <span>Sydney & NSW Pest Control</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Pest Control Sydney</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Safe, effective, and environmentally responsible pest management solutions for homes and businesses
                  across Sydney and NSW.
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
                alt="Pest control service in Sydney NSW"
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
              Our pest control services are available throughout Sydney and across New South Wales. From urban
              apartments to suburban homes and regional properties, we provide effective pest management solutions.
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
              <p className="font-medium">Blue Mountains</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Pest Control Services in Sydney</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive solutions for all types of pest problems across NSW
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Termite Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Protect your Sydney property from destructive termites with our comprehensive inspection and treatment
                  services.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Thorough termite inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Targeted treatment plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Preventative barrier treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing monitoring programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Rodent Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Effective solutions for rat and mouse infestations in Sydney homes and businesses, including humane
                  removal and prevention strategies.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive property inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Humane trapping and removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Entry point sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Preventative recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Cockroach Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Eliminate cockroach infestations in NSW properties with our targeted treatment programs designed for
                  lasting results.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Species identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Targeted gel baits and treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Harborage elimination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Preventative maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Spider Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Manage spider populations in and around your Sydney property with our safe and effective treatments.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Species identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Web removal and treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Targeted crack and crevice treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Perimeter protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Ant Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Eliminate ant colonies and prevent reinfestation in NSW properties with our comprehensive ant
                  management programs.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Species identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Colony targeting treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Entry point sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Preventative recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Bed Bug Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive bed bug elimination services for Sydney homes and businesses using the latest detection
                  and treatment methods.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Thorough inspection and detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Heat treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Targeted chemical applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Follow-up inspections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sydney Pest Problems Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Sydney's Unique Pest Challenges</h2>
              <p className="text-gray-500 mb-6">
                Sydney's climate and urban environment create ideal conditions for various pest problems. Our local
                expertise allows us to effectively address the specific pest challenges faced by Sydney residents and
                businesses.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Coastal & Harbour Areas</h3>
                  <p className="text-gray-500">
                    Sydney's coastal and harbour areas face unique challenges with moisture-loving pests like
                    cockroaches and silverfish. Our treatments are specifically designed for these environments.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Urban Environments</h3>
                  <p className="text-gray-500">
                    Dense urban areas in Sydney CBD and surrounding suburbs create perfect conditions for rodents and
                    cockroaches. We provide targeted urban pest management solutions.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Suburban Homes</h3>
                  <p className="text-gray-500">
                    Sydney's suburban areas face challenges with termites, spiders, and ants. Our comprehensive
                    treatments protect your home and garden from these common invaders.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Sydney pest control specialists"
                width={600}
                height={600}
                className="rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <p className="font-bold">Local Sydney Expertise</p>
                </div>
                <p className="text-sm text-gray-500">
                  Our technicians are trained to address the specific pest challenges faced in different Sydney regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-900/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Sydney Pest Control Approach</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Integrated Pest Management for effective, environmentally responsible solutions across NSW
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
                  <h3 className="text-xl font-bold mb-2">Inspection & Identification</h3>
                  <p className="text-gray-500">
                    We begin with a thorough inspection of your Sydney property to identify the type of pest, extent of
                    infestation, and contributing factors specific to your location.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customized Treatment Plan</h3>
                  <p className="text-gray-500">
                    Based on our findings, we develop a tailored treatment plan that targets the specific pest problem
                    while minimizing environmental impact and considering NSW regulations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-gray-500">
                    Our trained Sydney technicians implement the treatment plan using the most effective and appropriate
                    methods for your situation and location.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Prevention & Follow-up</h3>
                  <p className="text-gray-500">
                    We provide recommendations for preventing future infestations specific to your Sydney property and
                    schedule follow-up visits to ensure the problem is resolved.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Pest control approach in Sydney"
                width={500}
                height={600}
                className="rounded-xl object-cover shadow-lg h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <p className="font-bold">Eco-Friendly Solutions</p>
                </div>
                <p className="text-sm text-gray-500">
                  We prioritize environmentally responsible methods that are safe for your family, pets, and Sydney's
                  unique ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Sydney Residential & Commercial Pest Control
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized solutions for homes and businesses across NSW
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Residential Pest Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-500">
                    Protect your Sydney home and family from unwanted pests with our comprehensive residential pest
                    control services tailored to local conditions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Family and pet-safe treatments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Discreet service with minimal disruption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Preventative programs available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Seasonal pest protection for Sydney homes</span>
                    </li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/booking">Book Residential Service</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Commercial Pest Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-500">
                    Maintain a pest-free business environment with our specialized commercial pest management programs
                    for Sydney businesses.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Industry-specific protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Compliance with NSW health regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Discreet service during non-business hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive documentation</span>
                    </li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <Link href="/contact">Request Commercial Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sydney-specific pest information */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Common Pests in Sydney & NSW</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Understanding the local pest challenges in your area
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">German Cockroaches</h3>
              <p className="text-gray-500 mb-3">
                Extremely common in Sydney apartments and homes, these pests thrive in warm, humid conditions and are
                particularly problematic in kitchens and bathrooms.
              </p>
              <p className="text-sm font-medium text-blue-600">
                Our targeted gel baits and crack treatments provide effective control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Subterranean Termites</h3>
              <p className="text-gray-500 mb-3">
                A serious threat to Sydney homes, these termites cause millions in damage annually across NSW. They're
                particularly active in older suburbs and areas with mature trees.
              </p>
              <p className="text-sm font-medium text-blue-600">
                Our comprehensive termite barriers and monitoring systems provide long-term protection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Rodents</h3>
              <p className="text-gray-500 mb-3">
                Sydney's urban areas and restaurant districts face significant challenges with rats and mice,
                particularly in older buildings and near waterways.
              </p>
              <p className="text-sm font-medium text-blue-600">
                Our integrated approach combines trapping, exclusion, and preventative measures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Funnel Web Spiders</h3>
              <p className="text-gray-500 mb-3">
                These dangerous spiders are native to Sydney and surrounding areas, particularly in leafy suburbs with
                gardens and bushland.
              </p>
              <p className="text-sm font-medium text-blue-600">
                Our targeted treatments focus on reducing harborage areas and creating protective barriers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Portuguese Millipedes</h3>
              <p className="text-gray-500 mb-3">
                These invasive pests are common in Sydney gardens and can invade homes in large numbers, particularly
                after rain.
              </p>
              <p className="text-sm font-medium text-blue-600">
                Our perimeter treatments and entry point sealing provide effective control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Bed Bugs</h3>
              <p className="text-gray-500 mb-3">
                An increasing problem in Sydney's hotels, apartments, and homes, these pests require specialized
                treatment approaches.
              </p>
              <p className="text-sm font-medium text-blue-600">
                Our multi-faceted treatment protocol includes heat treatments and targeted applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our pest control services in Sydney
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Are your pest control treatments safe for children and pets?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Yes, we prioritize safety in all our treatments. We use products that are specifically formulated to
                  be low-risk for humans and pets when used as directed. We'll provide specific safety instructions for
                  each treatment, such as when it's safe to re-enter treated areas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you service all areas of Sydney and NSW?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Yes, we provide pest control services throughout Sydney and across New South Wales. From the Sydney
                  CBD to North Sydney, Eastern Suburbs, Western Sydney, and all regional areas of NSW, our team can
                  address your pest control needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How soon will I see results after a pest treatment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Results vary depending on the pest and treatment method. Some treatments show immediate results, while
                  others may take several days to fully eliminate the pest population. For certain pests like termites,
                  the treatment is designed to work over time to eliminate the colony.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer ongoing pest prevention programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Yes, we offer preventative maintenance programs with regular scheduled visits to keep pests away
                  year-round. These programs are customized based on your Sydney property's needs and the seasonal pest
                  pressures in your area.
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
                Ready for a Pest-Free Sydney Home or Business?
              </h2>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free pest inspection and customized treatment plan for your Sydney property
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-blue-700"
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

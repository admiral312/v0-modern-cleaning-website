import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import FAQ from "@/components/faq"

export const metadata = {
  title: "Contact Us | Harbour Sparkle",
  description: "Get in touch with Harbour Sparkle for all your cleaning and pest control needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] pt-32 pb-20 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Contact Us</h1>
            <div className="w-20 h-1.5 bg-[#1e5b84] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Get in touch with our team for inquiries, quotes, or support. We're here to help with all your cleaning
              and pest control needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-6">
                  <MapPin className="h-8 w-8 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Location</h3>
                <p className="text-gray-600">
                  123 Harbour Street
                  <br />
                  Sydney, NSW 2000
                  <br />
                  Australia
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-6">
                  <Phone className="h-8 w-8 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phone & Email</h3>
                <p className="text-gray-600 mb-2">1300 SPARKLE</p>
                <p className="text-gray-600">info@harboursparkle.com.au</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-6">
                  <Clock className="h-8 w-8 text-[#1e5b84]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600 mb-2">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          id="first-name"
                          placeholder="John"
                          className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          placeholder="Doe"
                          className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          id="phone"
                          placeholder="0412 345 678"
                          className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message..."
                        rows={4}
                        className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-[#1e5b84] hover:bg-[#164569] rounded-md text-base h-12">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <p className="text-gray-600 mb-8">Visit our office or service areas across Australia</p>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-[400px] bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Google Map would be embedded here</p>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  For urgent pest control or emergency cleaning services outside of business hours, please call our
                  emergency hotline.
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#1e5b84]" />
                  <span className="font-medium">+61 2 9876 5432</span>
                </div>
              </div>
            </div>
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
            <p className="text-xl text-blue-100 mb-8">Book your service today or request a free quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#1e5b84] hover:bg-gray-100 rounded-md text-base h-12 px-8 font-medium"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-[#164569] rounded-md text-base h-12 px-8 font-medium"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

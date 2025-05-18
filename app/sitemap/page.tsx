import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Sitemap | Harbour Sparkle",
  description: "Navigate through all pages of Harbour Sparkle cleaning and pest control services.",
}

export default function SitemapPage() {
  return (
    <main className="container mx-auto px-4 py-32 lg:py-36 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Main Pages</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Contact
              </Link>
            </li>
            <li>
              <Link href="/booking" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Book a Service
              </Link>
            </li>
            <li>
              <Link href="/availability" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Check Availability
              </Link>
            </li>
            <li>
              <Link href="/staff-login" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Staff Login
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Service Pages</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/residential-cleaning"
                className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
              >
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Residential Cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/services/commercial-cleaning"
                className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
              >
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Commercial Cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/services/pest-control"
                className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
              >
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Pest Control
              </Link>
            </li>
            <li>
              <Link
                href="/services/deep-cleaning"
                className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
              >
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Deep Cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/services/move-out-cleaning"
                className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
              >
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Move-out Cleaning
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Admin Pages</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/admin" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/staff" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Staff Management
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Legal Pages</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/privacy-policy" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-[#1e5b84] hover:text-[#164569] flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Terms of Service
              </Link>
            </li>
          </ul>
        </section>

        <section className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Blog Posts</h2>
          <p className="text-gray-600 mb-4">
            Our blog is regularly updated with new content. Visit our{" "}
            <Link href="/blog" className="text-[#1e5b84] hover:text-[#164569]">
              blog page
            </Link>{" "}
            to see all our latest articles on cleaning tips, pest control advice, and industry news.
          </p>
          <div className="bg-gray-50 p-4 rounded-md mt-4">
            <h3 className="font-medium text-gray-800 mb-2">Popular Blog Posts:</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/effective-pest-control-tips"
                  className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  10 Effective Pest Control Tips for Australian Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/deep-cleaning-guide"
                  className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  The Ultimate Deep Cleaning Guide for Spring
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/commercial-cleaning-benefits"
                  className="text-[#1e5b84] hover:text-[#164569] flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />5
                  Benefits of Professional Commercial Cleaning for Your Business
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

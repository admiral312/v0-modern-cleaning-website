import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Harbour Sparkle",
  description: "Terms of Service for Harbour Sparkle cleaning and pest control services.",
}

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-4 py-32 lg:py-36 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">Last Updated: May 18, 2025</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p>
            Welcome to Harbour Sparkle. These terms and conditions outline the rules and regulations for the use of
            Harbour Sparkle's website and services.
          </p>
          <p>
            By accessing this website or using our services, we assume you accept these terms and conditions in full. Do
            not continue to use Harbour Sparkle's website or services if you do not accept all of the terms and
            conditions stated on this page.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services</h2>
          <p>
            Harbour Sparkle provides cleaning and pest control services for residential and commercial properties. Our
            services include but are not limited to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Residential Cleaning</li>
            <li>Commercial Cleaning</li>
            <li>Pest Control</li>
            <li>Deep Cleaning</li>
            <li>Move-out Cleaning</li>
          </ul>
          <p className="mt-4">
            The specific details of each service will be outlined in the service agreement or quote provided to you
            before the commencement of any work.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Bookings and Cancellations</h2>
          <p>
            Bookings can be made through our website, by phone, or by email. Once a booking is confirmed, you will
            receive a confirmation email with the details of your service.
          </p>
          <p>
            If you need to cancel or reschedule a booking, please notify us at least 24 hours in advance. Cancellations
            made less than 24 hours before the scheduled service may incur a cancellation fee of up to 50% of the
            service cost.
          </p>
          <p>
            Harbour Sparkle reserves the right to cancel or reschedule a service due to unforeseen circumstances, such
            as extreme weather conditions or staff illness. In such cases, we will notify you as soon as possible and
            offer to reschedule the service at no additional cost.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment</h2>
          <p>
            Payment for our services can be made by credit card, direct bank transfer, or cash. For recurring services,
            we may offer the option to set up automatic payments.
          </p>
          <p>
            Payment is due at the time of service unless otherwise agreed upon in writing. For commercial clients, we
            may offer payment terms of up to 30 days from the date of invoice.
          </p>
          <p>All prices are in Australian Dollars (AUD) and include GST unless otherwise stated.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Satisfaction Guarantee</h2>
          <p>
            We strive to provide the highest quality service to all our clients. If you are not completely satisfied
            with our service, please notify us within 24 hours of the service completion, and we will re-clean the areas
            in question at no additional cost.
          </p>
          <p>
            This guarantee does not apply to issues that were not part of the original service agreement or quote, or to
            issues that arise after the 24-hour period due to normal use of the property.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Liability</h2>
          <p>
            Harbour Sparkle carries comprehensive public liability insurance. However, we are not liable for any
            pre-existing damage to your property or for damage that occurs as a result of normal cleaning procedures on
            surfaces that are not suitable for such procedures.
          </p>
          <p>
            We recommend that you inform us of any delicate or valuable items in your property before the service
            begins, so that we can take appropriate precautions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
          <p>
            Harbour Sparkle reserves the right to modify these terms and conditions at any time. Changes will be
            effective immediately upon posting to our website. Your continued use of our services after any changes to
            these terms constitutes your acceptance of the new terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <p>
              <strong>Harbour Sparkle</strong>
            </p>
            <p>123 Harbour Street</p>
            <p>Sydney, NSW 2000</p>
            <p>Australia</p>
            <p>Email: info@harboursparkle.com.au</p>
            <p>Phone: 1300 SPARKLE</p>
          </div>
        </section>
      </div>
    </main>
  )
}

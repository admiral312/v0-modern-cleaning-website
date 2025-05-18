import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Harbour Sparkle",
  description: "Privacy Policy for Harbour Sparkle cleaning and pest control services.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-32 lg:py-36 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">Last Updated: May 18, 2025</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p>
            At Harbour Sparkle, we respect your privacy and are committed to protecting your personal data. This privacy
            policy will inform you about how we look after your personal data when you visit our website and tell you
            about your privacy rights and how the law protects you.
          </p>
          <p>
            This privacy policy aims to give you information on how Harbour Sparkle collects and processes your personal
            data through your use of this website, including any data you may provide through this website when you sign
            up for our services, request a quote, or contact us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can
            be identified. It does not include data where the identity has been removed (anonymous data).
          </p>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped
            together as follows:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.
            </li>
            <li>
              <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone
              numbers.
            </li>
            <li>
              <strong>Financial Data</strong> includes payment card details.
            </li>
            <li>
              <strong>Transaction Data</strong> includes details about payments to and from you and other details of
              products and services you have purchased from us.
            </li>
            <li>
              <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and
              version, time zone setting and location, browser plug-in types and versions, operating system and
              platform, and other technology on the devices you use to access this website.
            </li>
            <li>
              <strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your
              preferences, feedback and survey responses.
            </li>
            <li>
              <strong>Usage Data</strong> includes information about how you use our website, products and services.
            </li>
            <li>
              <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from
              us and our third parties and your communication preferences.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and
              fundamental rights do not override those interests.
            </li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
          <p className="mt-4">
            Generally, we do not rely on consent as a legal basis for processing your personal data although we will get
            your consent before sending third party direct marketing communications to you via email or text message.
            You have the right to withdraw consent to marketing at any time by contacting us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
            personal data to those employees, agents, contractors and other third parties who have a business need to
            know. They will only process your personal data on our instructions and they are subject to a duty of
            confidentiality.
          </p>
          <p>
            We have put in place procedures to deal with any suspected personal data breach and will notify you and any
            applicable regulator of a breach where we are legally required to do so.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data.
            These include the right to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          <p className="mt-4">If you wish to exercise any of the rights set out above, please contact us.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Details</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
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

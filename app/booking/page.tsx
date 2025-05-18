import BookingPageClient from "./BookingPageClient"

export const metadata = {
  title: "Book a Service | Harbour Sparkle",
  description: "Book a cleaning or pest control service with Harbour Sparkle.",
}

export default function BookingPage() {
  return <BookingPageClient pt-32 md:pt-36 />
}

import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deep Cleaning Services | Harbour Sparkle",
  description:
    "Professional deep cleaning services for homes and businesses. Thorough cleaning of all surfaces, fixtures, and hard-to-reach areas.",
}

export default function DeepCleaningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] pt-32 pb-20 md:pt-36 md:pb-20">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded-full text-xs font-medium\">

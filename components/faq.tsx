"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of cleaning and pest control services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, carpet cleaning, window cleaning, and various pest control solutions. Our services can be customized to meet your specific needs.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Our pricing is based on several factors including the size of the space, type of service required, frequency of service, and specific requirements. We provide free, no-obligation quotes after understanding your needs. Contact us for a personalized quote.",
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer:
      "Yes, we prioritize safety in all our services. We use eco-friendly, non-toxic cleaning products that are safe for families, pets, and the environment. If you have specific concerns or allergies, please let us know, and we can adjust our cleaning approach accordingly.",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 48-72 hours in advance to ensure availability, especially for larger jobs or specialized services. However, we understand that emergencies happen, and we do our best to accommodate last-minute requests when possible.",
  },
  {
    question: "Do I need to be home during the cleaning service?",
    answer:
      "It's not required, but we recommend being present for the first service. If you can't be there, you can provide access instructions and any special requirements. Many of our regular clients provide a key or access code for recurring services.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that plans change. We request at least 24 hours' notice for cancellations or rescheduling to avoid a cancellation fee. For emergency situations, please contact us as soon as possible, and we'll do our best to accommodate your needs.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqRef = useRef<HTMLDivElement>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    if (faqRef.current) {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <div className="space-y-6" ref={faqRef}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg faq-item"
        >
          <button className="flex justify-between items-center w-full p-6 text-left" onClick={() => toggleFAQ(index)}>
            <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
            <div
              className={`bg-blue-50 p-2 rounded-full transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="h-5 w-5 text-[#1e5b84]" />
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

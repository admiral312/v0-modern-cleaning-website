"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Mock data for availability
const mockAvailability = {
  "residential-cleaning": {
    "2023-06-01": ["08:00 AM - 10:00 AM", "10:00 AM - 12:00 PM"],
    "2023-06-02": ["02:00 PM - 04:00 PM", "04:00 PM - 06:00 PM"],
    "2023-06-03": ["08:00 AM - 10:00 AM", "10:00 AM - 12:00 PM", "12:00 PM - 02:00 PM"],
    "2023-06-04": [],
    "2023-06-05": ["10:00 AM - 12:00 PM", "12:00 PM - 02:00 PM", "02:00 PM - 04:00 PM"],
  },
  "commercial-cleaning": {
    "2023-06-01": ["04:00 PM - 06:00 PM"],
    "2023-06-02": ["08:00 AM - 10:00 AM", "10:00 AM - 12:00 PM"],
    "2023-06-03": [],
    "2023-06-04": ["02:00 PM - 04:00 PM", "04:00 PM - 06:00 PM"],
    "2023-06-05": ["08:00 AM - 10:00 AM", "10:00 AM - 12:00 PM"],
  },
  "pest-control": {
    "2023-06-01": ["10:00 AM - 12:00 PM", "12:00 PM - 02:00 PM"],
    "2023-06-02": [],
    "2023-06-03": ["08:00 AM - 10:00 AM", "04:00 PM - 06:00 PM"],
    "2023-06-04": ["10:00 AM - 12:00 PM", "12:00 PM - 02:00 PM"],
    "2023-06-05": ["02:00 PM - 04:00 PM"],
  },
  "deep-cleaning": {
    "2023-06-01": ["08:00 AM - 10:00 AM"],
    "2023-06-02": ["10:00 AM - 12:00 PM", "12:00 PM - 02:00 PM"],
    "2023-06-03": ["02:00 PM - 04:00 PM"],
    "2023-06-04": ["08:00 AM - 10:00 AM", "10:00 AM - 12:00 PM"],
    "2023-06-05": [],
  },
}

// Generate random availability for the next 30 days
const generateAvailability = (serviceType: string) => {
  const availability: Record<string, string[]> = {}
  const timeSlots = [
    "08:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 02:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
  ]

  const today = new Date()

  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dateString = format(date, "yyyy-MM-dd")

    // Randomly decide if this date has availability
    if (Math.random() > 0.2) {
      // Randomly select 1-4 time slots
      const numSlots = Math.floor(Math.random() * 4) + 1
      const availableSlots = [...timeSlots].sort(() => 0.5 - Math.random()).slice(0, numSlots)
      availability[dateString] = availableSlots
    } else {
      availability[dateString] = []
    }
  }

  return availability
}

export default function AvailabilityPage() {
  const [date, setDate] = useState<Date>()
  const [service, setService] = useState<string>("residential-cleaning")
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [hasChecked, setHasChecked] = useState(false)

  // Generate dynamic availability when service changes
  const [serviceAvailability, setServiceAvailability] = useState<Record<string, string[]>>(
    generateAvailability(service),
  )

  const checkAvailability = () => {
    if (!date) return

    const dateString = format(date, "yyyy-MM-dd")
    setAvailableSlots(serviceAvailability[dateString] || [])
    setHasChecked(true)
  }

  const handleServiceChange = (value: string) => {
    setService(value)
    setServiceAvailability(generateAvailability(value))
    setHasChecked(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check Availability</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find available time slots for your preferred service date
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Checker Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Service Availability</CardTitle>
                <CardDescription>Select a service type and date to check available time slots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="service-type" className="text-sm font-medium">
                        Service Type
                      </label>
                      <Select value={service} onValueChange={handleServiceChange}>
                        <SelectTrigger id="service-type">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential-cleaning">Residential Cleaning</SelectItem>
                          <SelectItem value="commercial-cleaning">Commercial Cleaning</SelectItem>
                          <SelectItem value="pest-control">Pest Control</SelectItem>
                          <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium">
                        Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                              date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <Button onClick={checkAvailability} disabled={!date} className="w-full">
                      Check Availability
                    </Button>
                  </div>

                  {hasChecked && (
                    <div className="space-y-4 border-t pt-6">
                      <h3 className="text-lg font-medium">
                        Available Time Slots for {date ? format(date, "PPP") : ""}
                      </h3>

                      {availableSlots.length > 0 ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="h-5 w-5" />
                            <span className="font-medium">Time slots available!</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {availableSlots.map((slot) => (
                              <div key={slot} className="border rounded-md p-3 flex justify-between items-center">
                                <span>{slot}</span>
                                <Button size="sm" asChild>
                                  <Link
                                    href={`/booking?date=${date ? format(date, "yyyy-MM-dd") : ""}&time=${slot}&service=${service}`}
                                  >
                                    Book
                                  </Link>
                                </Button>
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 mt-4">Click "Book" to reserve your preferred time slot</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-red-600">
                            <XCircle className="h-5 w-5" />
                            <span className="font-medium">No available time slots for this date</span>
                          </div>
                          <p className="text-sm text-gray-500">Please select a different date or service type</p>
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                            <p className="text-sm">
                              Need a specific time? Contact us directly at{" "}
                              <span className="font-medium">1300 SPARKLE</span> and we'll do our best to accommodate
                              your schedule.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500">
                  Our availability is updated in real-time. We recommend booking at least 48 hours in advance to secure
                  your preferred time slot.
                </p>
                <p className="text-gray-500">
                  For same-day or emergency services, please call us directly at 1300 SPARKLE.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Service Duration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500">Service duration varies based on the type of service and property size:</p>
                <ul className="space-y-2 text-gray-500">
                  <li>• Residential Cleaning: 2-4 hours</li>
                  <li>• Commercial Cleaning: 3-8 hours</li>
                  <li>• Pest Control: 1-3 hours</li>
                  <li>• Deep Cleaning: 4-8 hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

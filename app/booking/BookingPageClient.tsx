"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { CalendarIcon, Check, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const timeSlots = [
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
]

const formSchema = z.object({
  service: z.string({
    required_error: "Please select a service.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot.",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(8, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Please enter your full address.",
  }),
  suburb: z.string().min(2, {
    message: "Please enter your suburb.",
  }),
  postcode: z.string().min(4, {
    message: "Please enter a valid postcode.",
  }),
  notes: z.string().optional(),
})

export default function BookingPageClient() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notes: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsComplete(true)
    }, 1500)
  }

  const nextStep = () => {
    if (step === 1) {
      form.trigger(["service", "date", "timeSlot"]).then((isValid) => {
        if (isValid) setStep(2)
      })
    } else if (step === 2) {
      form.handleSubmit(onSubmit)()
    }
  }

  const prevStep = () => {
    setStep(1)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Book a Service</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule your cleaning or pest control service in just a few simple steps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {!isComplete ? (
              <>
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                      >
                        1
                      </div>
                      <div className={`w-20 h-1 ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                      >
                        2
                      </div>
                      <div className={`w-20 h-1 ${step >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                      >
                        3
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div className="text-center w-32">Service Details</div>
                    <div className="text-center w-32">Contact Info</div>
                    <div className="text-center w-32">Confirmation</div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>{step === 1 ? "Service Details" : "Contact Information"}</CardTitle>
                    <CardDescription>
                      {step === 1
                        ? "Select your service, date, and preferred time slot"
                        : "Provide your contact and address details"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form className="space-y-6">
                        {step === 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <FormField
                              control={form.control}
                              name="service"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Service Type</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="residential-cleaning">Residential Cleaning</SelectItem>
                                      <SelectItem value="commercial-cleaning">Commercial Cleaning</SelectItem>
                                      <SelectItem value="pest-control">Pest Control</SelectItem>
                                      <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                                      <SelectItem value="move-out-cleaning">Move-out Cleaning</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormDescription>Select the type of service you need</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel>Service Date</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-full pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground",
                                          )}
                                        >
                                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                          date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                                        }
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                  <FormDescription>Select your preferred service date</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="timeSlot"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Preferred Time</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a time slot" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {timeSlots.map((slot) => (
                                        <SelectItem key={slot} value={slot}>
                                          {slot}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormDescription>Choose your preferred time slot</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input placeholder="john.doe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                      <Input placeholder="0412 345 678" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="123 Main Street" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="suburb"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Suburb</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Sydney" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="postcode"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Postcode</FormLabel>
                                    <FormControl>
                                      <Input placeholder="2000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="notes"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Special Instructions (Optional)</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Any special requirements or instructions for our team"
                                      className="resize-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </motion.div>
                        )}
                      </form>
                    </Form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {step === 2 && (
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                    )}
                    {step === 1 && (
                      <Button variant="outline" onClick={prevStep} className="invisible">
                        Back
                      </Button>
                    )}
                    <Button onClick={nextStep} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></div>
                          Processing...
                        </div>
                      ) : step === 1 ? (
                        "Next"
                      ) : (
                        "Book Now"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
                    <CardDescription>Thank you for booking with Harbour Sparkle</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-lg font-medium">Booking Details</p>
                        <div className="flex items-center justify-center gap-2 text-gray-500">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{form.getValues("date") ? format(form.getValues("date"), "PPP") : ""}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{form.getValues("timeSlot")}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {form.getValues("address")}, {form.getValues("suburb")}, {form.getValues("postcode")}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500">
                          We've sent a confirmation email to{" "}
                          <span className="font-medium">{form.getValues("email")}</span> with all the details.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-4">
                    <Button variant="outline" asChild>
                      <a href="/">Return Home</a>
                    </Button>
                    <Button asChild>
                      <a href="/availability">Check Other Availability</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our booking process
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How far in advance should I book?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We recommend booking at least 48 hours in advance to ensure availability, especially for larger jobs.
                  For urgent services, please call us directly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What if I need to reschedule?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  You can reschedule your appointment up to 24 hours before the scheduled service without any fees.
                  Please contact our customer service team to make changes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long will the service take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Service duration depends on the type of service and the size of your property. Standard residential
                  cleaning typically takes 2-4 hours, while deep cleaning may take longer.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do I need to be home during the service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  It's not required, but we recommend being present for the first service. If you can't be there, please
                  make arrangements for access and leave any special instructions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

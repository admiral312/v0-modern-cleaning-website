"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StaffLoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect would happen here in a real implementation
    }, 1500)
  }

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loll.jpg-I1dOARvPiHkuFUkIkmxQN40lNmu5YE.jpeg"
            alt="Harbour Sparkle"
            width={180}
            height={60}
            className="h-auto"
          />
        </div>

        <Card className="border-0 shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Staff Login</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your credentials to access the staff portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="staff@harboursparkle.com.au"
                  required
                  className="h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-sm text-[#1e5b84] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e5b84]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1e5b84] hover:bg-[#164569] rounded-md text-base h-12"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign in
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="text-sm text-center text-gray-500 w-full">
              This portal is for authorized staff only. If you're a customer, please visit our{" "}
              <Link href="/contact" className="text-[#1e5b84] hover:underline">
                contact page
              </Link>{" "}
              for assistance.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

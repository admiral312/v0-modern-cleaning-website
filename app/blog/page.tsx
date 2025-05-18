import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Blog | Harbour Sparkle",
  description: "Cleaning tips, pest control advice, and home maintenance guides from the experts at Harbour Sparkle.",
}

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Spotless Kitchen",
    excerpt:
      "Learn the professional secrets to keeping your kitchen sparkling clean with minimal effort. These tips will transform your cleaning routine.",
    category: "Cleaning Tips",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "spotless-kitchen",
  },
  {
    id: 2,
    title: "Natural Pest Control Methods",
    excerpt:
      "Discover eco-friendly ways to keep pests at bay without harsh chemicals. Safe for families, pets, and the environment.",
    category: "Pest Control",
    date: "April 28, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "natural-pest-control",
  },
  {
    id: 3,
    title: "Deep Cleaning Checklist",
    excerpt:
      "The ultimate room-by-room deep cleaning checklist to ensure no corner is left untouched. Perfect for seasonal cleaning or moving.",
    category: "Cleaning Tips",
    date: "April 10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "deep-cleaning-checklist",
  },
  {
    id: 4,
    title: "How to Remove Common Stains",
    excerpt:
      "A comprehensive guide to removing the most stubborn stains from carpets, upholstery, and clothing using household items.",
    category: "Cleaning Tips",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "remove-common-stains",
  },
  {
    id: 5,
    title: "Signs of a Termite Infestation",
    excerpt:
      "Learn how to identify the early warning signs of termites and what to do if you suspect an infestation in your home.",
    category: "Pest Control",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "termite-infestation-signs",
  },
  {
    id: 6,
    title: "Eco-Friendly Cleaning Products",
    excerpt:
      "Discover the best environmentally friendly cleaning products that are effective and safe for your family and the planet.",
    category: "Eco-Friendly",
    date: "February 28, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "eco-friendly-cleaning-products",
  },
  {
    id: 7,
    title: "Commercial Cleaning Checklist",
    excerpt: "Essential cleaning tasks for maintaining a professional, healthy, and productive workplace environment.",
    category: "Commercial",
    date: "February 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "commercial-cleaning-checklist",
  },
  {
    id: 8,
    title: "Preparing Your Home for Professional Cleaning",
    excerpt:
      "Simple steps to take before your cleaning service arrives to ensure you get the most value from your professional cleaning.",
    category: "Cleaning Tips",
    date: "January 30, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "preparing-for-professional-cleaning",
  },
  {
    id: 9,
    title: "Seasonal Pest Prevention Guide",
    excerpt:
      "Stay ahead of seasonal pest problems with this comprehensive guide to preventing infestations throughout the year.",
    category: "Pest Control",
    date: "January 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "seasonal-pest-prevention",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cleaning & Pest Control Blog</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert tips, guides, and advice for a cleaner, healthier home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-8">
                <Tabs defaultValue="all">
                  <TabsList className="mb-6">
                    <TabsTrigger value="all">All Posts</TabsTrigger>
                    <TabsTrigger value="cleaning">Cleaning Tips</TabsTrigger>
                    <TabsTrigger value="pest">Pest Control</TabsTrigger>
                    <TabsTrigger value="eco">Eco-Friendly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="cleaning">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPosts
                        .filter((post) => post.category === "Cleaning Tips")
                        .map((post) => (
                          <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="pest">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPosts
                        .filter((post) => post.category === "Pest Control")
                        .map((post) => (
                          <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="eco">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPosts
                        .filter((post) => post.category === "Eco-Friendly")
                        .map((post) => (
                          <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-80 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="flex gap-2">
                    <Input placeholder="Search articles..." className="flex-1" />
                    <Button type="submit">Search</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Cleaning Tips (4)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Pest Control (3)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Eco-Friendly (1)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Commercial (1)
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={80}
                        height={60}
                        className="rounded-md object-cover w-20 h-16"
                      />
                      <div>
                        <h4 className="font-medium line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscribe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      Get the latest cleaning tips and exclusive offers delivered to your inbox.
                    </p>
                    <form className="space-y-2">
                      <Input placeholder="Your email address" type="email" />
                      <Button className="w-full">Subscribe</Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">{post.category}</div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="text-xs">{post.date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-500 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock blog post data
const blogPost = {
  title: "10 Tips for a Spotless Kitchen",
  excerpt:
    "Learn the professional secrets to keeping your kitchen sparkling clean with minimal effort. These tips will transform your cleaning routine.",
  content: `
    <p>A clean kitchen is the heart of a healthy home. Not only does it make cooking more enjoyable, but it also prevents the spread of germs and bacteria. Here are our top 10 professional tips for maintaining a spotless kitchen with minimal effort.</p>
    
    <h2>1. Clean as You Go</h2>
    <p>The most effective way to keep your kitchen clean is to tidy up as you cook. Wipe spills immediately, wash utensils after use, and put ingredients away once you're done with them. This prevents messes from building up and makes the final cleanup much easier.</p>
    
    <h2>2. Develop a Daily Cleaning Routine</h2>
    <p>Spend just 10 minutes each evening wiping down countertops, sweeping the floor, and washing dishes. This daily maintenance prevents dirt and grime from accumulating and makes deep cleaning sessions much quicker.</p>
    
    <h2>3. Use the Right Cleaning Products</h2>
    <p>Different surfaces require different cleaning solutions. Use a degreaser for stovetops and range hoods, a non-abrasive cleaner for countertops, and a disinfectant for cutting boards and sink areas. Using the appropriate products ensures effective cleaning without damaging surfaces.</p>
    
    <h2>4. Don't Forget Hidden Areas</h2>
    <p>Pay attention to often-overlooked spots like the inside of the microwave, the refrigerator door seals, and the area under appliances. These hidden areas can harbor food particles and bacteria if not cleaned regularly.</p>
    
    <h2>5. Descale Regularly</h2>
    <p>Limescale can build up on faucets, sinks, and appliances like kettles and coffee makers. Use a vinegar solution or a commercial descaler to remove these deposits and keep everything looking shiny and new.</p>
    
    <h2>6. Organize Your Pantry</h2>
    <p>A well-organized pantry makes cleaning easier and helps prevent pest infestations. Store dry goods in airtight containers, label everything clearly, and arrange items by category. Regularly check for expired products and wipe down shelves.</p>
    
    <h2>7. Maintain Your Appliances</h2>
    <p>Regular maintenance of your appliances not only keeps them clean but also extends their lifespan. Clean refrigerator coils, empty the crumb tray in your toaster, and run cleaning cycles on your dishwasher and oven according to the manufacturer's instructions.</p>
    
    <h2>8. Use Natural Cleaning Solutions</h2>
    <p>Many effective kitchen cleaners can be made from ingredients you already have at home. Vinegar, baking soda, and lemon juice can tackle most cleaning tasks while being environmentally friendly and safe for food preparation areas.</p>
    
    <h2>9. Invest in Quality Cleaning Tools</h2>
    <p>Good quality microfiber cloths, a sturdy scrub brush, and a reliable mop can make cleaning more efficient. Invest in tools that are comfortable to use and designed for specific cleaning tasks.</p>
    
    <h2>10. Schedule Deep Cleaning Sessions</h2>
    <p>Even with regular maintenance, your kitchen will benefit from occasional deep cleaning. Schedule a thorough clean every few months to tackle areas like the inside of the oven, behind appliances, and inside cabinets.</p>
    
    <p>By incorporating these professional tips into your cleaning routine, you'll maintain a spotless kitchen with minimal effort. Remember, consistency is key – small daily actions lead to a consistently clean and hygienic cooking space.</p>
    
    <p>For those times when you need extra help or a professional deep clean, Harbour Sparkle's kitchen cleaning services are just a call away. Our trained professionals use eco-friendly products and proven techniques to leave your kitchen gleaming.</p>
  `,
  author: "Emily Johnson",
  authorRole: "Head of Cleaning Operations",
  authorImage: "/placeholder.svg?height=100&width=100",
  date: "May 15, 2023",
  readTime: "8 min read",
  category: "Cleaning Tips",
  tags: ["Kitchen Cleaning", "Cleaning Tips", "Home Maintenance"],
  image: "/placeholder.svg?height=600&width=1200",
  relatedPosts: [
    {
      title: "Natural Pest Control Methods",
      excerpt: "Discover eco-friendly ways to keep pests at bay without harsh chemicals.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "natural-pest-control",
    },
    {
      title: "Deep Cleaning Checklist",
      excerpt: "The ultimate room-by-room deep cleaning checklist to ensure no corner is left untouched.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "deep-cleaning-checklist",
    },
    {
      title: "How to Remove Common Stains",
      excerpt: "A comprehensive guide to removing the most stubborn stains from carpets and upholstery.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "remove-common-stains",
    },
  ],
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-36 md:pb-12 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-[#1e5b84] hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-50 text-[#1e5b84] text-sm font-medium px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{blogPost.readTime}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="text-sm">By {blogPost.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-gray-500" />
                  {blogPost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors duration-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <div className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={blogPost.authorImage || "/placeholder.svg"}
                      alt={blogPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{blogPost.author}</h3>
                    <p className="text-[#1e5b84] text-sm mb-2">{blogPost.authorRole}</p>
                    <p className="text-gray-600 text-sm">
                      Emily has over 15 years of experience in the cleaning industry and leads our team of professional
                      cleaners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {blogPost.relatedPosts.map((post) => (
                    <Card key={post.slug} className="border-0 shadow-sm overflow-hidden">
                      <CardContent className="p-0">
                        <Link href={`/blog/${post.slug}`} className="block">
                          <div className="relative h-32 w-full">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-gray-900 mb-1 line-clamp-1">{post.title}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 bg-[#1e5b84] text-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">Need Professional Help?</h3>
                  <p className="mb-4 text-sm">
                    Our expert team is ready to assist with all your cleaning and pest control needs.
                  </p>
                  <Button className="w-full bg-white text-[#1e5b84] hover:bg-gray-100" asChild>
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">More Articles You Might Like</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of cleaning and pest control tips and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPost.relatedPosts.map((post) => (
              <Card key={post.slug} className="border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-[#1e5b84] font-medium">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#1e5b84] text-[#1e5b84]" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

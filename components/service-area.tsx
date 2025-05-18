"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const serviceAreas = {
  Sydney: [
    "Sydney CBD",
    "North Sydney",
    "Eastern Suburbs",
    "Inner West",
    "Northern Beaches",
    "North Shore",
    "Western Sydney",
    "South Sydney",
    "Sutherland Shire",
  ],
  Melbourne: [
    "Melbourne CBD",
    "Inner Suburbs",
    "Eastern Suburbs",
    "Western Suburbs",
    "Northern Suburbs",
    "Southern Suburbs",
    "Bayside",
    "Mornington Peninsula",
  ],
  Brisbane: [
    "Brisbane CBD",
    "Inner Suburbs",
    "Northern Suburbs",
    "Southern Suburbs",
    "Eastern Suburbs",
    "Western Suburbs",
    "Ipswich",
    "Logan",
  ],
  Perth: [
    "Perth CBD",
    "Inner Suburbs",
    "Northern Suburbs",
    "Southern Suburbs",
    "Eastern Suburbs",
    "Western Suburbs",
    "Fremantle",
    "Joondalup",
  ],
}

export default function ServiceArea() {
  const [activeTab, setActiveTab] = useState("Sydney")

  return (
    <Tabs defaultValue="Sydney" onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-gray-100 p-1 rounded-lg">
          {Object.keys(serviceAreas).map((city) => (
            <TabsTrigger
              key={city}
              value={city}
              className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-[#1e5b84] data-[state=active]:shadow-sm"
            >
              {city}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {Object.entries(serviceAreas).map(([city, areas]) => (
        <TabsContent key={city} value={city}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#1e5b84] flex-shrink-0" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

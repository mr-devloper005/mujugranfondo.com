'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ClassifiedQuickFinder() {
  const router = useRouter()
  const [keywords, setKeywords] = useState('')
  const [location, setLocation] = useState('')

  const go = () => {
    const q = [keywords, location].filter(Boolean).join(' ').trim()
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`)
    else router.push('/classifieds')
  }

  return (
    <div className="rounded-lg border border-[#e5e7eb] bg-white p-6 shadow-[0_12px_40px_rgba(10,29,55,0.08)]">
      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#f3f4f6] p-1">
          <TabsTrigger value="browse" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-[#0A1D37]">
            Browse ads
          </TabsTrigger>
          <TabsTrigger value="near" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-[#0A1D37]">
            Near you
          </TabsTrigger>
        </TabsList>
        <TabsContent value="browse" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Keywords (e.g. bike, apartment, job)"
              className="h-11 border-[#e5e7eb] bg-white"
            />
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or region (optional)"
              className="h-11 border-[#e5e7eb] bg-white"
            />
          </div>
          <Button type="button" onClick={go} className="h-11 w-full rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b] md:w-auto md:px-10">
            <Search className="mr-2 h-4 w-4" />
            Search classifieds
          </Button>
        </TabsContent>
        <TabsContent value="near" className="mt-6 space-y-4">
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your city or postal area"
            className="h-11 border-[#e5e7eb] bg-white"
          />
          <Button type="button" onClick={go} className="h-11 rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
            Show nearby listings
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}

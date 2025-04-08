"use client";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Mic, Book, Music, User } from "lucide-react";

// Guest artists data
const artists = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Gospel Singer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    description: "Award-winning gospel singer with 3 platinum albums and a voice that touches hearts.",
    achievements: ["Grammy Award Winner", "3 Platinum Albums", "Global Tour"],
    socialMedia: { twitter: "#", instagram: "#" }
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Worship Leader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    description: "Leading worship for over 15 years, Marcus brings a powerful anointing to every service.",
    achievements: ["Author of 'Worship Redefined'", "20+ Original Songs", "Ministry in 30+ Countries"],
    socialMedia: { twitter: "#", instagram: "#" }
  },
  {
    id: 3,
    name: "The Grace Choir",
    role: "Gospel Choir",
    image: "https://images.unsplash.com/photo-1523132797263-747d5d0dbbb3?auto=format&fit=crop&q=80",
    description: "A 40-voice choir that has inspired audiences around the world with their harmonies.",
    achievements: ["International Gospel Music Award", "Featured on 'Worship Today'", "5 Studio Albums"],
    socialMedia: { twitter: "#", instagram: "#" }
  },
  {
    id: 4,
    name: "David Peterson",
    role: "Contemporary Christian Artist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    description: "Blending modern sounds with traditional gospel, David brings a fresh perspective to Christian music.",
    achievements: ["Rising Star Award", "2 Gold Records", "3 Million Streams"],
    socialMedia: { twitter: "#", instagram: "#" }
  }
];

// Ministers data
const ministers = [
  {
    id: 1,
    name: "Pastor Thomas Anderson",
    role: "Senior Pastor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    description: "Founder of Grace Community Church with over 30 years of ministry experience.",
    achievements: ["Doctorate in Divinity", "Author of 12 Books", "Conference Speaker"],
    socialMedia: { twitter: "#", instagram: "#" }
  },
  {
    id: 2,
    name: "Reverend Michelle Clarke",
    role: "Teaching Pastor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    description: "Known for her insightful Bible teaching and passionate delivery of God's word.",
    achievements: ["Seminary Professor", "Bible Commentary Author", "Radio Host"],
    socialMedia: { twitter: "#", instagram: "#" }
  },
  {
    id: 3,
    name: "Bishop James Wilson",
    role: "Guest Speaker",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    description: "International speaker and ministry leader with a heart for revival and spiritual awakening.",
    achievements: ["Oversees 50+ Churches", "Humanitarian Award", "30+ Years in Ministry"],
    socialMedia: { twitter: "#", instagram: "#" }
  },
  {
    id: 4,
    name: "Dr. Rebecca Foster",
    role: "Worship Pastor",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    description: "Combines theological depth with musical excellence to create powerful worship experiences.",
    achievements: ["PhD in Worship Studies", "20+ Worship Albums", "Author of 'The Heart of Worship'"],
    socialMedia: { twitter: "#", instagram: "#" }
  }
];

export function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Featured Speakers
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for an unforgettable experience with these anointed
            ministers and artists who will lead us in worship, teaching, and
            celebration.
          </p>
        </div>

        <Tabs defaultValue="ministers" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="ministers" className="text-lg py-3">
              <Book className="mr-2 h-4 w-4" /> Pastors & Ministers
            </TabsTrigger>
            <TabsTrigger value="artists" className="text-lg py-3">
              <Music className="mr-2 h-4 w-4" /> Guest Artists
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ministers" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ministers.map((minister) => (
                <Card
                  key={minister.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={minister.image}
                      alt={minister.name}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 p-4 z-20">
                      <p className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {minister.role}
                      </p>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle>{minister.name}</CardTitle>
                    <CardDescription>
                      {minister.achievements[0]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600 text-sm">
                      {minister.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 border-t flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 rounded-full p-0"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 rounded-full p-0"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <User className="mr-2 h-4 w-4" /> Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artists" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artists.map((artist) => (
                <Card
                  key={artist.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 p-4 z-20">
                      <p className="inline-block px-3 py-1 bg-pink-600 text-white text-xs font-semibold rounded-full">
                        {artist.role}
                      </p>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle>{artist.name}</CardTitle>
                    <CardDescription>{artist.achievements[0]}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600 text-sm">
                      {artist.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 border-t flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 rounded-full p-0"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 rounded-full p-0"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <Mic className="mr-2 h-4 w-4" /> Music
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            View All Speakers
          </Button>
        </div>
      </div>
    </section>
  );
}

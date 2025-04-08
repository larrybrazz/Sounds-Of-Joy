"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, Star, MapPin, ExternalLink } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    stars: 5,
    distance: "0.3 miles from venue",
    description: "Luxury hotel with spa facilities, fine dining restaurant, and exclusive amenities.",
    price: "$250+",
    bookingUrl: "#",
  },
  {
    id: 2,
    name: "City View Inn",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80",
    stars: 4,
    distance: "0.5 miles from venue",
    description: "Modern hotel with city views, comfortable rooms, and complimentary breakfast.",
    price: "$180+",
    bookingUrl: "#",
  },
  {
    id: 3,
    name: "Executive Suites",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
    stars: 4,
    distance: "0.7 miles from venue",
    description: "All-suite hotel with kitchen facilities, living rooms, and business center.",
    price: "$200+",
    bookingUrl: "#",
  },
  {
    id: 4,
    name: "Comfort Inn & Suites",
    image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?auto=format&fit=crop&q=80",
    stars: 3,
    distance: "1.2 miles from venue",
    description: "Comfortable accommodations with free shuttle service and event transportation.",
    price: "$140+",
    bookingUrl: "#",
  },
];

export function Hotel() {
  return (
    <section id="hotel" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Hotel Accommodations</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've partnered with these hotels to provide special rates for event attendees.
            Book your stay at one of our recommended options near the venue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{hotel.name}</CardTitle>
                  <div className="flex">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardDescription className="flex items-center text-sm">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {hotel.distance}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 text-sm">{hotel.description}</p>
                <div className="mt-3 bg-primary/10 px-2 py-1 rounded inline-block">
                  <span className="text-primary font-medium">{hotel.price}</span>
                  <span className="text-gray-500 text-xs ml-1">per night</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-end">
                <Button asChild className="w-full">
                  <a href={hotel.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Bed className="mr-2 h-4 w-4" /> Book Now <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Hotel Booking Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-primary/20 rounded-full p-2 mr-3 flex-shrink-0">
                <div className="bg-primary rounded-full w-2 h-2"></div>
              </div>
              <div className="text-gray-700">
                <span className="font-medium">Special Event Rates</span>
                <p className="text-sm mt-1">
                  All partner hotels offer exclusive discounts for event attendees with promo code "EVENT2025".
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/20 rounded-full p-2 mr-3 flex-shrink-0">
                <div className="bg-primary rounded-full w-2 h-2"></div>
              </div>
              <div className="text-gray-700">
                <span className="font-medium">Complimentary Shuttle</span>
                <p className="text-sm mt-1">
                  Free transportation service between partner hotels and the event venue on June 19th.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/20 rounded-full p-2 mr-3 flex-shrink-0">
                <div className="bg-primary rounded-full w-2 h-2"></div>
              </div>
              <div className="text-gray-700">
                <span className="font-medium">Extended Stay Options</span>
                <p className="text-sm mt-1">
                  Discounted rates available for attendees wishing to extend their stay before or after the event.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/20 rounded-full p-2 mr-3 flex-shrink-0">
                <div className="bg-primary rounded-full w-2 h-2"></div>
              </div>
              <div className="text-gray-700">
                <span className="font-medium">Priority Booking</span>
                <p className="text-sm mt-1">
                  Reserve your room early to guarantee availability during the event period.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              Need assistance with booking? Contact our event concierge at{" "}
              <a href="mailto:concierge@event2025.com" className="text-primary hover:underline">
                concierge@event2025.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

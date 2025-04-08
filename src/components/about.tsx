"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About The Event</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for an exclusive gathering of industry leaders, innovators, and change-makers.
            Our 2025 event promises to be a transformative experience with exceptional networking,
            insights, and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-none">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">When</h3>
              <p className="text-gray-600">June 19, 2025</p>
              <p className="text-gray-600">7:00 PM - 10:00 PM</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-none">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Where</h3>
              <p className="text-gray-600">Grand Convention Center</p>
              <p className="text-gray-600">123 Event Avenue, City</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-none">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Attendees</h3>
              <p className="text-gray-600">Industry Leaders</p>
              <p className="text-gray-600">Professionals & Innovators</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-none">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Highlights</h3>
              <p className="text-gray-600">Keynote Speakers</p>
              <p className="text-gray-600">Networking & Awards</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">Inspiring keynote presentations from industry leaders</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">Interactive panel discussions on cutting-edge topics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">Exclusive networking opportunities with industry peers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">Gourmet dining experience with premium refreshments</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary rounded-full w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">Special recognition awards for outstanding achievements</span>
                </li>
              </ul>
            </div>
            <div className="h-full">
              <div className="aspect-video bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white p-8 h-full">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-3">Don't Miss Out!</h4>
                  <p className="mb-4">Limited spots available for this exclusive event. Register today to secure your place.</p>
                  <div className="inline-block bg-white text-purple-600 font-bold py-2 px-6 rounded-full">
                    Register Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

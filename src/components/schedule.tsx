"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Coffee, Mic, Users, Award } from "lucide-react";

export function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Event Schedule</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your evening with our carefully crafted schedule of keynotes,
            networking sessions, and special presentations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-gray-900">Arrival & Check-in</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 py-1 px-3 rounded-full">
                    7:00 PM - 7:30 PM
                  </span>
                </div>
                <p className="text-gray-600">
                  Welcome reception with light refreshments and QR code check-in. Meet and greet with fellow attendees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-gray-900">Opening Keynote</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 py-1 px-3 rounded-full">
                    7:30 PM - 8:15 PM
                  </span>
                </div>
                <p className="text-gray-600">
                  Main keynote address from our distinguished guest speaker on "The Future of Innovation".
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-gray-900">Refreshment Break</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 py-1 px-3 rounded-full">
                    8:15 PM - 8:30 PM
                  </span>
                </div>
                <p className="text-gray-600">
                  Enjoy premium refreshments and networking with industry peers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-gray-900">Panel Discussion</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 py-1 px-3 rounded-full">
                    8:30 PM - 9:15 PM
                  </span>
                </div>
                <p className="text-gray-600">
                  Interactive panel discussion on "Industry Trends & Opportunities" with Q&A session.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-gray-900">Awards & Closing</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 py-1 px-3 rounded-full">
                    9:15 PM - 10:00 PM
                  </span>
                </div>
                <p className="text-gray-600">
                  Recognition of industry achievements, closing remarks, and final networking opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <h4 className="font-semibold text-lg">Important Schedule Notes</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>All times are in local time zone (EST)</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>Schedule subject to minor adjustments</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>Doors open at 6:30 PM for early check-in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

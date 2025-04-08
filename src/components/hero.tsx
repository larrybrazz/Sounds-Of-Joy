"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";

export function Hero() {
  const eventDate = new Date("2025-06-19T19:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      if (eventDate > now) {
        const days = differenceInDays(eventDate, now);
        const hours = differenceInHours(eventDate, now) % 24;
        const minutes = differenceInMinutes(eventDate, now) % 60;
        const seconds = differenceInSeconds(eventDate, now) % 60;

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-pink-500 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center py-20 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <h2 className="text-white font-medium">A Divine Gathering of Worship and Celebration</h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
              Exclusive Event 2025
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join us for an unforgettable spiritual experience with renowned pastors and artists
          </p>

          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-12 text-white/80">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-pink-300" />
              <span>June 19th, 2025</span>
            </div>
            <div className="hidden md:block h-4 w-0.5 bg-white/30 mx-2"></div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-pink-300" />
              <span>7:00 PM - 10:00 PM</span>
            </div>
            <div className="hidden md:block h-4 w-0.5 bg-white/30 mx-2"></div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-pink-300" />
              <span>Grand Convention Center</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold">{timeLeft.days}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Days</span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold">{timeLeft.hours}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Hours</span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold">{timeLeft.minutes}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Minutes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold">{timeLeft.seconds}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Seconds</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-white/90" size="lg">
              Register Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

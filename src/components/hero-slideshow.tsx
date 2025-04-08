"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { ArrowRight, Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const slideImages = [
  "/images/concert1.jpg",
  "/images/concert2.jpg",
  "/images/concert3.jpg",
  "/images/concert4.jpg",
  "/images/concert5.jpg"
];

export function HeroSlideshow() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Countdown state
  const eventDate = new Date("2025-06-19T19:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Handle slideshow navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  }, []);

  // Autoplay slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [isAutoPlaying, nextSlide]);

  // Pause autoplay when user interacts
  const pauseAutoplay = () => {
    setIsAutoPlaying(false);
    // Resume autoplay after 30 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 30000);
  };

  // Countdown timer
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src={src}
              alt={`Concert slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slide navigation buttons */}
      <button
        className="absolute left-4 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        onClick={() => {
          pauseAutoplay();
          prevSlide();
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        onClick={() => {
          pauseAutoplay();
          nextSlide();
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              pauseAutoplay();
              setCurrentSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 z-20 text-center py-20 mt-16 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <h2 className="text-white font-medium">A Divine Gathering of Worship and Celebration</h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Exclusive Event <span className="text-primary">2025</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join us for an unforgettable spiritual experience with renowned pastors and artists
          </p>

          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-12 text-white/80">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              <span>June 19th, 2025</span>
            </div>
            <div className="hidden md:block h-4 w-0.5 bg-white/30 mx-2"></div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              <span>7:00 PM - 10:00 PM</span>
            </div>
            <div className="hidden md:block h-4 w-0.5 bg-white/30 mx-2"></div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              <span>Grand Convention Center</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            <div className="bg-black/30 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.days}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Days</span>
            </div>
            <div className="bg-black/30 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.hours}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Hours</span>
            </div>
            <div className="bg-black/30 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.minutes}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Minutes</span>
            </div>
            <div className="bg-black/30 backdrop-blur-lg rounded-lg p-4 w-16 md:w-24 flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.seconds}</span>
              <span className="text-xs md:text-sm mt-1 text-white/80">Seconds</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90" size="lg">
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

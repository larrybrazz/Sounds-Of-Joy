"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    alt: "Conference keynote speaker",
    title: "Keynote Address",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    alt: "Networking event",
    title: "Networking Session",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80",
    alt: "Award ceremony",
    title: "Awards Ceremony",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
    alt: "Panel discussion",
    title: "Expert Panel",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    alt: "Conference venue",
    title: "Event Venue",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
    alt: "Conference reception",
    title: "Welcome Reception",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80",
    alt: "Conference workshop",
    title: "Interactive Workshop",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    alt: "Conference audience",
    title: "Engaged Audience",
  },
];

export function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Event Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore highlights from our past events. Get a glimpse of what to expect
            at our upcoming gathering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none">
            <div className="relative">
              <img
                src={galleryImages[activeImageIndex].url}
                alt={galleryImages[activeImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 border-none text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 border-none text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <h3 className="font-semibold text-lg">{galleryImages[activeImageIndex].title}</h3>
                <p className="text-white/80">{galleryImages[activeImageIndex].alt}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

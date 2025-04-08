"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Heart } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/80 backdrop-blur-md shadow-md py-2"
      : "bg-transparent py-4"
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-primary">
          Sounds Of Joy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#schedule" className="text-foreground/80 hover:text-primary transition-colors">
            Schedule
          </Link>
          <Link href="/#speakers" className="text-foreground/80 hover:text-primary transition-colors">
            Speakers
          </Link>
          <Link href="/#gallery" className="text-foreground/80 hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/#hotel" className="text-foreground/80 hover:text-primary transition-colors">
            Hotel
          </Link>
          <Button variant="outline" size="sm" className="ml-2">
            Register
          </Button>
          <Button size="sm" className="ml-2 bg-red-600 hover:bg-red-700">
            <Heart className="mr-2 h-4 w-4" /> Donate
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="default"
            size="sm"
            className="mr-4 bg-red-600 hover:bg-red-700"
          >
            <Heart className="mr-2 h-4 w-4" /> Donate
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="block md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/#about"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/#schedule"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Schedule
            </Link>
            <Link
              href="/#speakers"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Speakers
            </Link>
            <Link
              href="/#gallery"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/#hotel"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Hotel
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

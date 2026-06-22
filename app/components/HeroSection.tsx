'use client';

import Link from "next/link";
import { Droplets, Search, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blood-600 to-blood-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Donate Blood,<br />
            <span className="text-blood-200">Save a Life</span>
          </h1>

          <p className="text-lg md:text-xl text-blood-100 mb-10 leading-relaxed">
            Connect with blood donors in your area or request blood when you need it most. 
            Every donation can save up to three lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donors"
              className="inline-flex items-center justify-center gap-2 bg-white text-blood-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Search className="h-5 w-5" />
              Find Donors
            </Link>

            <Link
              href="/request"
              className="inline-flex items-center justify-center gap-2 bg-blood-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blood-800 transition-colors border border-blood-500"
            >
              <Droplets className="h-5 w-5" />
              Request Blood
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blood-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>50+ Donation Centers</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              <span>10,000+ Donors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">A+</span>
              <span>All Blood Types</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
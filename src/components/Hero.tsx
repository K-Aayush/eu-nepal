"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-green-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40 40-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Event Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
            <span className="text-yellow-300 mr-2">★</span>
            EU-Nepal Business Forum 2025
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Investing in Nepal
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 font-light">
              Where innovation and sustainability link the Himalayas to Europe
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">November 20-21, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">Energy & IT Focus</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                150+
              </div>
              <div className="text-blue-200">Expected Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">2</div>
              <div className="text-blue-200">Focus Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                1.5
              </div>
              <div className="text-blue-200">Days of Networking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, MapPin, Clock } from "lucide-react";

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    position: "",
    country: "",
    sector: "",
    phone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Registration submitted:", formData);
    alert(
      "Registration submitted successfully! You will receive a confirmation email shortly."
    );
  };

  const registrationPerks = [
    "Free participation in all forum sessions",
    "Access to B2B and B2G meeting platforms",
    "Networking lunch and dinner included",
    "Digital access to presentations and materials",
    "Certificate of participation",
    "Post-event follow-up and partnership support",
  ];

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Register for the Forum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot at the EU-Nepal Business Forum 2025. Registration
            is free but limited to ensure quality networking and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-2xl">Registration Form</CardTitle>
                <p className="text-blue-100">
                  Please fill in all required fields
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Organization *
                      </label>
                      <Input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Position/Title *
                      </label>
                      <Input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Country</option>
                        <option value="nepal">Nepal</option>
                        <option value="germany">Germany</option>
                        <option value="france">France</option>
                        <option value="italy">Italy</option>
                        <option value="spain">Spain</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="belgium">Belgium</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="sector"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Primary Interest Sector *
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Sector</option>
                        <option value="energy">Energy & Renewable</option>
                        <option value="it">Information Technology</option>
                        <option value="both">Both Sectors</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                  >
                    Submit Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Registration Info */}
          <div className="space-y-8">
            {/* Event Details */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">November 20-21, 2025</p>
                    <p className="text-sm text-gray-600">Thursday - Friday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Kathmandu, Nepal</p>
                    <p className="text-sm text-gray-600">Venue TBA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">150+ Expected</p>
                    <p className="text-sm text-gray-600">
                      International Participants
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">1.5 Days</p>
                    <p className="text-sm text-gray-600">Intensive Program</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Benefits */}
            <Card className="shadow-lg">
              <CardHeader className="bg-yellow-500 text-white">
                <CardTitle>What`s Included</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {registrationPerks.map((perk, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{perk}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="shadow-lg border-yellow-200 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Registration is free but space is limited. Priority will be
                  given to:
                </p>
                <div className="space-y-1">
                  <Badge variant="outline" className="mr-2">
                    EU Business Representatives
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Nepali Industry Leaders
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Government Officials
                  </Badge>
                  <Badge variant="outline">Sector Experts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

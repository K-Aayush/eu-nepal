"use client";

import {
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    quickLinks: [
      { name: "About the Forum", href: "#about" },
      { name: "Agenda", href: "#agenda" },
      { name: "Speakers", href: "#speakers" },
      { name: "Registration", href: "#register" },
      { name: "Contact", href: "#contact" },
    ],
    sectors: [
      { name: "Energy & Renewable", href: "#sectors" },
      { name: "Information Technology", href: "#sectors" },
      { name: "Investment Opportunities", href: "#objectives" },
      { name: "Partnership Building", href: "#objectives" },
    ],
    resources: [
      { name: "Forum Concept Note", href: "#" },
      { name: "Investment Guide", href: "#" },
      { name: "Speaker Guidelines", href: "#" },
      { name: "Media Kit", href: "#" },
      { name: "Past Events", href: "#" },
    ],
    partners: [
      { name: "EU Delegation to Nepal", href: "#" },
      { name: "Ministry of Industry, Commerce & Supplies", href: "#" },
      { name: "Investment Board Nepal", href: "#" },
      { name: "European Economic Chamber", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">EU</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">NP</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl">EU-Nepal Business Forum</h3>
                <p className="text-gray-400 text-sm">2025</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Strengthening economic partnership between Europe and Nepal
              through sustainable investment, innovation, and collaborative
              growth in the energy and IT sectors.
            </p>

            {/* Event Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">November 20-21, 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">info@eunbf2025.org</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Sectors */}
          <div>
            <h4 className="font-semibold text-white mb-4">Focus Sectors</h4>
            <ul className="space-y-2">
              {footerLinks.sectors.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold text-white mb-4">Key Partners</h4>
            <ul className="space-y-2">
              {footerLinks.partners.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">
                Get the latest updates about the EU-Nepal Business Forum 2025
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 EU-Nepal Business Forum. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* EU Global Gateway Attribution */}
      <div className="bg-blue-900 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-blue-200 text-sm">
              This forum is aligned with the{" "}
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-300 font-medium"
              >
                EU Global Gateway Initiative
              </a>{" "}
              promoting sustainable partnerships worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

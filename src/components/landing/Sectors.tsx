import { Zap, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Sectors() {
  return (
    <section id="sectors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Focus Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building on lessons learned from previous forums, we`re
            strategically focusing on two key sectors with the highest potential
            for EU-Nepal collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Energy Sector */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Renewable Energy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center space-x-2 text-white">
                  <Zap className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Energy Sector</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Green Energy & Sustainability
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Hydropower development and modernization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Solar and wind energy projects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Grid modernization and smart infrastructure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Green hydrogen production potential</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Energy storage solutions</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  Nepal`s renewable energy potential offers significant
                  opportunities for EU investors in sustainable energy
                  infrastructure.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* IT Sector */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Information Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center space-x-2 text-white">
                  <Cpu className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Information Technology</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Digital Innovation & Technology
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Software development and IT services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Business Process Outsourcing (BPO)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Digital infrastructure development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Startup ecosystem and innovation hubs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>AI and emerging technology applications</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  Nepal`s IT sector has witnessed exponential growth, offering
                  cost-effective opportunities for EU investors and
                  partnerships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why These Sectors?
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              These sectors were strategically selected based on Nepal`s
              competitive advantages, EU investment priorities, and the
              potential for sustainable, long-term partnerships. They align with
              both the EU`s Global Gateway initiative and Nepal`s development
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Globe, Handshake, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About the Forum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building on the success of previous EU-Nepal Business Forums, 2025
            marks a pivotal moment in strengthening economic ties between Europe
            and Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Strengthening EU-Nepal Economic Partnership
            </h3>
            <p className="text-gray-600 mb-6">
              As Nepal transitions to a middle-income country, the EU-Nepal
              Business Forum serves as a crucial platform to foster economic
              ties, promote sustainable investment, and facilitate dialogue
              between European and Nepali stakeholders.
            </p>
            <p className="text-gray-600 mb-6">
              The forum aligns with the European Union`s Global Gateway
              strategy, promoting smart, clean, and secure connections while
              strengthening partnerships that drive mutual growth and
              sustainability.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Focus on Energy and Information Technology sectors
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Business-to-business and business-to-government meetings
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Sustainable and inclusive development initiatives
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Business meeting"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Global Gateway
              </h4>
              <p className="text-gray-600">
                Aligned with EU`s Global Gateway initiative, promoting
                sustainable development through equal partnerships.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Handshake className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Partnership Building
              </h4>
              <p className="text-gray-600">
                Facilitating concrete partnerships between European and Nepali
                businesses across key sectors.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Economic Growth
              </h4>
              <p className="text-gray-600">
                Supporting Nepal`s Investment Decade 2025-2035 with strategic EU
                investments and partnerships.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

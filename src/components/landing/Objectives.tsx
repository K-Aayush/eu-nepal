import {
  Target,
  Users,
  Briefcase,
  FileText,
  Eye,
  Lightbulb,
} from "lucide-react";

export default function Objectives() {
  const objectives = [
    {
      icon: Target,
      title: "Catalyse Concrete Partnerships",
      description:
        "Move beyond discussion to facilitate tangible B2B and B2G connections, leading to identifiable leads, MoUs, or investment commitments.",
    },
    {
      icon: Eye,
      title: "Showcase EU Commitment",
      description:
        "Demonstrate the EU's strategic interest in Nepal and highlight specific opportunities for EU businesses in high-potential sectors.",
    },
    {
      icon: Lightbulb,
      title: "Provide Actionable Insights",
      description:
        "Equip Nepalese businesses with practical knowledge, best practices, and networking avenues to engage with EU counterparts.",
    },
    {
      icon: Briefcase,
      title: "Promote Sustainable Partnerships",
      description:
        "Foster sustainable business partnerships between European and Nepali private sectors, particularly in green growth sectors.",
    },
    {
      icon: FileText,
      title: "Deliver Policy Recommendations",
      description:
        "Generate focused, actionable recommendations for policy improvements to be presented to relevant authorities.",
    },
    {
      icon: Users,
      title: "Enhance Visibility",
      description:
        "Boost the visibility of EU-Nepal economic cooperation and improve understanding of mutual benefits.",
    },
  ];

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Forum Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting Nepal`s ambition to become a top investment destination
            under the &quotNepal Investment Decade 2025–2035&quot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <objective.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Expected Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Enhanced Confidence</h4>
              <p className="text-blue-100">
                Improved mutual confidence and trust advancing business
                environment
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Active Exploration</h4>
              <p className="text-blue-100">
                EU businesses actively exploring highlighted opportunities in
                Nepal
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Knowledge Transfer</h4>
              <p className="text-blue-100">
                Nepali private sector equipped with practical knowledge for EU
                market access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

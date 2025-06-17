import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Sarah Williams",
      title: "Director, EU Global Gateway Initiative",
      organization: "European Commission",
      image:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
      expertise: [
        "Global Gateway",
        "Sustainable Development",
        "International Relations",
      ],
    },
    {
      name: "Ramesh Adhikari",
      title: "Secretary",
      organization: "Ministry of Industry, Commerce & Supplies, Nepal",
      image:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
      expertise: ["Trade Policy", "Investment Promotion", "Economic Reform"],
    },
    {
      name: "Prof. Maria Gonzalez",
      title: "Chair, Renewable Energy Consortium",
      organization: "European Investment Bank",
      image:
        "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
      expertise: [
        "Renewable Energy",
        "Infrastructure Finance",
        "Sustainable Investment",
      ],
    },
    {
      name: "Raj Kumar Shrestha",
      title: "President",
      organization: "Confederation of Nepalese Industries",
      image:
        "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
      expertise: ["Manufacturing", "Private Sector Development", "Trade"],
    },
    {
      name: "Dr. Hans Mueller",
      title: "CEO",
      organization: "TechEurope Innovations",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
      expertise: ["Digital Innovation", "IT Services", "Startup Ecosystem"],
    },
    {
      name: "Sita Kumari Poudel",
      title: "Managing Director",
      organization: "Nepal IT Association",
      image:
        "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=300&h=400",
      expertise: [
        "Information Technology",
        "Digital Transformation",
        "Women in Tech",
      ],
    },
  ];

  const organizers = [
    {
      name: "EU Delegation to Nepal",
      logo: "🇪🇺",
      description:
        "Leading the European Union's diplomatic and development cooperation efforts in Nepal.",
    },
    {
      name: "Ministry of Industry, Commerce & Supplies",
      logo: "🇳🇵",
      description:
        "Government of Nepal's primary ministry for industrial and commercial policy.",
    },
    {
      name: "Investment Board Nepal",
      logo: "🏛️",
      description: "Nepal's apex investment promotion and facilitation agency.",
    },
    {
      name: "European Economic Chamber",
      logo: "🏢",
      description:
        "Representing European business interests and facilitating EU-Nepal trade.",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Speakers Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Speakers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders, policymakers, and experts from Europe and Nepal
            sharing insights on sustainable investment and economic partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {speaker.title}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {speaker.organization}
                </p>
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Organizers Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Organizers & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collaborative effort between key European and Nepali institutions
            committed to strengthening economic ties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{organizer.logo}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {organizer.name}
                </h3>
                <p className="text-gray-600 text-sm">{organizer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Speak at the Forum?
            </h3>
            <p className="text-gray-600 mb-6">
              We`re still looking for industry experts and thought leaders to
              share their insights. If you`re interested in speaking, please get
              in touch with our organizing committee.
            </p>
            <a
              href="mailto:speakers@eunbf2025.org"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Speaker Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

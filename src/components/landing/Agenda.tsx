import { Calendar, Clock, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Agenda() {
  const day1Events = [
    {
      time: "08:30 - 09:30",
      title: "Registration & Welcome Coffee",
      type: "networking",
      description: "Network with fellow participants and registration",
    },
    {
      time: "09:30 - 11:00",
      title: "Opening Session",
      type: "keynote",
      description: "Keynote addresses from EU and Nepal high-level officials",
    },
    {
      time: "11:00 - 11:30",
      title: "Networking Break",
      type: "break",
      description: "Coffee break and informal networking",
    },
    {
      time: "11:30 - 12:30",
      title: "Strategic Panel: Global Gateway",
      type: "panel",
      description:
        "Unlocking investment through EU's Global Gateway initiative",
    },
    {
      time: "12:30 - 13:30",
      title: "Networking Lunch",
      type: "networking",
      description: "Structured networking lunch with business leaders",
    },
    {
      time: "13:30 - 15:15",
      title: "Sector Spotlight: Green Energy",
      type: "sector",
      description:
        "Opportunities in renewables, hydropower, and grid modernization",
    },
    {
      time: "15:15 - 17:00",
      title: "Sector Spotlight: IT & Innovation",
      type: "sector",
      description: "Digital economy, tech partnerships, and startup ecosystem",
    },
    {
      time: "17:30 - 20:30",
      title: "Networking Dinner",
      type: "networking",
      description: "Evening reception with cultural program",
    },
  ];

  const day2Events = [
    {
      time: "09:00 - 10:30",
      title: "Investment Challenge Solutions",
      type: "workshop",
      description:
        "Story-driven session with real business cases and solutions",
    },
    {
      time: "10:30 - 12:00",
      title: "B2G Meetings",
      type: "meeting",
      description: "Pre-scheduled business-to-government meetings",
    },
    {
      time: "12:00 - 14:00",
      title: "Business Fair & Networking Lunch",
      type: "networking",
      description: "Open-format fair with themed networking tables",
    },
    {
      time: "14:00 - 15:30",
      title: "B2B Matchmaking Sessions",
      type: "meeting",
      description: "One-on-one business meetings and partnership discussions",
    },
    {
      time: "15:30 - 16:30",
      title: "Closing Session",
      type: "closing",
      description: "Key takeaways, reflections, and follow-up mechanisms",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-blue-100 text-blue-800";
      case "panel":
        return "bg-green-100 text-green-800";
      case "sector":
        return "bg-purple-100 text-purple-800";
      case "networking":
        return "bg-yellow-100 text-yellow-800";
      case "meeting":
        return "bg-red-100 text-red-800";
      case "workshop":
        return "bg-indigo-100 text-indigo-800";
      case "closing":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Forum Agenda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A dynamic 1.5-day program combining strategic dialogues, sector
            spotlights, B2B/B2G meetings, and networking opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>November 20-21, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span>150+ Participants Expected</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Day 1 - Thursday, November 20</span>
              </CardTitle>
              <p className="text-blue-100">
                Setting the Stage & Sectoral Deep Dives
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {day1Events.map((event, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-b-0 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-600">
                          {event.time}
                        </span>
                      </div>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Day 2 */}
          <Card className="shadow-lg">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Day 2 - Friday, November 21</span>
              </CardTitle>
              <p className="text-green-100">Business Engagement & Next Steps</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {day2Events.map((event, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-b-0 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-600">
                          {event.time}
                        </span>
                      </div>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Networking Focus
              </h4>
              <p className="text-gray-600">
                Structured networking opportunities throughout both days to
                maximize connections.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="pt-6">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                B2B & B2G Meetings
              </h4>
              <p className="text-gray-600">
                Pre-scheduled meetings to facilitate concrete business
                partnerships and government engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Actionable Outcomes
              </h4>
              <p className="text-gray-600">
                Focused on generating concrete partnerships, MoUs, and
                investment commitments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

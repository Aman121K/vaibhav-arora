import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  // All upcoming events
  const allEvents = [
    {
      date: "2024-10-15",
      title: "Karva Chauth Special Bhajan Evening",
      location: "Community Hall, Pitampura",
      time: "6:00 PM - 8:00 PM",
      type: "Festival",
      description: "Special bhajan evening celebrating Karva Chauth with traditional songs and aarti"
    },
    {
      date: "2024-10-25",
      title: "Diwali Celebration - Lakshmi Aarti",
      location: "Shri Ram Mandir, Delhi",
      time: "7:00 PM - 9:00 PM", 
      type: "Festival",
      description: "Grand Diwali celebration with Lakshmi aarti and devotional bhajans"
    },
    {
      date: "2024-11-05",
      title: "Private Wedding Ceremony",
      location: "Banquet Hall, CP",
      time: "5:00 PM - 7:00 PM",
      type: "Wedding",
      description: "Sacred wedding ceremony bhajans creating divine atmosphere for the couple"
    },
    {
      date: "2024-11-12",
      title: "Govardhan Puja Bhajan Sandhya",
      location: "ISKCON Temple, East of Kailash",
      time: "6:30 PM - 8:30 PM",
      type: "Temple",
      description: "Traditional Govardhan Puja celebration with Krishna bhajans and prasadam"
    },
    {
      date: "2024-11-20",
      title: "Guru Nanak Jayanti Celebration",
      location: "Gurudwara Bangla Sahib, CP",
      time: "7:00 AM - 9:00 AM",
      type: "Festival",
      description: "Morning kirtan and bhajan session for Guru Nanak Jayanti"
    },
    {
      date: "2024-12-01",
      title: "Corporate Cultural Event",
      location: "Corporate Office, Gurgaon",
      time: "6:00 PM - 8:00 PM",
      type: "Corporate",
      description: "Cultural evening with bhajans for corporate Diwali celebration"
    },
    {
      date: "2024-12-10",
      title: "Home Satyanarayan Katha",
      location: "Private Residence, Rohini",
      time: "10:00 AM - 12:00 PM",
      type: "Religious",
      description: "Traditional Satyanarayan katha with bhajans and prasadam"
    },
    {
      date: "2024-12-24",
      title: "Christmas Bhajan Evening",
      location: "Community Center, Dwarka",
      time: "7:00 PM - 9:00 PM",
      type: "Festival",
      description: "Interfaith celebration with devotional songs and Christmas carols"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Festival': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Wedding': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Temple': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Corporate': return 'bg-green-100 text-green-800 border-green-200';
      case 'Religious': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              All Events
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Upcoming Bhajan Events & Performances
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for upcoming spiritual events, festivals, and private performances. Book your slot for divine musical experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event, index) => (
              <Card key={index} className="shadow-spiritual hover:shadow-warm transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium">
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
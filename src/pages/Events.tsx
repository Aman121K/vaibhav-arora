import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  // Complete Hindu Panchang - Auspicious dates for Mata Ki Choki & Jagran
  const auspiciousDates = [
    // January 2025 - Makar Sankranti Month
    {
      date: "2025-01-15",
      title: "Makar Sankranti - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "6:00 PM - 10:00 PM",
      type: "Maha Auspicious",
      description: "Makar Sankranti - Most auspicious for Mata Ki Choki and Jagran. Sun enters Capricorn.",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-01-26",
      title: "Republic Day Special Jagran",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Auspicious",
      description: "Good muhurat for community Mata Ki Choki and spiritual gatherings",
      isRecommended: true,
      priority: "High"
    },

    // February 2025 - Magh Month
    {
      date: "2025-02-14",
      title: "Valentine's Day - Couple's Mata Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 9:00 PM",
      type: "Auspicious",
      description: "Perfect for couple's spiritual ceremony and Mata Ki Choki",
      isRecommended: false,
      priority: "Medium"
    },

    // March 2025 - Phalgun Month - Holi Festival
    {
      date: "2025-03-08",
      title: "Holi Special - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "6:00 PM - 10:00 PM",
      type: "Maha Auspicious",
      description: "Holi eve - Highly auspicious for Mata Ki Choki and spiritual gatherings",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-03-25",
      title: "Ram Navami - Mata Jagran",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Lord Rama's birthday - Most sacred for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },

    // April 2025 - Chaitra Month - Navratri Begins
    {
      date: "2025-04-02",
      title: "Chaitra Navratri Day 1 - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "First day of Chaitra Navratri - Most auspicious for Mata Ki Choki",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-04-05",
      title: "Chaitra Navratri Day 4 - Maa Kushmanda Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Maa Kushmanda day - Perfect for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-04-08",
      title: "Chaitra Navratri Day 7 - Maa Kalratri Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Maa Kalratri day - Highly powerful for Mata Ki Choki",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-04-10",
      title: "Ram Navami - Special Mata Jagran",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Ram Navami - Most sacred day for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-04-14",
      title: "Ambedkar Jayanti - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 10:00 PM",
      type: "Auspicious",
      description: "Good muhurat for spiritual gatherings and Mata Ki Choki",
      isRecommended: false,
      priority: "Medium"
    },

    // May 2025 - Vaishakh Month
    {
      date: "2025-05-01",
      title: "Labour Day - Community Mata Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 10:00 PM",
      type: "Auspicious",
      description: "Good muhurat for community Mata Ki Choki and spiritual gatherings",
      isRecommended: false,
      priority: "Medium"
    },
    {
      date: "2025-05-12",
      title: "Akshaya Tritiya - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Akshaya Tritiya - Highly auspicious for Mata Ki Choki and spiritual ceremonies",
      isRecommended: true,
      priority: "Highest"
    },

    // June 2025 - Jyeshtha Month
    {
      date: "2025-06-21",
      title: "International Yoga Day - Mata Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 10:00 PM",
      type: "Auspicious",
      description: "Good muhurat for spiritual gatherings and Mata Ki Choki",
      isRecommended: false,
      priority: "Medium"
    },

    // July 2025 - Ashadh Month - Sawan Begins
    {
      date: "2025-07-05",
      title: "Sawan Month Begins - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Sawan month begins - Most auspicious month for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-07-12",
      title: "Sawan Somvar - Special Mata Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Sawan Monday - Highly auspicious for Mata Ki Choki",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-07-21",
      title: "Sawan Somvar - Mata Jagran",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Sawan Monday - Perfect for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-07-28",
      title: "Sawan Somvar - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Sawan Monday - Highly auspicious for Mata Ki Choki",
      isRecommended: true,
      priority: "Highest"
    },

    // August 2025 - Sawan/Bhadrapada Month
    {
      date: "2025-08-04",
      title: "Sawan Somvar - Mata Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Sawan Monday - Most auspicious for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-08-15",
      title: "Independence Day - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 10:00 PM",
      type: "Auspicious",
      description: "Independence Day - Good muhurat for Mata Ki Choki",
      isRecommended: true,
      priority: "High"
    },
    {
      date: "2025-08-26",
      title: "Krishna Janmashtami - Mata Jagran",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 12:00 AM",
      type: "Maha Auspicious",
      description: "Krishna Janmashtami - Most auspicious for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },

    // September 2025 - Bhadrapada Month
    {
      date: "2025-09-07",
      title: "Ganesh Chaturthi - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Ganesh Chaturthi - Highly auspicious for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-09-15",
      title: "Shardiya Navratri Day 1 - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "First day of Shardiya Navratri - Most auspicious for Mata Ki Choki",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-09-18",
      title: "Navratri Day 4 - Maa Kushmanda Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Maa Kushmanda day - Perfect for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-09-21",
      title: "Navratri Day 7 - Maa Kalratri Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Maa Kalratri day - Highly powerful for Mata Ki Choki",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-09-23",
      title: "Navratri Day 9 - Maa Siddhidatri Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Maa Siddhidatri day - Most auspicious for Mata Ki Choki",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-09-24",
      title: "Dussehra - Special Mata Jagran",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 12:00 AM",
      type: "Maha Auspicious",
      description: "Dussehra - Most sacred day for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },

    // October 2025 - Ashwin Month
    {
      date: "2025-10-02",
      title: "Gandhi Jayanti - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 10:00 PM",
      type: "Auspicious",
      description: "Good muhurat for spiritual gatherings and Mata Ki Choki",
      isRecommended: false,
      priority: "Medium"
    },
    {
      date: "2025-10-15",
      title: "Karva Chauth - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "6:00 PM - 10:00 PM",
      type: "Maha Auspicious",
      description: "Karva Chauth - Highly auspicious for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-10-25",
      title: "Diwali - Lakshmi Mata Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Maha Auspicious",
      description: "Diwali - Most auspicious for Lakshmi Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },

    // November 2025 - Kartik Month
    {
      date: "2025-11-12",
      title: "Govardhan Puja - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "6:30 PM - 10:30 PM",
      type: "Maha Auspicious",
      description: "Govardhan Puja - Highly auspicious for Mata Ki Choki and Jagran",
      isRecommended: true,
      priority: "Highest"
    },
    {
      date: "2025-11-15",
      title: "Bhai Dooj - Mata Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 10:00 PM",
      type: "Auspicious",
      description: "Bhai Dooj - Good muhurat for Mata Ki Choki",
      isRecommended: true,
      priority: "High"
    },
    {
      date: "2025-11-20",
      title: "Guru Nanak Jayanti - Mata Jagran",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 11:00 PM",
      type: "Auspicious",
      description: "Guru Nanak Jayanti - Good for spiritual gatherings and Mata Ki Choki",
      isRecommended: false,
      priority: "Medium"
    },

    // December 2025 - Margashirsha Month
    {
      date: "2025-12-10",
      title: "Satyanarayan Katha - Mata Choki",
      location: "Available for Home/Private Venue",
      time: "10:00 AM - 2:00 PM",
      type: "Auspicious",
      description: "Satyanarayan Katha - Good muhurat for Mata Ki Choki",
      isRecommended: false,
      priority: "Medium"
    },
    {
      date: "2025-12-25",
      title: "Christmas - Mata Ki Choki",
      location: "Available for Home/Private Venue",
      time: "7:00 PM - 10:00 PM",
      type: "Auspicious",
      description: "Christmas - Good muhurat for Mata Ki Choki and spiritual gatherings",
      isRecommended: false,
      priority: "Medium"
    }
  ];

  // Regular upcoming events
  const allEvents = [
    {
      date: "2025-10-15",
      title: "Karva Chauth Special Bhajan Evening",
      location: "Community Hall, Pitampura",
      time: "6:00 PM - 8:00 PM",
      type: "Festival",
      description: "Special bhajan evening celebrating Karva Chauth with traditional songs and aarti"
    },
    {
      date: "2025-10-25",
      title: "Diwali Celebration - Lakshmi Aarti",
      location: "Shri Ram Mandir, Delhi",
      time: "7:00 PM - 9:00 PM", 
      type: "Festival",
      description: "Grand Diwali celebration with Lakshmi aarti and devotional bhajans"
    },
    {
      date: "2025-11-05",
      title: "Private Wedding Ceremony",
      location: "Banquet Hall, CP",
      time: "5:00 PM - 7:00 PM",
      type: "Wedding",
      description: "Sacred wedding ceremony bhajans creating divine atmosphere for the couple"
    },
    {
      date: "2025-11-12",
      title: "Govardhan Puja Bhajan Sandya",
      location: "ISKCON Temple, East of Kailash",
      time: "6:30 PM - 8:30 PM",
      type: "Temple",
      description: "Traditional Govardhan Puja celebration with Krishna bhajans and prasadam"
    },
    {
      date: "2025-11-20",
      title: "Guru Nanak Jayanti Celebration",
      location: "Gurudwara Bangla Sahib, CP",
      time: "7:00 AM - 9:00 AM",
      type: "Festival",
      description: "Morning kirtan and bhajan session for Guru Nanak Jayanti"
    },
    {
      date: "2025-12-01",
      title: "Corporate Cultural Event",
      location: "Corporate Office, Gurgaon",
      time: "6:00 PM - 8:00 PM",
      type: "Corporate",
      description: "Cultural evening with bhajans for corporate Diwali celebration"
    },
    {
      date: "2025-12-10",
      title: "Home Satyanarayan Katha",
      location: "Private Residence, Rohini",
      time: "10:00 AM - 12:00 PM",
      type: "Religious",
      description: "Traditional Satyanarayan katha with bhajans and prasadam"
    },
    {
      date: "2025-12-24",
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
      case 'Maha Auspicious': return 'bg-red-100 text-red-800 border-red-200';
      case 'Auspicious': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Highest': return 'bg-red-500 text-white';
      case 'High': return 'bg-orange-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  // Group dates by priority
  const highestPriority = auspiciousDates.filter(date => date.priority === 'Highest');
  const highPriority = auspiciousDates.filter(date => date.priority === 'High');
  const mediumPriority = auspiciousDates.filter(date => date.priority === 'Medium');

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

      {/* Auspicious Dates Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🌟 Hindu Panchang - Best Dates for Mata Ki Choki & Jagran
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Complete Hindu calendar with all auspicious dates for Mata Ki Choki and Jagran ceremonies. 
              These dates are selected based on Hindu Panchang for maximum spiritual benefits and divine blessings.
            </p>
          </div>

          {/* Highest Priority Dates */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-red-500 mr-3" />
              <h3 className="text-xl font-bold text-red-600">🔥 Maha Auspicious Dates - Highest Priority</h3>
              <Badge className="ml-3 bg-red-500 text-white">Most Sacred</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highestPriority.map((event, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border-2 border-red-200" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={`${getTypeColor(event.type)} flex items-center gap-1`}>
                        <Star className="w-3 h-3" />
                        {event.type}
                      </Badge>
                      <Badge className={getPriorityColor(event.priority)}>
                        {event.priority}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground font-medium mb-2">
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-xs text-red-800 font-bold">
                        🔥 BOOK NOW - Most Sacred Date
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* High Priority Dates */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-orange-500 mr-3" />
              <h3 className="text-xl font-bold text-orange-600">⭐ Highly Auspicious Dates</h3>
              <Badge className="ml-3 bg-orange-500 text-white">Recommended</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highPriority.map((event, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-orange-200" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={`${getTypeColor(event.type)} flex items-center gap-1`}>
                        <Star className="w-3 h-3" />
                        {event.type}
                      </Badge>
                      <Badge className={getPriorityColor(event.priority)}>
                        {event.priority}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground font-medium mb-2">
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    </div>
                    
                    <div className="p-2 bg-orange-50 border border-orange-200 rounded-md">
                      <p className="text-xs text-orange-800 font-medium">
                        ⭐ Highly Recommended for Mata Choki
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Medium Priority Dates */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold text-yellow-600">📅 Good Auspicious Dates</h3>
              <Badge className="ml-3 bg-yellow-500 text-white">Available</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumPriority.map((event, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-yellow-200" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={`${getTypeColor(event.type)} flex items-center gap-1`}>
                        {event.type}
                      </Badge>
                      <Badge className={getPriorityColor(event.priority)}>
                        {event.priority}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground font-medium mb-2">
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long',
                        year: 'numeric'
                      })}
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

      {/* Regular Events Section */}
      <div className="container mx-auto px-4 py-12 bg-background/50">
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
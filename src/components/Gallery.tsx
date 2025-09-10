import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, MapPin, Users } from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'images' | 'events'>('videos');

  // Sample YouTube videos - replace with actual video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Shri Krishna Bhajan - Live Performance",
      description: "Beautiful rendition of classic Krishna bhajans at a temple gathering"
    },
    {
      id: "9bZkp7q19f0",
      title: "Ganesh Aarti - Festival Celebration",
      description: "Energetic Ganesh aarti performed during Ganesh Chaturthi"
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Ram Bhajan Medley",
      description: "Soulful Ram bhajans that touch the heart"
    },
    {
      id: "jNQXAC9IVRw",
      title: "Hanuman Chalisa - Devotional",
      description: "Traditional Hanuman Chalisa with tabla accompaniment"
    }
  ];

  // Sample event images
  const eventImages = [
    {
      src: "/lovable-uploads/b91312c7-37fa-4e34-84b4-ea33c4a5baef.png",
      alt: "Vaibhav Arora performing at a spiritual gathering",
      title: "Temple Gathering Performance"
    },
    {
      src: "/placeholder.svg",
      alt: "Bhajan performance at wedding",
      title: "Wedding Ceremony Bhajans"
    },
    {
      src: "/placeholder.svg", 
      alt: "Festival celebration",
      title: "Diwali Festival Celebration"
    },
    {
      src: "/placeholder.svg",
      alt: "Home gathering performance",
      title: "Intimate Home Gathering"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      date: "2024-10-15",
      title: "Karva Chauth Special Bhajan Evening",
      location: "Community Hall, Pitampura",
      time: "6:00 PM - 8:00 PM",
      type: "Festival"
    },
    {
      date: "2024-10-25",
      title: "Diwali Celebration - Lakshmi Aarti",
      location: "Shri Ram Mandir, Delhi",
      time: "7:00 PM - 9:00 PM", 
      type: "Festival"
    },
    {
      date: "2024-11-05",
      title: "Private Wedding Ceremony",
      location: "Banquet Hall, CP",
      time: "5:00 PM - 7:00 PM",
      type: "Wedding"
    },
    {
      date: "2024-11-12",
      title: "Govardhan Puja Bhajan Sandhya",
      location: "ISKCON Temple, East of Kailash",
      time: "6:30 PM - 8:30 PM",
      type: "Temple"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gallery & Events
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the divine music through our performances, witness the spiritual journey, 
              and join us in upcoming bhajan events
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-card rounded-lg p-2 shadow-warm">
              <Button
                variant={activeTab === 'videos' ? 'spiritual' : 'ghost'}
                onClick={() => setActiveTab('videos')}
                className="mx-1"
              >
                <Play className="w-4 h-4 mr-2" />
                Videos
              </Button>
              <Button
                variant={activeTab === 'images' ? 'spiritual' : 'ghost'}
                onClick={() => setActiveTab('images')}
                className="mx-1"
              >
                <Users className="w-4 h-4 mr-2" />
                Event Images
              </Button>
              <Button
                variant={activeTab === 'events' ? 'spiritual' : 'ghost'}
                onClick={() => setActiveTab('events')}
                className="mx-1"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events
              </Button>
            </div>
          </div>

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden shadow-spiritual hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted relative group">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="w-full h-full"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{video.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Images Tab */}
          {activeTab === 'images' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventImages.map((image, index) => (
                <Card key={index} className="overflow-hidden shadow-spiritual hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video relative group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="shadow-spiritual hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="text-primary border-primary">
                        {event.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;